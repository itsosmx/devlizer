"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Rocket,
  Users,
  Target,
  Lightbulb,
  Code,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace modern approaches and creative solutions to help your business stay competitive.",
      color: "text-yellow-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, not just service providers.",
      color: "text-blue-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose",
      description: "Everything we create serves a clear business objective and helps you reach your goals.",
      color: "text-green-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality",
      description: "We're passionate about delivering exceptional experiences that exceed expectations.",
      color: "text-red-500",
    },
  ];
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Professional Websites",
      description: "Complete business websites",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "iPhone & Android apps",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Business Solutions",
      description: "Custom software for your needs",
      color: "from-green-500 to-emerald-500",
    },
  ];  const stats = [
    { number: "New", label: "Fresh Perspective", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "100%", label: "Commitment", icon: <Star className="h-5 w-5" /> },
    { number: "Fast", label: "Response Time", icon: <Zap className="h-5 w-5" /> },
    { number: "Modern", label: "Solutions", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div className="absolute top-10 right-10 text-primary/30" animate={float} style={{ transformStyle: "preserve-3d" }}>
            <Rocket className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-10 text-accent/30"
            animate={{
              ...float.animate,
              transition: { ...float.animate.transition, delay: 1 },
            }}
            style={{ transformStyle: "preserve-3d" }}>
            <Lightbulb className="h-12 w-12" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                About Devlizer
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Building the Future of
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Digital Experiences</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Devlizer, we're not just building websites and mobile apps—we're building the future of digital experiences. Whether you're a startup
              with a bold idea or an established business aiming to level up, we help you bring your vision to life.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}>
              <Link
                href="#story"
                className={buttonVariants({
                  size: "lg",
                  className: "shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden",
                })}>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Our Story</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="px-6 py-20 bg-muted/30 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(236, 72, 153, 0.1) 75%)
              `,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
            }}
            animate={{
              backgroundPosition: [
                "0 0, 0 30px, 30px -30px, -30px 0px",
                "60px 60px, 60px 90px, 90px 30px, 30px 60px",
                "0 0, 0 30px, 30px -30px, -30px 0px",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold">Founded with Passion</h3>                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a passion for innovation and a deep understanding of business technology, Devlizer combines modern development 
                  approaches with a strong focus on usability, performance, and business impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in creating powerful websites and mobile apps, and we're also the home of a growing suite of helpful business 
                  software products designed to solve real-world problems.
                </p>
              </div>              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Smart, scalable business solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Beautifully designed experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Business-focused approach</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}>
              <motion.div animate={rotate3D} style={{ transformStyle: "preserve-3d" }}>
                <Card className="relative overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-background to-muted">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
                  <CardContent className="p-8 relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center space-y-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}>
                          <div className="flex justify-center text-primary">{stat.icon}</div>
                          <div className="text-2xl font-bold text-primary">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-muted/50">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <motion.p
                    className="text-xl md:text-2xl leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}>                    Our mission is simple:{" "}
                    <span className="text-primary font-semibold">empower businesses and entrepreneurs with technology that works</span>—cleanly, reliably,
                    and with purpose.
                  </motion.p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}>
                <Card className="h-full relative overflow-hidden shadow-lg border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      className={`inline-flex p-3 rounded-full bg-muted ${value.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}>
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Do</span>
            </h2>            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From business websites to mobile apps, we create digital solutions that drive results
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}>
                <Card className="relative overflow-hidden shadow-lg border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} text-white`}>{service.icon}</div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Extraordinary Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your vision into reality? Let's discuss how we can help you achieve your digital goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ transformStyle: "preserve-3d" }}>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden",
                })}>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Start Your Project
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
