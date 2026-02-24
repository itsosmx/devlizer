"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="px-6 py-12 border-t bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h2 className="text-6xl font-bold text-primary">{t("brand")}</h2>
          </div>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}>
            {t("tagline")}
          </motion.p>

          {/* Additional Footer Info */}
          <motion.div
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}>
            <motion.p whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {t("copyright")}
            </motion.p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Link className="hover:text-primary scale-105 transition-all text-muted-foreground/70" href="/privacy">{t("privacy")}</Link>
              <Link className="hover:text-primary scale-105 transition-all text-muted-foreground/70" href="/terms">{t("terms")}</Link>
              <Link className="hover:text-primary scale-105 transition-all text-muted-foreground/70" href="/blog">{t("blog")}</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

const rotate3D = {
  initial: { rotateX: 0, rotateY: 0, rotateZ: 0 },
  animate: {
    rotateX: [0, 5, 0],
    rotateY: [0, 10, 0],
    rotateZ: [0, 2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const float = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
