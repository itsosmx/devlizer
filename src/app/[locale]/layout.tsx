import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";
import { StructuredData } from "@/components/seo/AnalyticsScripts";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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
      <StructuredData data={[structuredData.organization, structuredData.website, structuredData.webPage, structuredData.breadcrumb]} />
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId="G-CXXZE4SD75" />}

      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cairo.variable} antialiased dark scroll-smooth`}>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
        <Toaster />
        <Script src="https://embed.widgetease.com/embed.js?t=gASu3MeiiulA1DtMWeSDsS2pm-AdbTYt&v=1" async></Script>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
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
