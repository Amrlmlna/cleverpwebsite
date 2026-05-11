"use client";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/lib/image";

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3>{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote>{children}</blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href?: string };
    }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  types: {
    image: ({
      value,
    }: {
      value?: { asset?: { _ref?: string }; alt?: string };
    }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure>
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt ?? ""}
            width={800}
            height={450}
            className="rounded-xl"
          />
          {value.alt && <figcaption>{value.alt}</figcaption>}
        </figure>
      );
    },
  },
};

export default function PortableText({ body }: { body: PortableTextBlock[] }) {
  return <PortableTextComponent value={body} components={components} />;
}
