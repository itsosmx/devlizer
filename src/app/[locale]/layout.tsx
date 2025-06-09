import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo/AnalyticsScripts";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { generatePageMetadata, homeStructuredData } from "@/lib/metadata";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

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

  return (
    <html lang={locale}>
      <StructuredData
        data={[homeStructuredData.organization, homeStructuredData.website, homeStructuredData.webPage, homeStructuredData.breadcrumb]}
      />
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId="G-CXXZE4SD75" />}
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cairo.variable} antialiased dark scroll-smooth`}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Toaster />
        <Script src="https://embed.widgetease.com/embed.js?t=gASu3MeiiulA1DtMWeSDsS2pm-AdbTYt&v=1" async></Script>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
  });
}

export const viewport: Viewport = {
  themeColor: "black",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
