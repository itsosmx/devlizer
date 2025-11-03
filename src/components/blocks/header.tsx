"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
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

export default function Header() {
  const t = useTranslations("Navigation");
  const isMobile = useIsMobile();

  const portfolioApps = [
    {
      title: "Widget Ease",
      href: "https://widgetease.com",
      description: "AI-powered customer support chat widget for businesses",
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

        <NavigationMenu viewport={isMobile}>
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
        </NavigationMenu>

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
            <Link
              href="/contact"
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
              <span className="relative z-10">{t("cta")}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href ?? "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
