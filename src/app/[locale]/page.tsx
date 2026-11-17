import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import TrackedLink from "@/components/blocks/tracked-link";
import {
  Globe,
  Wrench,
  Smartphone,
  Cloud,
  Workflow,
  Bot,
  Zap,
  Shield,
  Layers,
  Target,
  ArrowRight,
  Quote,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Code2,
  Cpu,
  Network,
} from "lucide-react";
import { getProjects } from "@/services/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/blocks/animated-section";

/* ------------------------------------------------------------------ */
/*  Hero Background (rendered server-side)                              */
/* ------------------------------------------------------------------ */

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glowing lime radial blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      {/* Secondary glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                           */
/* ------------------------------------------------------------------ */

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const projects = await getProjects();

  const services = [
    { key: "website", icon: Globe },
    { key: "custom", icon: Wrench },
    { key: "mobile", icon: Smartphone },
    { key: "saas", icon: Cloud },
    { key: "automation", icon: Workflow },
    { key: "ai", icon: Bot },
  ];

  const valueProps = [
    { key: "speed", icon: Zap },
    { key: "quality", icon: Shield },
    { key: "ownership", icon: Layers },
    { key: "focus", icon: Target },
  ];

  const processSteps = ["0", "1", "2", "3"];

  const testimonialKeys = ["0", "1", "2"];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ============================================================= */}
      {/* 1. HERO                                                        */}
      {/* ============================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <HeroBackground />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {t("hero.title")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventParams={{ cta_name: "start_your_project", cta_location: "home_hero", destination: "/contact" }}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(217,255,3,0.4)] hover:scale-105 transition-all duration-300"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="size-4" />
              </TrackedLink>
              <TrackedLink
                href="/portfolio"
                eventName="cta_click"
                eventParams={{ cta_name: "view_our_work", cta_location: "home_hero", destination: "/portfolio" }}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-muted-foreground/30 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {t("hero.ctaSecondary")}
              </TrackedLink>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{t("hero.statProducts")}</span>
                <span>{t("hero.statProductsLabel")}</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-muted-foreground/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{t("hero.statSatisfaction")}</span>
                <span>{t("hero.statSatisfactionLabel")}</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-muted-foreground/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{t("hero.statResponse")}</span>
                <span>{t("hero.statResponseLabel")}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="size-6 text-muted-foreground/40" />
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================= */}
      {/* 2. SERVICES                                                    */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("services.title")}{" "}
              <span className="text-primary">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ key, icon: Icon }) => (
              <StaggerItem key={key}>
                <div className="group h-full p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:glow-xs">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="size-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`services.items.${key}.description`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. WHY DEVLIZER                                                */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t("whyUs.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("whyUs.title")}{" "}
              <span className="text-primary">{t("whyUs.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map(({ key, icon: Icon }) => (
              <StaggerItem key={key}>
                <div className="group text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500">
                  <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {t(`whyUs.items.${key}.stat`)}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {t(`whyUs.items.${key}.label`)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`whyUs.items.${key}.description`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. PROCESS                                                     */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t("process.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("process.title")}{" "}
              <span className="text-primary">{t("process.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("process.description")}
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-[35px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((stepKey) => (
                <StaggerItem key={stepKey}>
                  <div className="relative text-center lg:text-left">
                    <div className="size-16 rounded-full bg-card border border-primary/30 flex items-center justify-center mx-auto lg:mx-0 mb-5 relative z-10">
                      <span className="text-lg font-bold text-primary">
                        {`0${Number(stepKey) + 1}`}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(`process.steps.${stepKey}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`process.steps.${stepKey}.description`)}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. FEATURED WORK                                               */}
      {/* ============================================================= */}
      {projects && projects.length > 0 && (
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center space-y-4 mb-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {t("projects.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t("projects.title")}{" "}
                <span className="text-primary">{t("projects.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("projects.description")}
              </p>
            </AnimatedSection>

            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project: any) => (
                <StaggerItem key={project.slug}>
                  <TrackedLink
                    href={project.demoUrl || `#`}
                    isExternal={!!project.demoUrl}
                    target={project.demoUrl ? "_blank" : undefined}
                    rel={project.demoUrl ? "noopener noreferrer" : undefined}
                    eventName="project_view"
                    eventParams={{ project_name: project.name, project_url: project.demoUrl || "" }}
                    className="group block rounded-2xl bg-card border border-border/50 hover:border-primary/20 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:glow-xs"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {project.thumbnail?.url ? (
                        <Image
                          src={project.thumbnail.url}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted">
                          <Code2 className="size-8 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          SaaS
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          Web App
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.excerpt || "A production-grade digital product built with modern technology."}
                      </p>
                      {project.demoUrl && (
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                          Visit Live Site
                          <ExternalLink className="size-3.5" />
                        </div>
                      )}
                    </div>
                  </TrackedLink>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* 6. AI INTEGRATION HIGHLIGHT                                    */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-primary" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t("aiHighlight.badge")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  {t("aiHighlight.title")}{" "}
                  <span className="text-primary">{t("aiHighlight.titleHighlight")}</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("aiHighlight.description")}
                </p>
                <ul className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Sparkles className="size-4 text-primary mt-0.5 shrink-0" />
                      {t(`aiHighlight.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventName="cta_click"
                  eventParams={{ cta_name: "get_ai_solutions", cta_location: "home_ai_highlight", destination: "/contact" }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(217,255,3,0.4)] hover:scale-105 transition-all duration-300"
                >
                  {t("aiHighlight.cta")}
                  <ArrowRight className="size-4" />
                </TrackedLink>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Abstract AI visual */}
                <div className="aspect-square max-w-md mx-auto rounded-3xl bg-card border border-border/50 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6">
                    <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Cpu className="size-10 text-primary" />
                    </div>
                    <div className="space-y-3 w-full max-w-[200px]">
                      <div className="h-2 rounded-full bg-primary/20 w-full" />
                      <div className="h-2 rounded-full bg-primary/15 w-3/4 mx-auto" />
                      <div className="h-2 rounded-full bg-primary/10 w-1/2 mx-auto" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Network className="size-5 text-primary/60" />
                      <div className="h-px w-12 bg-gradient-to-r from-primary/40 to-transparent" />
                      <Bot className="size-5 text-primary" />
                      <div className="h-px w-12 bg-gradient-to-l from-primary/40 to-transparent" />
                      <Sparkles className="size-5 text-primary/60" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 7. TESTIMONIALS                                                */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("testimonials.title")}{" "}
              <span className="text-primary">{t("testimonials.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("testimonials.description")}
            </p>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/15 transition-all duration-500">
                  <Quote className="size-8 text-primary/40 mb-4" />
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    &ldquo;{t(`testimonials.items.${key}.quote`)}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {t(`testimonials.items.${key}.author`).charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {t(`testimonials.items.${key}.author`)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t(`testimonials.items.${key}.role`)}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 8. FINAL CTA                                                   */}
      {/* ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[150px] bg-primary" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("finalCta.title")}{" "}
              <span className="text-primary">{t("finalCta.titleHighlight")}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              {t("finalCta.description")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventParams={{ cta_name: "lets_build", cta_location: "home_final_cta", destination: "/contact" }}
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(217,255,3,0.5)] hover:scale-105 transition-all duration-300"
              >
                {t("finalCta.button")}
                <ArrowRight className="size-5" />
              </TrackedLink>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-sm text-muted-foreground/60">
              {t("finalCta.emailText")}{" "}
              <TrackedLink
                href={`mailto:${t("finalCta.email")}`}
                isExternal
                eventName="email_click"
                eventParams={{ email_address: t("finalCta.email") }}
                className="text-primary hover:underline"
              >
                {t("finalCta.email")}
              </TrackedLink>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
