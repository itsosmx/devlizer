import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, ExternalLink, Gamepad2, Monitor } from "lucide-react";
import TrackedLink from "@/components/blocks/tracked-link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/blocks/animated-section";
import { generatePageMetadata } from "@/lib/metadata";
import { hayloop } from "@/lib/games";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StudioPage" });

  return generatePageMetadata({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: ["devlizer studio", "hayloop", "farming sim", "ranching game", "indie game", "steam game"],
    image: hayloop.headerImage,
    url: "/studio",
    locale,
  });
}

export default async function StudioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StudioPage" });
  const game = hayloop;

  const steamCta = (location: string) => ({
    cta_name: "wishlist_steam",
    cta_location: location,
    destination: game.steamUrl,
  });

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90svh] flex items-end px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={game.backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-6">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Gamepad2 className="size-3.5" />
                {t("badge")}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                {game.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-primary font-medium">{t("hero.tagline")}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <TrackedLink
                  href={game.steamUrl}
                  isExternal
                  eventName="cta_click"
                  eventParams={steamCta("studio_hero")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(217,255,3,0.4)] hover:scale-105 transition-all duration-300"
                >
                  {t("hero.ctaWishlist")}
                  <ExternalLink className="size-4" />
                </TrackedLink>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl border border-muted-foreground/30 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {t("hero.ctaExplore")}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">{t("details.status")}</dt>
                  <dd className="font-semibold">{t("details.statusValue")}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("details.genre")}</dt>
                  <dd className="font-semibold">{t("details.genreValue")}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("details.platform")}</dt>
                  <dd className="font-semibold inline-flex items-center gap-1.5">
                    <Monitor className="size-4" />
                    {game.platforms.join(", ")}
                  </dd>
                </div>
              </dl>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2} className="hidden lg:block">
            <div className="relative aspect-[460/215] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image src={game.headerImage} alt={game.name} fill sizes="(min-width: 1024px) 50vw, 0px" className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("features.title")} <span className="text-primary">{t("features.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">{t("features.description")}</p>
          </AnimatedSection>

          <div className="space-y-16 sm:space-y-24">
            {game.features.map(({ key, video }) => (
              <AnimatedSection key={key} className="space-y-6">
                <div className="max-w-3xl">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3">{t(`features.items.${key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`features.items.${key}.description`)}</p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <video
                    className="w-full h-auto block"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    width={video.width}
                    height={video.height}
                    aria-label={t(`features.items.${key}.title`)}
                  >
                    <source src={video.webm} type="video/webm" />
                    <source src={video.mp4} type="video/mp4" />
                  </video>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t("gallery.title")}</h2>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {game.screenshots.map((src, index) => (
              <StaggerItem key={src}>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-video rounded-xl overflow-hidden border border-border/50"
                >
                  <Image
                    src={src}
                    alt={t("gallery.alt", { name: game.name, index: index + 1 })}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full opacity-[0.07] blur-[150px] bg-primary" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t("cta.title")} <span className="text-primary">{t("cta.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <TrackedLink
              href={game.steamUrl}
              isExternal
              eventName="cta_click"
              eventParams={steamCta("studio_footer_cta")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(217,255,3,0.4)] hover:scale-105 transition-all duration-300"
            >
              {t("cta.wishlist")}
              <ExternalLink className="size-4" />
            </TrackedLink>
            <TrackedLink
              href="/contact"
              eventName="cta_click"
              eventParams={{ cta_name: "studio_contact", cta_location: "studio_footer_cta", destination: "/contact" }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-muted-foreground/30 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {t("cta.contact")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </TrackedLink>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
