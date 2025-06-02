import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";
import { StructuredData } from "@/components/seo/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return generateSEOMetadata({
    title: "Your One-Stop Solution for Development",
    description:
      "Accelerate your development journey with Devlizer. From mobile apps to web applications, we provide cutting-edge solutions for modern developers and businesses.",
    keywords: [
      "devlizer",
      "web development",
      "mobile app development",
      "software development",
      "next.js development",
      "react development",
      "typescript development",
      "modern development tools",
      "UI/UX design services",
      "responsive web design",
      "progressive web apps",
      "full-stack development",
      "api development",
      "database solutions",
      "cloud hosting solutions",
      "development consulting",
      "enterprise software solutions",
      "custom software development",
      "e-commerce development",
      "cms development",
      "mobile-first design",
      "cross-platform development",
      "agile development",
      "devops services",
      "performance optimization",
    ],
    url: "/",
    locale,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Generate structured data for the homepage
  const structuredData = generateStructuredData({
    title: "Devlizer - Your One-Stop Solution for Development",
    description:
      "Accelerate your development journey with Devlizer. From mobile apps to web applications, we provide cutting-edge solutions for modern developers and businesses.",
    url: "/",
    locale,
  });

  return (
    <html lang={locale}>
      <head>
        {/* Structured Data */}
        <StructuredData data={[structuredData.organization, structuredData.website, structuredData.webPage, structuredData.breadcrumb]} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark scroll-smooth`}>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
