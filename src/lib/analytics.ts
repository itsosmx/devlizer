// Safe GA4 event sender with SSR guard
export function sendGAEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      eventParams
    );
  }
}

export const analytics = {
  ctaClick: (name: string, location: string, destination?: string) =>
    sendGAEvent("cta_click", { cta_name: name, cta_location: location, destination }),

  navClick: (name: string, location: string) =>
    sendGAEvent("nav_click", { link_name: name, link_location: location }),

  outboundClick: (url: string, category: string) =>
    sendGAEvent("outbound_click", {
      link_url: url,
      link_domain: new URL(url).hostname,
      link_category: category,
    }),

  contactFormSubmit: (projectType?: string, budget?: string) =>
    sendGAEvent("contact_form_submit", { project_type: projectType, budget }),

  contactFormSuccess: (projectType?: string) =>
    sendGAEvent("generate_lead", { project_type: projectType }),

  contactFormError: (error: string) =>
    sendGAEvent("contact_form_error", { error_message: error }),

  portfolioFilter: (category: string) =>
    sendGAEvent("portfolio_filter", { category_name: category }),

  projectView: (name: string, url: string) =>
    sendGAEvent("project_view", { project_name: name, project_url: url }),

  socialClick: (platform: string) =>
    sendGAEvent("social_share", { platform }),

  languageChange: (from: string, to: string) =>
    sendGAEvent("language_change", { from_language: from, to_language: to }),

  whatsappClick: () => sendGAEvent("whatsapp_click"),
  phoneClick: () => sendGAEvent("phone_click"),
  emailClick: (email: string) => sendGAEvent("email_click", { email_address: email }),
};
