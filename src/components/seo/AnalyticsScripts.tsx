import Script from "next/script";

export function StructuredData({ data }: { data: Record<string, any> | Record<string, any>[] }) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
