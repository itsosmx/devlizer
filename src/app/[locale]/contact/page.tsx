"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Globe, Calendar, Zap, Heart, Star, icons } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    toast.promise(
      fetch("/api", {
        method: "POST",
        body: formData,
      }),
      {
        loading: "Sending email...",
        success: () => {
          setIsSubmitted(true);
          return "Email sent successfully!";
        },
        error: (error) => {
          return `Error sending email: ${error.message}`;
        },
      }
    );

    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setIsSubmitting(false);
    });
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hi@devlizer.com",
      description: "Send us an email anytime",
      link: "mailto:hello@devlizer.com",
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   icon: <Phone className="h-6 w-6" />,
    //   title: "Phone",
    //   value: "+1 (555) 123-4567",
    //   description: "Mon-Fri from 8am to 6pm",
    //   link: "tel:+15551234567",
    //   color: "from-green-500 to-emerald-500",
    // },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Remote Worldwide",
      description: "Available for global projects",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Quick response guaranteed",
      link: "#",
      color: "from-orange-500 to-red-500",
    },
  ];
  const socialLinks = [
    {
      icon: <Globe className="h-5 w-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/company/devlizer",
      color: "hover:text-blue-600",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: "Facebook",
      href: "https://facebook.com/devlizer",
      color: "hover:text-blue-600",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: "Twitter",
      href: "https://twitter.com/devlizer",
      color: "hover:text-blue-400",
    },
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Backend Development",
    "Frontend Development",
    "Full-Stack Project",
    "SaaS Development",
    "Consultation",
    "Other",
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I'll provide a detailed timeline after discussing your requirements.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! I work with clients worldwide and am experienced in remote collaboration. I'm flexible with time zones and communication preferences.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Node.js, and React Native for full-stack development. I also work with MongoDB, PostgreSQL, AWS, and modern development tools.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer maintenance and support packages to keep your application running smoothly. This includes updates, bug fixes, and feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div className="absolute top-10 right-10 text-primary/30" animate={float} style={{ transformStyle: "preserve-3d" }}>
            <MessageCircle className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-10 text-accent/30"
            animate={{
              ...float.animate,
              transition: { ...float.animate.transition, delay: 1 },
            }}
            style={{ transformStyle: "preserve-3d" }}>
            <Mail className="h-12 w-12" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Let's Build Something
                <br />
                <span className="relative">
                  Amazing Together
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? I'm here to help you create exceptional digital experiences with modern technologies and
              expert craftsmanship.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Commitment Required</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={info.link} className="block group">
                  <Card className="h-full overflow-hidden shadow-lg border-0 bg-background/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-6 text-center space-y-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}>
                        {info.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="font-medium text-primary group-hover:text-accent transition-colors">{info.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-bold">Send a Message</h2>
                      <p className="text-muted-foreground">Tell me about your project and let's get started</p>
                    </div>

                    {isSubmitted ? (
                      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4 py-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-green-600">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your full name"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <select
                            id="projectType"
                            name="projectType"
                            className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Brief description of your project"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me more about your project, goals, timeline, and any specific requirements..."
                            rows={6}
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10 flex items-center justify-center">
                              {isSubmitting ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="mr-2">
                                  <Zap className="h-5 w-5" />
                                </motion.div>
                              ) : (
                                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              )}
                              {isSubmitting ? "Sending..." : "Send Message"}
                            </span>
                          </Button>
                        </motion.div>
                      </form>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              {/* Why Choose Section */}
              <Card className="shadow-lg border-0 bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Heart className="mr-2 h-6 w-6 text-red-500" />
                    Why Work With Me?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Expert in React, Node.js, and React Native",
                      "Fast delivery with quality code",
                      "Clear communication throughout the project",
                      "Ongoing support and maintenance",
                      "Competitive rates and flexible payment",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg border-0 bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-all duration-300 ${social.color}`}>
                          {social.icon}
                          <span className="text-sm font-medium">{social.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Get quick answers to common questions</p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="shadow-lg border-0 bg-background/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
