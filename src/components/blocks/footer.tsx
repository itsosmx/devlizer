"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navigation");

  const navLinks = [
    { label: navT("services"), href: "/services" },
    { label: navT("portfolio"), href: "/portfolio" },
    { label: navT("about"), href: "/about" },
    { label: navT("contact"), href: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
            >
              {t("brand")}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hi@devlizer.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="size-4" />
                  hi@devlizer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {t("terms")}
            </Link>
            <Link
              href="/blog"
              className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {t("blog")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
