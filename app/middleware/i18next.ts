import { createCookie } from 'react-router';
import { unstable_createI18nextMiddleware } from 'remix-i18next/middleware';
import en from '~/locales/en';
import pt from '~/locales/pt';

export const localeCookie = createCookie('lng', {
	httpOnly: true,
	path: '/',
	sameSite: 'lax',
	secure: process.env.NODE_ENV === 'production',
});

export const [i18nextMiddleware, getLocale, getInstance] =
	unstable_createI18nextMiddleware({
		detection: {
			cookie: localeCookie,
			fallbackLanguage: 'en',
			supportedLanguages: ['en', 'es'],
		},
		i18next: {
			resources: { en: { translation: en }, pt: { translation: pt } },
			// Other i18next options are available here
		},
	});
