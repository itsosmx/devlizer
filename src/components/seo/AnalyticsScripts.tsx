import Script from "next/script";

export function StructuredData({ data }: { data: Record<string, any> | Record<string, any>[] }) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
