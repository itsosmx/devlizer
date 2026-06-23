"use client";

import { cn } from "@/lib/utils";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Cloudflare",
  "React Native",
  "shadcn/ui",
  "Prisma",
];

function MarqueeRow({ items, reverse = false, duration = 30 }: { items: string[]; reverse?: boolean; duration?: number }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-2">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div
        className={cn("flex shrink-0 gap-4", reverse ? "animate-marquee-reverse" : "animate-marquee")}
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicated.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-5 py-2.5 text-sm font-medium text-foreground whitespace-nowrap backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondHalf = technologies.slice(Math.ceil(technologies.length / 2));

  return (
    <div className="space-y-3">
      <MarqueeRow items={firstHalf} duration={35} />
      <MarqueeRow items={secondHalf} reverse duration={40} />
    </div>
  );
}
