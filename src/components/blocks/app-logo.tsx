"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function AppLogo({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const t = useTranslations("Brand");
  return (
    <motion.h1
      className={cn("flex items-center space-x-2 text-4xl font-bold", className)}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      style={{ transformStyle: "preserve-3d" }}>
      <Link href="/">{t("name")}</Link>
    </motion.h1>
  );
}
