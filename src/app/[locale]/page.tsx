import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, CheckCircle2, Code2, Globe, PhoneCallIcon, PhoneIcon, Smartphone, Star, Users, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ElegantShape } from "@/components/ui/shadcn-io/shape-landing-hero";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/ui/retro-grid";
import { WarpBackground } from "@/components/ui/warp";

export default function HomePage() {
  const t = useTranslations();

  const services = [
    { key: "fullStack", icon: Code2 },
    { key: "aiSolutions", icon: Bot },
    { key: "automation", icon: Workflow },
    { key: "mobileApp", icon: Smartphone },
    { key: "professionalWebsite", icon: Globe },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
        <WarpBackground className="absolute inset-0 bg-transparent" gridColor="rgba(255, 129, 99, 0.01)" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight rtl:leading-tight">
            {t("HomePage.hero.title")}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("HomePage.hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("HomePage.hero.description")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="px-12! py-6 text-xl gap-2 rounded-2xl">
              <Link href="/contact">
                <PhoneIcon className="size-5" />
                {t("HomePage.hero.cta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              {t("HomePage.services.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t("HomePage.services.title")} <span className="text-primary">{t("HomePage.services.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("HomePage.services.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ key, icon: Icon }, index) => (
              <Card
                key={key}
                className={cn("group hover:border-primary/50 transition-all duration-300", {
                  "col-span-2": index === services.length - 1,
                })}>
                <CardHeader>
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(`HomePage.services.items.${key}.title`)}</CardTitle>
                  <CardDescription>{t(`HomePage.services.items.${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[0, 1, 2].map((featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                        <span>{t(`HomePage.services.items.${key}.features.${featureIndex}`)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              {t("HomePage.whyUs.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t("HomePage.whyUs.title")} <span className="text-primary">{t("HomePage.whyUs.titleHighlight")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Zap className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("HomePage.whyUs.items.fastDelivery.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("HomePage.whyUs.items.fastDelivery.description")}</p>
            </div>

            <div className="text-center space-y-3">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Code2 className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("HomePage.whyUs.items.cleanCode.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("HomePage.whyUs.items.cleanCode.description")}</p>
            </div>

            <div className="text-center space-y-3">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("HomePage.whyUs.items.clientFocused.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("HomePage.whyUs.items.clientFocused.description")}</p>
            </div>

            <div className="text-center space-y-3">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("HomePage.whyUs.items.provenResults.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("HomePage.whyUs.items.provenResults.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              {t("HomePage.technologies.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t("HomePage.technologies.title")} <span className="text-primary">{t("HomePage.technologies.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("HomePage.technologies.description")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Cloudflare",
              "React Native",
              "shadcn/ui",
              "Prisma",
            ].map((tech) => (
              <div key={tech} className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-all duration-300 text-center">
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("HomePage.cta.title")}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("HomePage.cta.titleHighlight")}
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t("HomePage.cta.description")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-base px-8 gap-2">
              <Link href="/contact">
                {t("HomePage.cta.primaryButton")}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
