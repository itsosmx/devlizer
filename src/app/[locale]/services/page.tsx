import React from "react";
import { getTranslations } from "next-intl/server";
import TrackedLink from "@/components/blocks/tracked-link";
import {
  Globe,
  Wrench,
  Smartphone,
  Cloud,
  Workflow,
  Bot,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/blocks/animated-section";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });

  const services = [
    { key: "website", icon: Globe },
    { key: "custom", icon: Wrench },
    { key: "mobile", icon: Smartphone },
    { key: "saas", icon: Cloud },
    { key: "automation", icon: Workflow },
    { key: "ai", icon: Bot },
  ];

  const processSteps = ["0", "1", "2", "3", "4", "5"];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
            style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t("badge")}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {t("hero.title")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventParams={{ cta_name: "book_a_call", cta_location: "services_hero", destination: "/contact" }}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(217,255,3,0.4)] hover:scale-105 transition-all duration-300"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="size-4" />
              </TrackedLink>
              <TrackedLink
                href="/portfolio"
                eventName="cta_click"
                eventParams={{ cta_name: "see_our_work", cta_location: "services_hero", destination: "/portfolio" }}
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
      </section>

      {/* Services */}
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

      {/* Process */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
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

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
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
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[150px] bg-primary" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("cta.title")}{" "}
              <span className="text-primary">{t("cta.titleHighlight")}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventParams={{ cta_name: "book_a_call", cta_location: "services_cta", destination: "/contact" }}
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(217,255,3,0.5)] hover:scale-105 transition-all duration-300"
              >
                {t("cta.button")}
                <Rocket className="size-5" />
              </TrackedLink>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-sm text-muted-foreground/60">
              {t("cta.emailText")}{" "}
              <TrackedLink
                href={`mailto:${t("cta.email")}`}
                isExternal
                eventName="email_click"
                eventParams={{ email_address: t("cta.email") }}
                className="text-primary hover:underline"
              >
                {t("cta.email")}
              </TrackedLink>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
