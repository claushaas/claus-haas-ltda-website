import { unstable_createI18nextMiddleware } from 'remix-i18next/middleware';
import en from '~/locales/en';
import pt from '~/locales/pt';

export const [i18nextMiddleware, getLocale, getInstance] =
	unstable_createI18nextMiddleware({
		detection: {
			fallbackLanguage: 'en',
			supportedLanguages: ['en', 'es'],
		},
		i18next: {
			resources: { en: { translation: en }, pt: { translation: pt } },
			// Other i18next options are available here
		},
	});
