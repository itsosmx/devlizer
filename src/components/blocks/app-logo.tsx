"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AppLogo({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <motion.h1
      className={cn("flex items-center space-x-2 text-4xl font-bold", className)}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      style={{ transformStyle: "preserve-3d" }}>
      <Link href="/">Devlizer</Link>
    </motion.h1>
  );
}
