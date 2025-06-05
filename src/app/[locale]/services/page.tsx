"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  Database,
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Settings,
  Users,
  Lightbulb,
  Target,
  Star,
  Timer,
  Cpu,
  Monitor,
  Layers,
  Rocket,
  Heart,
  MessageSquare,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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
  };  const mainServices = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Full-Stack Web Development",
      description: "Complete web applications with React frontend and Node.js backend, delivering scalable and performant solutions.",
      features: [
        "React.js & Next.js development",
        "Node.js & Express.js backend",
        "REST API development",
        "Database integration (MongoDB, PostgreSQL)",
        "Authentication & authorization",
        "Performance optimization",
      ],
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android platforms.",
      features: [
        "React Native development",
        "Cross-platform compatibility",
        "Native module integration",
        "Push notifications",
        "App Store deployment",
        "Performance optimization",
      ],
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Backend Development",
      description: "Robust backend systems with Node.js, handling data management, APIs, and server-side logic.",
      features: [
        "Node.js & Express.js servers",
        "RESTful API design",
        "Database design & optimization",
        "Authentication systems",
        "Third-party integrations",
        "DevOps & deployment",
      ],
      gradient: "from-green-500 via-green-600 to-emerald-500",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with React.js, focusing on user experience and performance.",
      features: [
        "React.js component development",
        "Responsive design implementation",
        "State management (Redux)",
        "Modern CSS frameworks",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      gradient: "from-orange-500 via-orange-600 to-red-500",
      technologies: ["React", "Redux", "CSS3", "Bootstrap", "Material-UI"],
    },
  ];  const additionalServices = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Design",
      description: "MongoDB and SQL database design with optimization and data modeling.",
      color: "text-blue-500",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Deployment",
      description: "AWS cloud deployment with scalable infrastructure and DevOps practices.",
      color: "text-green-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "API Integration",
      description: "Third-party API integrations and custom REST API development.",
      color: "text-purple-500",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Technical Consulting",
      description: "Architecture planning, code review, and technical problem solving.",
      color: "text-orange-500",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges through detailed consultation.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Planning",
      description: "Strategic planning and technical architecture design tailored to your requirements.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development process with regular updates and collaborative feedback loops.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Testing",
      description: "Comprehensive testing to ensure quality, performance, and security standards.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment and launch with ongoing monitoring and optimization.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      number: "06",
      title: "Support",
      description: "Continuous support, maintenance, and feature enhancements as needed.",
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic web application",
        "Responsive design",
        "SEO optimization",
        "3 months support",
        "Basic analytics",
      ],
      gradient: "from-gray-400 to-gray-600",
      popular: false,
    },
    {
      name: "Professional",
      price: "Custom",
      description: "Ideal for growing businesses",
      features: [
        "Advanced web/mobile app",
        "Custom integrations",
        "Advanced analytics",
        "6 months support",
        "Performance optimization",
        "Security implementation",
      ],
      gradient: "from-blue-500 to-purple-600",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete solutions for large organizations",
      features: [
        "Full-scale applications",
        "Custom architecture",
        "Enterprise integrations",
        "12 months support",
        "Dedicated team",
        "Priority support",
        "Advanced security",
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: false,
    },
  ];  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "React Native", icon: "📱" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "JavaScript", icon: "💛" },
    { name: "Redux", icon: "🔄" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "🔧" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Firebase", icon: "🔥" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div className="absolute top-10 right-10 text-primary/30" animate={float} style={{ transformStyle: "preserve-3d" }}>
            <Settings className="h-16 w-16" />
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
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Building Digital
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Full-stack development expertise with React, Node.js, and React Native. 
                Building scalable web and mobile applications with modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="#services" className={buttonVariants({ size: "lg" })}>
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Get Quote
                <MessageSquare className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-16">
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Core Services
              </h2>              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive full-stack development services using React, Node.js, and React Native technologies.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <CardHeader className="relative z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-6 py-20 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-12">            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Specialized Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional expertise in database design, cloud deployment, and technical architecture.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-8 group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-16">
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Development Process</h2>              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven development methodology that ensures high-quality web applications from planning to launch.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl font-bold text-primary/30">{step.number}</div>
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-16">
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Project Packages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible packages designed to meet different business needs and budgets. All pricing is customized based on your specific requirements.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm ${tier.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                    {tier.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent p-2 text-center">
                        <span className="text-white text-sm font-semibold">Most Popular</span>
                      </div>
                    )}
                    <CardHeader className={tier.popular ? 'pt-12' : ''}>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center text-white mb-4`}>
                        <Star className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold">{tier.price}</div>
                        <p className="text-muted-foreground text-sm">{tier.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <Button className="w-full mt-6" variant={tier.popular ? "default" : "outline"}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-12">
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage the latest and most reliable technologies to build scalable, maintainable solutions.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-sm font-medium">{tech.name}</h3>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your vision and create a custom solution that drives your business forward. 
                Get in touch for a free consultation.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Start Your Project
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}