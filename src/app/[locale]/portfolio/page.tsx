"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Code, Zap, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const float = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: t("projects.widgetEase.title"),
      subtitle: t("projects.widgetEase.subtitle"),
      description: t("projects.widgetEase.description"),
      longDescription: t("projects.widgetEase.longDescription"),
      image: "/api/placeholder/600/400",
      category: "business-software",
      technologies: [
        t("projects.widgetEase.technologies.0"),
        t("projects.widgetEase.technologies.1"),
        t("projects.widgetEase.technologies.2"),
        t("projects.widgetEase.technologies.3"),
        t("projects.widgetEase.technologies.4"),
      ],
      features: [
        t("projects.widgetEase.features.0"),
        t("projects.widgetEase.features.1"),
        t("projects.widgetEase.features.2"),
        t("projects.widgetEase.features.3"),
        t("projects.widgetEase.features.4"),
        t("projects.widgetEase.features.5"),
      ],
      links: {
        live: "https://widgetease.com/",
        github: null, // Private repository
      },
      status: t("projects.widgetEase.status"),
      year: t("projects.widgetEase.year"),
      featured: true,
    },
    {
      id: 2,
      title: t("projects.joblizer.title"),
      subtitle: t("projects.joblizer.subtitle"),
      description: t("projects.joblizer.description"),
      longDescription: t("projects.joblizer.longDescription"),
      image: "/api/placeholder/600/400",
      category: "business-software",
      technologies: [
        t("projects.joblizer.technologies.0"),
        t("projects.joblizer.technologies.1"),
        t("projects.joblizer.technologies.2"),
        t("projects.joblizer.technologies.3"),
        t("projects.joblizer.technologies.4"),
      ],
      features: [
        t("projects.joblizer.features.0"),
        t("projects.joblizer.features.1"),
        t("projects.joblizer.features.2"),
        t("projects.joblizer.features.3"),
        t("projects.joblizer.features.4"),
        t("projects.joblizer.features.5"),
      ],
      links: {
        live: "https://joblizer.com/",
        github: null,
      },
      status: t("projects.joblizer.status"),
      year: t("projects.joblizer.year"),
      featured: true,
    },
    {
      id: 3,
      title: t("projects.menulizer.title"),
      subtitle: t("projects.menulizer.subtitle"),
      description: t("projects.menulizer.description"),
      longDescription: t("projects.menulizer.longDescription"),
      image: "/api/placeholder/600/400",
      category: "business-software",
      technologies: [
        t("projects.menulizer.technologies.0"),
        t("projects.menulizer.technologies.1"),
        t("projects.menulizer.technologies.2"),
        t("projects.menulizer.technologies.3"),
        t("projects.menulizer.technologies.4"),
      ],
      features: [
        t("projects.menulizer.features.0"),
        t("projects.menulizer.features.1"),
        t("projects.menulizer.features.2"),
        t("projects.menulizer.features.3"),
        t("projects.menulizer.features.4"),
        t("projects.menulizer.features.5"),
      ],
      links: {
        live: "https://www.menulizer.com/",
        github: null,
      },
      status: t("projects.menulizer.status"),
      year: t("projects.menulizer.year"),
      featured: true,
    },
    // Placeholder for future projects
    {
      id: 5,
      title: t("projects.comingSoon.title"),
      subtitle: t("projects.comingSoon.subtitle"),
      description: t("projects.comingSoon.description"),
      longDescription: t("projects.comingSoon.longDescription"),
      image: "/api/placeholder/600/400",
      category: "upcoming",
      technologies: [
        t("projects.comingSoon.technologies.0"),
        t("projects.comingSoon.technologies.1"),
      ],
      features: [
        t("projects.comingSoon.features.0"),
        t("projects.comingSoon.features.1"),
        t("projects.comingSoon.features.2"),
        t("projects.comingSoon.features.3"),
      ],
      links: {
        live: null,
        github: null,
      },
      status: t("projects.comingSoon.status"),
      year: t("projects.comingSoon.year"),
      featured: false,
    },
  ];
  const categories = [
    { id: "all", label: t("categories.all"), count: projects.length },
    { id: "business-software", label: t("categories.businessSoftware"), count: projects.filter((p) => p.category === "business-software").length },
    { id: "web", label: t("categories.web"), count: projects.filter((p) => p.category === "web").length },
    { id: "mobile", label: t("categories.mobile"), count: projects.filter((p) => p.category === "mobile").length },
    { id: "upcoming", label: t("categories.upcoming"), count: projects.filter((p) => p.category === "upcoming").length },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);
  const stats = [
    { number: t("stats.solutions"), label: t("stats.solutionsLabel"), icon: <Code className="h-5 w-5" /> },
    { number: t("stats.satisfaction"), label: t("stats.satisfactionLabel"), icon: <Star className="h-5 w-5" /> },
    { number: t("stats.delivery"), label: t("stats.deliveryLabel"), icon: <Zap className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div className="absolute top-10 right-10 text-primary/30" animate={float} style={{ transformStyle: "preserve-3d" }}>
            <Globe className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-10 text-accent/30"
            animate={{
              ...(float.animate as any),
              transition: { ...float.animate.transition, delay: 1 },
            }}
            style={{ transformStyle: "preserve-3d" }}>
            <Code className="h-12 w-12" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("hero.title")}
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">{t("hero.titleHighlight")}</span>
              </h1>
            </motion.div>{" "}
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t("hero.description")}
            </motion.p>
            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}>
                  <div className="flex justify-center text-primary">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background hover:bg-muted border border-border"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {category.label} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp} className={`${project.featured ? "mb-20" : ""}`}>
                {project.featured ? (
                  // Featured Project Layout (Widget Ease)
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                          "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <Card className="relative overflow-hidden shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          {/* Project Image */}
                          <div className="relative overflow-hidden">
                            <motion.div
                              className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg m-6 flex items-center justify-center"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}>
                              <div className="text-center space-y-4">
                                <Globe className="h-16 w-16 text-primary mx-auto" />
                                <div className="space-y-2">
                                  <h3 className="text-2xl font-bold">Widget Ease</h3>
                                  <p className="text-muted-foreground">Live SaaS Platform</p>
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Project Details */}
                          <div className="p-6 space-y-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="bg-primary/20 text-primary">
                                  {project.status}
                                </Badge>
                                <Badge variant="outline">{project.year}</Badge>
                                <Badge variant="outline">{project.subtitle}</Badge>
                              </div>

                              <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                              <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>
                            </div>{" "}
                            {/* Technologies */}
                            <div className="space-y-3">
                              <h4 className="font-semibold">{t("projects.widgetEase.technologiesTitle")}</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline" className="bg-muted/50">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>{" "}
                            {/* Features */}
                            <div className="space-y-3">
                              <h4 className="font-semibold">{t("projects.widgetEase.keyFeaturesTitle")}</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                                ))}{" "}
                              </div>
                            </div>
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                              {project.links.live && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button asChild size="lg" className="group">
                                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                      <span className="flex items-center">
                                        <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                                        {t("projects.widgetEase.visitLiveButton")}
                                      </span>
                                    </Link>
                                  </Button>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  // Regular Project Layout
                  <Card className="overflow-hidden shadow-lg border-0 bg-background/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline">{project.status}</Badge>
                            <Badge variant="outline">{project.year}</Badge>
                          </div>

                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="text-muted-foreground">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                          {" "}
                          <div className="text-center space-y-2">
                            <Code className="h-12 w-12 text-muted-foreground mx-auto" />
                            <p className="text-sm text-muted-foreground">{t("projects.comingSoon.comingSoonLabel")}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            {" "}
            <h2 className="text-3xl md:text-5xl font-bold">
              {t("cta.title")}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("cta.titleHighlight")}</span>
            </h2>{" "}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("cta.description")}</p>{" "}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ transformStyle: "preserve-3d" }}>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <Link href="/contact">
                  <span className="flex items-center">
                    {t("cta.button")}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
