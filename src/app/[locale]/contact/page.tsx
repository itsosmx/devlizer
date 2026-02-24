"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, Globe, Zap, Heart } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper function to convert translation object to array
  const getTranslationArray = (key: string): string[] => {
    const obj = t.raw(key) as Record<string, string>;
    return Object.keys(obj)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((k) => obj[k]);
  };

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      toast.loading(t("form.sending"), { id: "contact-form" });
      setIsSubmitting(true);

      const job = await fetch("/api", {
        method: "POST",
        body: formData,
      });
      
      const response = await job.json();
      if (job.status !== 200) {
        throw new Error(response.message || "Failed to send message");
      }

      toast.success(response.message, { id: "contact-form" });
      setIsSubmitted(true);

      new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        setIsSubmitting(false);
      });
    } catch (error: any) {
      toast.error(error?.message, { id: "contact-form" });
      setIsSubmitting(false);
    }
  }
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: t("contactInfo.email.title"),
      value: t("contactInfo.email.value"),
      description: t("contactInfo.email.description"),
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
      title: t("contactInfo.location.title"),
      value: t("contactInfo.location.value"),
      description: t("contactInfo.location.description"),
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t("contactInfo.responseTime.title"),
      value: t("contactInfo.responseTime.value"),
      description: t("contactInfo.responseTime.description"),
      link: "#",
      color: "from-orange-500 to-red-500",
    },
  ];
  const socialLinks = [
    {
      icon: <Globe className="h-5 w-5" />,
      name: t("socialLinks.linkedin"),
      href: "https://linkedin.com/company/devlizer",
      color: "hover:text-blue-600",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: t("socialLinks.facebook"),
      href: "https://facebook.com/devlizer",
      color: "hover:text-blue-600",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: t("socialLinks.twitter"),
      href: "https://twitter.com/devlizer",
      color: "hover:text-blue-400",
    },
  ];
  const projectTypes = getTranslationArray("form.projectTypes.options");
  const budgetOptions = getTranslationArray("form.budget.options");
  const hearAboutOptions = getTranslationArray("form.hearAbout.options");
  const faqs = [
    {
      question: t("faq.questions.timeline.question"),
      answer: t("faq.questions.timeline.answer"),
    },
    {
      question: t("faq.questions.international.question"),
      answer: t("faq.questions.international.answer"),
    },
    {
      question: t("faq.questions.solutions.question"),
      answer: t("faq.questions.solutions.answer"),
    },
    {
      question: t("faq.questions.support.question"),
      answer: t("faq.questions.support.answer"),
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
              ...(float.animate as any),
              transition: { ...float.animate.transition, delay: 1 },
            }}
            style={{ transformStyle: "preserve-3d" }}>
            <Mail className="h-12 w-12" />
          </motion.div>
        </div>{" "}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                {t("badge")}
              </Badge>
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("hero.title")}
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">{t("hero.titleHighlight")}</span>
              </h1>
            </motion.div>{" "}
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t("hero.description")}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t("hero.benefits.freeConsultation")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t("hero.benefits.quickResponse")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t("hero.benefits.noCommitment")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
            {/* Left Column: Contact Info & Socials */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("contactInfo.title") || "Get in Touch"}</h2>
                <p className="text-muted-foreground text-lg">
                  {t("contactInfo.subtitle") || "We'd love to hear from you. Our friendly team is always here to chat."}
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      <p className="text-primary font-medium mt-1">
                        {info.link !== "#" ? (
                          <a href={info.link} className="hover:underline">
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">{t("socialLinks.title") || "Follow Us"}</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 ${social.color}`}>
                      {social.icon}
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3">
              <Card className="shadow-2xl border-border/50 bg-background/60 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold">{t("form.title")}</h2>
                    <p className="text-muted-foreground mt-2">{t("form.subtitle")}</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 py-12">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{t("form.success.title")}</h3>
                        <p className="text-muted-foreground text-lg">{t("form.success.description")}</p>
                      </div>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                        {t("form.sendAnother") || "Send another message"}
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <Label htmlFor="name" className="text-sm font-medium">
                            {t("form.fields.fullName")} <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder={t("form.fields.fullNamePlaceholder")}
                            required
                            className="bg-background/50 border-border/50 focus-visible:ring-primary/30 h-12"
                          />
                        </div>
                        <div className="space-y-2.5">
                          <Label htmlFor="email" className="text-sm font-medium">
                            {t("form.fields.emailAddress")} <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("form.fields.emailPlaceholder")}
                            required
                            className="bg-background/50 border-border/50 focus-visible:ring-primary/30 h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <Label htmlFor="projectType" className="text-sm font-medium">
                            {t("form.fields.projectType")}
                          </Label>
                          <Select name="projectType">
                            <SelectTrigger className="bg-background/50 border-border/50 focus:ring-primary/30 h-12 w-full">
                              <SelectValue placeholder={t("form.projectTypes.select")} />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2.5">
                          <Label htmlFor="hearAbout" className="text-sm font-medium">
                            {t("form.fields.hearAbout")}
                          </Label>
                          <Select name="hearAbout">
                            <SelectTrigger className="bg-background/50 border-border/50 focus:ring-primary/30 h-12 w-full">
                              <SelectValue placeholder={t("form.hearAbout.select")} />
                            </SelectTrigger>
                            <SelectContent>
                              {hearAboutOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="budget" className="text-sm font-medium">
                          {t("form.fields.budget")}
                        </Label>
                        <Input
                          id="budget"
                          name="budget"
                          type="number"
                          placeholder={t("form.fields.budget")}
                          className="bg-background/50 border-border/50 focus-visible:ring-primary/30 h-12"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="subject" className="text-sm font-medium">
                          {t("form.fields.subject")} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder={t("form.fields.subjectPlaceholder")}
                          required
                          className="bg-background/50 border-border/50 focus-visible:ring-primary/30 h-12"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="message" className="text-sm font-medium">
                          {t("form.fields.message")} <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={t("form.fields.messagePlaceholder")}
                          rows={5}
                          required
                          className="bg-background/50 border-border/50 focus-visible:ring-primary/30 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-base font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                <Zap className="h-5 w-5" />
                              </motion.div>
                              {t("form.sending")}
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              {t("form.submit")}
                            </>
                          )}
                        </span>
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("faq.title")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("faq.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{t("faq.subtitle")}</p>
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
