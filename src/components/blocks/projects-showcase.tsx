"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  slug: string;
  thumbnail?: {
    url: string;
  } | null;
  demoUrl?: string | null;
}

interface ProjectsShowcaseProps {
  projects: Project[];
  locale: string;
}

export function ProjectsShowcase({ projects, locale }: ProjectsShowcaseProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", locale === "ar" && "rtl")}>
      {projects.map((project, index) => (
        <motion.a
          key={project.slug}
          href={project.demoUrl || `#`}
          target={project.demoUrl ? "_blank" : undefined}
          rel={project.demoUrl ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 aspect-video"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            {project.thumbnail?.url ? (
              <Image
                src={project.thumbnail.url}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <span className="text-muted-foreground text-sm">{project.name}</span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Name + icon on hover */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <h3 className="text-lg font-semibold text-white drop-shadow-md line-clamp-2">
                {project.name}
              </h3>
              {project.demoUrl && (
                <ExternalLink className="size-5 text-white/90 shrink-0 ml-3" />
              )}
            </div>
          </div>

       
        </motion.a>
      ))}
    </div>
  );
}
