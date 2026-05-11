/**
 * Migration script: uploads hardcoded articles to Sanity.
 *
 * Usage:
 *   npx tsx scripts/migrate-articles.ts
 *
 * Requires .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID,
 * NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_READ_TOKEN.
 */

import { createClient } from "@sanity/client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// --- Sanity client (write-capable) ---
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_READ_TOKEN!, // editor token can write
  useCdn: false,
});

// --- Minimal HTML-to-Portable-Text converter ---
interface PTBlock {
  _type: "block";
  _key: string;
  style: string;
  markDefs: unknown[];
  children: { _type: string; _key: string; text: string; marks: string[] }[];
}

function htmlToBlocks(html: string): PTBlock[] {
  const blocks: PTBlock[] = [];
  let keyIdx = 0;
  const key = () => `block_${keyIdx++}`;

  // Split by block-level tags
  const tagRe = /<(h[23]|p|li|blockquote)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = tagRe.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    const inner = match[2];
    const style = tag === "h2" ? "h2" : tag === "h3" ? "h3" : tag === "blockquote" ? "blockquote" : "normal";

    // Extract text and inline marks
    const children = parseInline(inner);
    blocks.push({
      _type: "block",
      _key: key(),
      style,
      markDefs: [],
      children,
    });
  }

  // If no blocks found, wrap entire content as a single normal block
  if (blocks.length === 0 && html.trim()) {
    blocks.push({
      _type: "block",
      _key: key(),
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: key(), text: stripTags(html), marks: [] }],
    });
  }

  return blocks;
}

function parseInline(html: string): { _type: string; _key: string; text: string; marks: string[] }[] {
  const children: { _type: string; _key: string; text: string; marks: string[] }[] = [];
  let keyIdx = 1000;
  const key = () => `span_${keyIdx++}`;

  // Simple approach: strip tags and track marks
  // Handle <strong>, <em>, <a> inline
  const parts = html.split(/(<\/?(?:strong|em|b|i|a)(?:\s[^>]*)?>)/i);
  let currentMarks: string[] = [];

  for (const part of parts) {
    if (!part) continue;
    const lower = part.toLowerCase();

    if (lower === "<strong>" || lower === "<b>") {
      currentMarks = [...currentMarks, "strong"];
    } else if (lower === "</strong>" || lower === "</b>") {
      currentMarks = currentMarks.filter((m) => m !== "strong");
    } else if (lower === "<em>" || lower === "<i>") {
      currentMarks = [...currentMarks, "em"];
    } else if (lower === "</em>" || lower === "</i>") {
      currentMarks = currentMarks.filter((m) => m !== "em");
    } else if (lower.startsWith("<a ")) {
      // For simplicity, skip link annotations in migration
    } else if (lower === "</a>") {
      // no-op
    } else {
      const text = stripTags(part).trim();
      if (text) {
        children.push({
          _type: "span",
          _key: key(),
          text,
          marks: [...currentMarks],
        });
      }
    }
  }

  if (children.length === 0) {
    const text = stripTags(html).trim();
    if (text) {
      children.push({ _type: "span", _key: key(), text, marks: [] });
    }
  }

  return children;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
}

// --- Main ---
async function migrate() {
  // Read original articles from git-recovered file
  const articlesPath = path.resolve(__dirname, "../src/lib/articles-migration-data.json");

  if (!fs.existsSync(articlesPath)) {
    console.error(
      "Migration data file not found at src/lib/articles-migration-data.json.\n" +
      "Generate it first by running:\n" +
      "  git show e96074b:src/lib/articles.ts | node -e \"...\" > src/lib/articles-migration-data.json"
    );
    process.exit(1);
  }

  const articles = JSON.parse(fs.readFileSync(articlesPath, "utf-8"));

  for (const article of articles) {
    console.log(`Migrating: ${article.slug}`);

    const body = htmlToBlocks(article.content);

    const doc = {
      _type: "post",
      _id: `post-${article.slug}`,
      title: article.title,
      slug: { _type: "slug", current: article.slug },
      description: article.description,
      publishedAt: new Date(article.dateISO).toISOString(),
      author: article.author,
      authorRole: article.role,
      category: article.category,
      readTime: article.readTime,
      tags: article.tags,
      body,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ Created/updated: ${article.slug}`);
  }

  console.log("\nMigration complete!");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
