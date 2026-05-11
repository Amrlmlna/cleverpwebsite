import { sanityClient } from "./sanity";
import { allPostsQuery, postBySlugQuery, allSlugsQuery } from "./queries";
import { urlFor } from "./image";
import type { PortableTextBlock } from "@portabletext/types";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  author: string;
  role: string;
  category: string;
  readTime: string;
  tags: string[];
  content: string; // for backwards compat during migration
  body?: PortableTextBlock[];
  mainImage?: unknown;
}

function formatArticle(raw: Record<string, unknown>): Article {
  const publishedAt = raw.publishedAt as string;
  const d = new Date(publishedAt);
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  return {
    slug: raw.slug as string,
    title: raw.title as string,
    description: raw.description as string,
    date: `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
    dateISO: publishedAt?.split("T")[0] ?? "",
    author: (raw.author as string) ?? "Amirul",
    role: (raw.authorRole as string) ?? "Creator, CleverCV",
    category: (raw.category as string) ?? "Tips Karir",
    readTime: (raw.readTime as string) ?? "5 menit baca",
    tags: (raw.tags as string[]) ?? [],
    content: "", // not used when body is present
    body: raw.body as PortableTextBlock[] | undefined,
    mainImage: raw.mainImage,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const posts = await sanityClient.fetch<Record<string, unknown>[]>(
    allPostsQuery,
    {},
    { next: { tags: ["posts"] } }
  );
  return posts.map(formatArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const post = await sanityClient.fetch<Record<string, unknown> | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: ["posts"] } }
  );
  if (!post) return null;
  return formatArticle(post);
}

export async function getAllSlugs(): Promise<string[]> {
  const slugs = await sanityClient.fetch<{ slug: string }[]>(
    allSlugsQuery,
    {},
    { next: { tags: ["posts"] } }
  );
  return slugs.map((s) => s.slug);
}

export function getArticleImageUrl(image: unknown, width = 800): string {
  if (!image) return "";
  return urlFor(image).width(width).url();
}
