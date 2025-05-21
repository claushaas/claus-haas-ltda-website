import { pick } from 'accept-language-parser';
import i18n, { type InitOptions } from 'i18next';
// for client-side language detection we will use this plugin, it will follow a similar flow as we did for the server
import LanguageDetector from 'i18next-browser-languagedetector';
// to load the localized messages client-side we will use this plugin to fetch them
import HttpApi from 'i18next-fetch-backend';
// and to use it with React with need this plugin
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['pt', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage = 'en';

const getFromSupported = (language: string | null): SupportedLanguage => {
	return (pick(supportedLanguages, language ?? defaultLanguage, {
		loose: true,
	}) ?? defaultLanguage) as SupportedLanguage;
};

export const detectLanguage = (request: Request): SupportedLanguage => {
	// first we prioritize the URL, if the user adds the `lng` is most likely what they want
	const url = new URL(request.url);
	if (url.searchParams.has('lng')) {
		return getFromSupported(url.searchParams.get('lng'));
	}

	// then we use the cookie, using this cookie we can store the user preference with a form
	const cookie = Object.fromEntries(
		request.headers
			.get('Cookie')
			?.split(';')
			.map((cookie) => cookie.split('=')) ?? [],
	) as { i18next?: string };

	if (cookie.i18next) {
		return getFromSupported(cookie.i18next);
	}

	// and then we check the Accept-Language header and use that, this will have the value
	// of the language the user use for their OS
	if (request.headers.has('accept-language')) {
		return getFromSupported(request.headers.get('accept-language'));
	}

	// finally, we fallback to our default language
	return defaultLanguage;
};

const isBrowser = typeof document !== 'undefined';

export const initI18Next = async (i18next: typeof i18n, language?: string) => {
	// first we add the generic configuration for client and server
	const options: InitOptions = {
		detection: {
			caches: ['cookie'],
		},
		fallbackLng: 'en',
		initImmediate: true,
		interpolation: { escapeValue: false },
		// keySeparator removido para permitir navegação em objetos aninhados
		load: 'languageOnly',
		react: { useSuspense: false },
		supportedLngs: supportedLanguages,
	};

	// then we add configuration used only server-side
	if (!isBrowser) {
		// here we set the language we are going to use
		options.lng = language ?? defaultLanguage;
		// and the namespace
		options.defaultNS = 'namespace1';
	}

	// then we add the configuration usada apenas no client
	if (isBrowser) {
		options.backend = { loadPath: '/locales/{{lng}}.json' };
		i18next.use(LanguageDetector).use(HttpApi);
		const cookieOptions = { path: '/', sameSite: 'lax' as const };
		if (language) {
			// Se idioma foi passado explicitamente, não ativa detecção, mas permite setar cookie
			options.lng = language;
			options.detection = { caches: ['cookie'], cookieOptions, order: [] };
		} else {
			options.detection = { caches: ['cookie'], cookieOptions };
		}
	}

	// now we tell i18next to use the React plunig and wee initialize it with our options
	await i18next.use(initReactI18next).init(options);

	if (!isBrowser) {
		// finalmente, se estivermos rodando server-side, vamos importar dinamicamente o JSON de tradução
		const resource = (
			await import(`../../public/locales/${language ?? defaultLanguage}.json`)
		).default;
		i18n.addResourceBundle(language ?? defaultLanguage, 'namespace1', resource);
	}
};
