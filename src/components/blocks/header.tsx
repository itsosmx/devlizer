"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import AppLogo from "./app-logo";

export default function Header() {
  return (
    <motion.header
      className="px-6 py-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transform: "translateZ(0)",
        perspective: "1000px",
      }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <AppLogo />

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ transformStyle: "preserve-3d" }}>
          {["Services", "About", "Contact", "Portfolio"].map((item, index) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-all duration-300 relative"
              variants={fadeInUp}
              whileHover={{
                scale: 1.1,
                rotateX: 10,
                z: 50,
              }}
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}>
              <span className="relative z-10">{item}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          whileHover={{
            scale: 1.05,
            rotateY: -5,
            rotateX: 5,
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformStyle: "preserve-3d" }}>
          <Link
            href="#contact"
            className={buttonVariants({
              size: "lg",
              className: "shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden",
            })}>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Get In Touch</span>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
