"use client";

import Script from "next/script";

interface SchemaProps {
  schema: any;
}

export default function Schema({ schema }: SchemaProps) {
  return (
    <Script
      id="schema-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 