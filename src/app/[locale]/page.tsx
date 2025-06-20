"use client";

import React, { FormEvent } from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Code, Palette, Zap, Users, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage');
  
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

  const sparkle = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const pulse3D = {
    animate: {
      scale: [1, 1.1, 1],
      rotateY: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('services.items.websites.title'),
      description: t('services.items.websites.description'),
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('services.items.mobileApps.title'),
      description: t('services.items.mobileApps.description'),
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('services.items.businessSystems.title'),
      description: t('services.items.businessSystems.description'),
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('services.items.uxDesign.title'),
      description: t('services.items.uxDesign.description'),
    },
  ];

  const features = [
    t('features.list.0'),
    t('features.list.1'),
    t('features.list.2'),
    t('features.list.3'),
    t('features.list.4'),
    t('features.list.5'),
    t('features.list.6'),
    t('features.list.7'),
  ];

  function handleSendEmail(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    toast.promise(
      fetch("/api", {
        method: "POST",
        body: formData,
      }),
      {
        loading: "Sending email...",
        success: () => "Email sent successfully!",
        error: (error) => `Error sending email: ${error.message}`,
      }
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-x-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-lg"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-md"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Header */}

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-8" style={{ perspective: "1000px" }}>
            <motion.div variants={fadeInUp} style={{ transformStyle: "preserve-3d" }}>
              <motion.div
                whileHover={{
                  rotateX: 10,
                  rotateY: 10,
                  scale: 1.05,
                }}
                style={{ transformStyle: "preserve-3d" }}>
                <Badge variant="secondary" className="mb-4 shadow-lg backdrop-blur-sm bg-background/50 border border-primary/20">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                    <Star className="h-4 w-4 mr-1" />
                  </motion.div>
                  {t('badge.welcome')}
                </Badge>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}>
              <motion.div
                whileHover={{
                  rotateX: 5,
                  scale: 1.02,
                }}
                style={{ transformStyle: "preserve-3d" }}>
                {t('hero.title')}
                <br />
                <motion.span
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}>
                  {t('hero.titleHighlight')}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </motion.div>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              whileHover={{
                rotateX: 2,
                scale: 1.01,
              }}>
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ transformStyle: "preserve-3d" }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}>
                <Link
                  href="#contact"
                  className={buttonVariants({
                    size: "lg",
                    className: "text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group",
                  })}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    {t('hero.cta')}
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full"
          variants={float}
          animate="animate"
          style={{
            filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))",
            transformStyle: "preserve-3d",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-6 h-6 bg-accent rounded-full"
          variants={float}
          animate="animate"
          transition={{ delay: 1 }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))",
            transformStyle: "preserve-3d",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full"
          variants={float}
          animate="animate"
          transition={{ delay: 2 }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
            transformStyle: "preserve-3d",
          }}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-muted/30 relative overflow-hidden">
        {/* 3D Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: "perspective(500px) rotateX(60deg)",
              transformOrigin: "top center",
            }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
            style={{ perspective: "1000px" }}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                rotateX: 5,
                scale: 1.02,
              }}>
              {t('services.title')}{" "}
              <span className="text-primary relative">
                {t('services.titleHighlight')}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg rounded"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              style={{ textShadow: "0 5px 15px rgba(0,0,0,0.2)" }}>
              {t('services.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 grid-rows-1"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ perspective: "1000px" }}>
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} style={{ transformStyle: "preserve-3d" }}>
                <motion.div
                  whileHover={{
                    rotateY: 10,
                    rotateX: 10,
                    scale: 1.05,
                    z: 100,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.3 }}>
                  <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group backdrop-blur-sm bg-background/80 relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(236, 72, 153, 0.05))",
                          "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(236, 72, 153, 0.05))",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <CardContent className="p-8 text-center relative z-10">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-xl"
                        whileHover={{
                          rotateY: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                          transformStyle: "preserve-3d",
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                        }}>
                        <motion.div
                          animate={{ rotateZ: [0, 360] }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}>
                          {service.icon}
                        </motion.div>
                      </motion.div>

                      <motion.h3
                        className="text-xl font-semibold mb-4"
                        style={{ textShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                        whileHover={{ scale: 1.05 }}>
                        {service.title}
                      </motion.h3>

                      <motion.p className="text-muted-foreground leading-relaxed" whileHover={{ scale: 1.02 }}>
                        {service.description}
                      </motion.p>
                    </CardContent>

                    {/* Glowing Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(236, 72, 153, 0.1), transparent)",
                        backgroundSize: "400% 400%",
                        padding: "2px",
                        zIndex: -1,
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* 3D Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              transform: "perspective(500px) rotateX(20deg)",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}>
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  textShadow: "0 10px 20px rgba(0,0,0,0.3)",
                }}
                style={{ transformStyle: "preserve-3d" }}>
                {t('features.title')} <span className="text-primary">{t('features.titleHighlight')}</span>?
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, z: -50 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}>
                {t('features.subtitle')}
              </motion.p>

              <motion.div
                className="space-y-4"
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                style={{ perspective: "1000px" }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-background/50 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      rotateX: 5,
                      z: 20,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    style={{ transformStyle: "preserve-3d" }}>
                    <motion.div animate={sparkle} transition={{ delay: index * 0.2 }}>
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}>
              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                whileHover={{
                  rotateY: 10,
                  rotateX: -5,
                  scale: 1.05,
                  z: 50,
                }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}>
                <Card className="relative border-0 shadow-2xl overflow-hidden backdrop-blur-sm bg-background/90 hover:shadow-3xl transition-all duration-500">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                        "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                        "linear-gradient(315deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="space-y-6">
                      {[
                        { icon: Zap, label: "Performance", badge: "Optimized", color: "text-primary" },
                        { icon: Users, label: "User Experience", badge: "Premium", color: "text-accent" },
                        { icon: Code, label: "Code Quality", badge: "Excellent", color: "text-primary" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-background/50 transition-all duration-300"
                          initial={{ opacity: 0, x: 20, rotateY: -10 }}
                          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          }}
                          style={{ transformStyle: "preserve-3d" }}>
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className={`p-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10`}
                              whileHover={{
                                rotateY: 180,
                                scale: 1.2,
                              }}
                              transition={{ duration: 0.6 }}>
                              <item.icon className={`h-8 w-8 ${item.color}`} />
                            </motion.div>
                            <span className="text-xl font-semibold">{item.label}</span>
                          </div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge variant={index === 1 ? "secondary" : "default"}>{item.badge}</Badge>
                          </motion.div>
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

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-muted/30 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating 3D Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 border-2 border-primary/40 rounded-full"
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
            style={{ perspective: "1000px" }}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                textShadow: "0 15px 30px rgba(0,0,0,0.3)",
              }}
              style={{ transformStyle: "preserve-3d" }}>
              {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}>
              {t('about.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}>
              <div className="space-y-6">
                {[
                  {
                    title: t('about.mission.title'),
                    content: t('about.mission.content'),
                  },
                  {
                    title: t('about.vision.title'),
                    content: t('about.vision.content'),
                  },
                  {
                    title: t('about.values.title'),
                    content: null,
                    values: [
                      t('about.values.list.0'),
                      t('about.values.list.1'),
                      t('about.values.list.2'),
                      t('about.values.list.3'),
                    ],
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="p-6 rounded-lg bg-background/50 backdrop-blur-sm"
                    style={{ transformStyle: "preserve-3d" }}>
                    <motion.h3 className="text-2xl font-semibold mb-4" whileHover={{ scale: 1.05 }}>
                      {section.title}
                    </motion.h3>
                    {section.content && (
                      <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}>
                        {section.content}
                      </motion.p>
                    )}
                    {section.values && (
                      <div className="space-y-3">
                        {section.values.map((value, valueIndex) => (
                          <motion.div
                            key={valueIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: valueIndex * 0.1, duration: 0.5 }}
                            whileHover={{
                              x: 10,
                              scale: 1.05,
                            }}
                            className="flex items-center space-x-3 p-2 rounded hover:bg-background/70 transition-all duration-300">
                            <motion.div className="w-3 h-3 bg-primary rounded-full" animate={pulse3D} />
                            <span className="text-muted-foreground">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}>
              <motion.div className="grid grid-cols-2 gap-6 grid-rows-2" style={{ perspective: "1000px" }}>
                {[
                  {
                    icon: Code,
                    title: t('about.cards.expert.title'),
                    desc: t('about.cards.expert.description'),
                    color: "from-primary to-accent",
                  },
                  {
                    icon: Zap,
                    title: t('about.cards.delivery.title'),
                    desc: t('about.cards.delivery.description'),
                    color: "from-accent to-primary",
                  },
                  {
                    icon: Users,
                    title: t('about.cards.collaborative.title'),
                    desc: t('about.cards.collaborative.description'),
                    color: "from-primary to-accent",
                  },
                  { 
                    icon: CheckCircle, 
                    title: t('about.cards.reliable.title'), 
                    desc: t('about.cards.reliable.description'), 
                    color: "from-accent to-primary" 
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: 5,
                      z: 30,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group">
                    <Card className="p-6 size-full text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-background/90 relative overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          background: [
                            `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))`,
                            `linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))`,
                            `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))`,
                          ],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}
                        whileHover={{
                          rotateY: 180,
                          scale: 1.3,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{ transformStyle: "preserve-3d" }}>
                        <motion.div
                          animate={{ rotateZ: [0, 360] }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}>
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </motion.div>
                      </motion.div>

                      <motion.h4 className="font-semibold mb-2 relative z-10" whileHover={{ scale: 1.1 }}>
                        {item.title}
                      </motion.h4>
                      <motion.p
                        className="text-sm text-muted-foreground relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        {item.desc}
                      </motion.p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 relative overflow-hidden">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              transform: "perspective(800px) rotateX(30deg) translateZ(-100px)",
            }}
            animate={{
              backgroundPosition: ["0 0", "40px 40px", "0 0"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating Contact Icons */}
        <motion.div className="absolute top-20 right-20 text-primary/20" animate={float} style={{ transformStyle: "preserve-3d" }}>
          <Globe className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-16 text-accent/20"
          animate={{
            ...float.animate,
            transition: { ...float.animate.transition, delay: 1 },
          }}
          style={{ transformStyle: "preserve-3d" }}>
          <Smartphone className="h-12 w-12" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
            style={{ perspective: "1000px" }}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                textShadow: "0 15px 30px rgba(0,0,0,0.3)",
              }}
              style={{ transformStyle: "preserve-3d" }}>
              Get In <span className="text-primary">{t('contact.titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}>
              Ready to start your project? We'd love to hear from you and discuss how we can bring your vision to life
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}>
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -2,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}>
                <Card className="p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm bg-background/90 relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                        "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.h3 className="text-2xl font-semibold mb-6 relative z-10" whileHover={{ scale: 1.05 }}>
                    {t('contact.form.title')}
                  </motion.h3>

                  <form onSubmit={handleSendEmail} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t('contact.form.fields.name')}
                        </label>
                        <motion.input
                          id="name"
                          name="name"
                          type="text"
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder={t('contact.form.fields.namePlaceholder')}
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                          }}
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t('contact.form.fields.email')}
                        </label>
                        <motion.input
                          id="email"
                          type="email"
                          name="email"
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder={t('contact.form.fields.emailPlaceholder')}
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                      <label htmlFor="project-type" className="block text-sm font-medium mb-2">
                        {t('contact.form.fields.projectType')}
                      </label>
                      <motion.select
                        name="projectType"
                        id="project-type"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                        }}>
                        <option>{t('contact.form.projectTypes.select')}</option>
                        <option>{t('contact.form.projectTypes.webDevelopment')}</option>
                        <option>{t('contact.form.projectTypes.mobileApp')}</option>
                        <option>{t('contact.form.projectTypes.customSoftware')}</option>
                        <option>{t('contact.form.projectTypes.other')}</option>
                      </motion.select>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.form.fields.message')}
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder={t('contact.form.fields.messagePlaceholder')}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      style={{ transformStyle: "preserve-3d" }}>
                      <Button
                        type="submit"
                        className="w-full py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          {t('contact.form.submit')}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
              style={{ transformStyle: "preserve-3d" }}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <motion.h3 className="text-2xl font-semibold mb-6" whileHover={{ scale: 1.05 }}>
                  {t('contact.info.title')}
                </motion.h3>
                <motion.p
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}>
                  {t('contact.info.subtitle')}
                </motion.p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: Globe, title: t('contact.info.email'), content: t('contact.info.emailValue'), color: "from-primary to-accent" },
                  // { icon: Smartphone, title: "Phone", content: "+1 (555) 123-4567", color: "from-accent to-primary" },
                  { icon: Users, title: t('contact.info.social'), content: t('contact.info.socialValue'), color: "from-primary to-accent" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg backdrop-blur-sm hover:bg-muted/70 transition-all duration-300"
                    initial={{ opacity: 0, x: 20, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    style={{ transformStyle: "preserve-3d" }}>
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center`}
                      whileHover={{
                        rotateY: 180,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.8 }}
                      style={{ transformStyle: "preserve-3d" }}>
                      <contact.icon className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <motion.h4 className="font-semibold" whileHover={{ scale: 1.05 }}>
                        {contact.title}
                      </motion.h4>
                      <motion.p className="text-muted-foreground" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }}>
                        {contact.content}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 backdrop-blur-sm relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}>
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                  }}
                  animate={{
                    background: [
                      "linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                      "linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), transparent)",
                      "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                      "linear-gradient(270deg, transparent, rgba(236, 72, 153, 0.3), transparent)",
                      "linear-gradient(360deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.h4 className="font-semibold mb-3" whileHover={{ scale: 1.05 }}>
                    {t('contact.info.guarantee.title')}
                  </motion.h4>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}>
                    {t('contact.info.guarantee.description')}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Code Icons */}
        <motion.div className="absolute top-20 left-20 text-white/20" animate={float} style={{ transformStyle: "preserve-3d" }}>
          <Code className="h-12 w-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-32 text-white/15"
          animate={{
            ...rotate3D.animate,
            transition: { ...rotate3D.animate.transition, delay: 2 },
          }}
          style={{ transformStyle: "preserve-3d" }}>
          <Palette className="h-16 w-16" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
            style={{ perspective: "1000px" }}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                textShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
              style={{ transformStyle: "preserve-3d" }}>
              {t('cta.title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl opacity-90"
              initial={{ opacity: 0, z: -30 }}
              whileInView={{ opacity: 0.9, z: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              {t('cta.subtitle')}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center" style={{ perspective: "1000px" }}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateY: 5,
                  rotateX: -5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}>
                <Link
                  href="#contact"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className: "text-lg px-8 py-6 text-primary shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden",
                  })}>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    {t('contact.info.title')}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
