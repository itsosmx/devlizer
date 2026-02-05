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
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Brand Elements */}
      <motion.div className="absolute top-4 left-10 text-primary/10" animate={float} style={{ transformStyle: "preserve-3d" }}>
        <Star className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute top-4 right-10 text-accent/10"
        animate={{
          ...(rotate3D.animate as any),
          transition: { ...rotate3D.animate.transition, delay: 3 },
        }}
        style={{ transformStyle: "preserve-3d" }}>
        <CheckCircle className="h-6 w-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}>
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            whileHover={{
              scale: 1.05,
              rotateY: 2,
            }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}>
            {" "}
            <motion.h2 className="text-6xl font-bold text-primary" whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
              {t("brand")}
            </motion.h2>
          </motion.div>

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
            className="mt-8 pt-6 border-t border-border/50 text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}>
            <motion.p whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {t("copyright")}
            </motion.p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <motion.p whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link href="/privacy">{t("privacy")}</Link>
              </motion.p>
              <motion.p whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link href="/terms">{t("terms")}</Link>
              </motion.p>

              <motion.p whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link href="/blog">{t("blog")}</Link>
              </motion.p>
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
