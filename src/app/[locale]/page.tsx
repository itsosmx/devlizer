import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Globe,
  PhoneIcon,
  Smartphone,
  Users,
  Workflow,
  Zap,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { WarpBackground } from "@/components/ui/warp";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/blocks/animated-section";
import { ProjectsShowcase } from "@/components/blocks/projects-showcase";
import { TechMarquee } from "@/components/blocks/tech-marquee";
import { getProjects } from "@/services/data";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const projects = await getProjects();

  const services = [
    { key: "fullStack", icon: Code2 },
    { key: "aiSolutions", icon: Bot },
    { key: "automation", icon: Workflow },
    { key: "mobileApp", icon: Smartphone },
    { key: "professionalWebsite", icon: Globe },
  ];

  const whyUsItems = [
    { key: "fastDelivery", icon: Zap },
    { key: "cleanCode", icon: Code2 },
    { key: "clientFocused", icon: Users },
    { key: "provenResults", icon: CheckCircle2 },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
        <WarpBackground
          className="absolute inset-0 bg-transparent"
          gridColor="rgba(255, 129, 99, 0.03)"
          beamsPerSide={4}
          beamDuration={4}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight rtl:leading-tight">
            {t("hero.title")}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="px-12 py-6 text-xl gap-2 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              <Link href="/contact">
                <PhoneIcon className="size-5" />
                {t("hero.cta")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="size-8 text-muted-foreground/60" />
        </div>
      </section>

      {/* Services Section — Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm">
              {t("services.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t("services.title")}{" "}
              <span className="text-primary">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </AnimatedSection>

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr"
          >
            {services.map(({ key, icon: Icon }, index) => (
              <StaggerItem
                key={key}
                className={cn(
                  index === 0 && "md:col-span-2 lg:col-span-2",
                  index === 3 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <Card className="group h-full hover:border-primary/30 transition-all duration-500 hover:shadow-lg bg-muted/30 border-border/40">
                  <CardHeader>
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t(`services.items.${key}.title`)}</CardTitle>
                    <CardDescription>{t(`services.items.${key}.description`)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {[0, 1, 2].map((featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                          <span>{t(`services.items.${key}.features.${featureIndex}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-sm">
                {t("projects.badge")}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {t("projects.title")}{" "}
                <span className="text-primary">{t("projects.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("projects.description")}
              </p>
            </AnimatedSection>

            <ProjectsShowcase projects={projects} locale={locale} />
          </div>
        </section>
      )}

      {/* Why Choose Us Section — Split Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — sticky heading */}
            <AnimatedSection className="lg:sticky lg:top-32 space-y-4">
              <Badge variant="outline" className="text-sm">
                {t("whyUs.badge")}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {t("whyUs.title")}{" "}
                <span className="text-primary">{t("whyUs.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                {t("whyUs.subtitle")}
              </p>
            </AnimatedSection>

            {/* Right — 2×2 feature grid */}
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsItems.map(({ key, icon: Icon }) => (
                <StaggerItem key={key}>
                  <div className="group p-6 rounded-2xl border border-border/40 bg-muted/30 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                      <Icon className="size-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1.5">{t(`whyUs.items.${key}.title`)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`whyUs.items.${key}.description`)}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Technologies Section — Marquee */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-sm">
              {t("technologies.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {t("technologies.title")}{" "}
              <span className="text-primary">{t("technologies.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("technologies.description")}
            </p>
          </AnimatedSection>

          <TechMarquee />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 p-10 sm:p-16 text-center space-y-8">
              {/* Decorative blurred blobs */}
              <div className="absolute -top-24 -left-24 size-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 size-64 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {t("cta.title")}{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    {t("cta.titleHighlight")}
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-8 gap-2 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                  >
                    <Link href="/contact">
                      {t("cta.primaryButton")}
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 rounded-xl">
                    <Link href="/portfolio">{t("cta.secondaryButton")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
