"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Code, Zap, Star, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
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

  const rotate3D = {
    initial: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    animate: {
      rotateX: [0, 5, 0],
      rotateY: [0, 10, 0],
      rotateZ: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Widget Ease",
      subtitle: "Business Software",
      description:
        "Widget Ease is a business software solution designed to transform how businesses handle customer support. At its core, it's a smart, embeddable chat widget powered by AI, trained to provide human-like, context-aware responses 24/7.",
      longDescription:
        "The platform features a simple onboarding process for clients, allowing them to generate and install their widget in minutes. It also includes an intuitive admin dashboard where businesses can customize the assistant’s tone, upload documentation, monitor conversations, and analyze performance metrics.",
      image: "/api/placeholder/600/400",
      category: "business-software",
      technologies: ["Modern Web Technologies", "Database", "Payment Processing", "User Interface", "Performance Optimization"],
      features: [
        "AI-Powered Responses",
        "Customizable Chat Widget",
        "Real-Time Analytics",
        "Easy Onboarding",
        "Admin Dashboard",
        "Live Agent Handoff",
      ],
      links: {
        live: "https://widgetease.com/",
        github: null, // Private repository
      },
      status: "Live",
      year: "2025",
      featured: true,
    },
    // Placeholder for future projects
    {
      id: 2,
      title: "Coming Soon",
      subtitle: "Next Project",
      description:
        "Exciting new projects are in development. Stay tuned for innovative solutions that will showcase modern website and mobile app development.",
      longDescription:
        "More amazing projects are being crafted using the latest technologies. Each project demonstrates expertise in creating powerful business solutions.",
      image: "/api/placeholder/600/400",
      category: "upcoming",
      technologies: ["Next.js", "..."],
      features: ["Modern Architecture", "Scalable Solutions", "Best Practices", "Performance Optimized"],
      links: {
        live: null,
        github: null,
      },
      status: "In Development",
      year: "2025",
      featured: false,
    },
  ];
  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "business-software", label: "Business Software", count: projects.filter((p) => p.category === "business-software").length },
    { id: "web", label: "Professional Websites", count: projects.filter((p) => p.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: projects.filter((p) => p.category === "mobile").length },
    { id: "upcoming", label: "Upcoming", count: projects.filter((p) => p.category === "upcoming").length },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);
  const stats = [
    { number: "Modern", label: "Solutions", icon: <Code className="h-5 w-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="h-5 w-5" /> },
    { number: "Fast", label: "Delivery", icon: <Zap className="h-5 w-5" /> },
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
              ...float.animate,
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
                My Portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Crafting Digital
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Experiences</span>
              </h1>
            </motion.div>{" "}
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Showcasing innovative business solutions that help companies grow. Each project represents a commitment to excellence, modern design,
              and results that matter.
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
                            </div>
                            {/* Technologies */}
                            <div className="space-y-3">
                              <h4 className="font-semibold">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline" className="bg-muted/50">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {/* Features */}
                            <div className="space-y-3">
                              <h4 className="font-semibold">Key Features</h4>
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
                                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                                      Visit Live Site
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
                          <div className="text-center space-y-2">
                            <Code className="h-12 w-12 text-muted-foreground mx-auto" />
                            <p className="text-sm text-muted-foreground">Coming Soon</p>
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
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Next Project?</span>
            </h2>{" "}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with modern technology and expert craftsmanship.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ transformStyle: "preserve-3d" }}>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <Link href="/contact">
                  <span className="flex items-center">
                    Get Started Today
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
