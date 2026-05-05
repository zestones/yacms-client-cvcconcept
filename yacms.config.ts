import { defineConfig } from "@yacms/core/config";

export default defineConfig({
  plugins: {
    ga4: {
      enabled: false,
      trackingId: 'G-XXXXXXXXZ',
    },
    tawk: {
      widgetId: '69bc038b22e4791c3681a8c2/1jk36rmup',
      source: 'cvcconcept.com',
    },
    klaro: {
      privacyPolicyPath: '/mentions-legales',
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', label: 'Français' },
      { code: 'ar', label: 'العربية' },
      { code: 'en', label: 'English' },
    ],
    routing: 'prefix-except-default',
    fallback: 'default',
    translation: {
      adapter: 'gemini',
      model: 'gemma-4-31b-it',
    },
  },
  ai: {
    adapter: 'gemini',
    model: 'gemini-3.1-flash-lite-preview',
  },
});
