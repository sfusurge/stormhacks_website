import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import translationEn from "./i18n/en/translation.json";

export const resources = {
	en: {
		translation: translationEn,
	},
} as const;

i18n.use(initReactI18next).init({
	// Fallback to English.
	fallbackLng: "en",

	// Allow "en" to be valid for "en-CA" etc.
	nonExplicitSupportedLngs: true,

	// The translations.
	resources,

	// Needed for React.
	interpolation: {
		escapeValue: false,
	},
});
