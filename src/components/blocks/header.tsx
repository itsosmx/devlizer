"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "../ui/button";
import AppLogo from "./app-logo";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { PhoneCallIcon } from "lucide-react";

export default function Header() {
  const t = useTranslations("Navigation");
  const isMobile = useIsMobile();

  const portfolioApps = [
    {
      title: "Widget Ease",
      href: "https://widgetease.com",
      description: "AI-powered customer support chat widget for businesses",
    },
    {
      title: "Joblizer",
      href: "https://joblizer.com",
      description: "Skip the Resume Blackhole. Get Hired Smarter.",
    },
    {
      title: "Menulizer",
      href: "https://menulizer.com",
      description: "digital menu generator for restaurants and cafes",
    },
    // Add more apps as they become available
  ];

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

        {/* <NavigationMenu viewport={isMobile}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href="/services">{t("services")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href="/about">{t("about")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href="/contact">{t("contact")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/portfolio">{t("portfolio")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("apps")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {portfolioApps.map((app) => (
                    <ListItem key={app.title} title={app.title} href={app.href}>
                      {app.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}>
            <Button asChild>
              <Link href="/contact">
                <PhoneCallIcon />
                {t("cta")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
