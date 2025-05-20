import { pick } from 'accept-language-parser';
import type i18n from 'i18next';
import type { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['pt', 'en'];

const defaultLanguage = 'en';

const getFromSupported = (language: string | null) => {
	return (
		pick(supportedLanguages, language ?? defaultLanguage, { loose: true }) ??
		defaultLanguage
	);
};

export const detectLanguage = (request: Request) => {
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

/**
 * Seta o cookie 'i18next' com o idioma preferido do usuário.
 * O cookie é persistido por 1 ano e disponível em todo o site.
 * Use esta função ao trocar o idioma na UI.
 *
 * Obs: Atribuição direta a document.cookie é padrão para cookies simples.
 * Se o projeto crescer, considere usar uma biblioteca como js-cookie para maior robustez.
 *
 * @param language Código do idioma (ex: 'pt', 'en')
 */
export const setI18nextCookie = (language: string) => {
	if (typeof document === 'undefined') return;
	const expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1);
	// biome-ignore lint: necessário para persistir a língua preferida do usuário
	document.cookie = `i18next=${language}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

const isBrowser = typeof document === 'object';

export const initI18Next = async (i18next: typeof i18n, language?: string) => {
	// first we add the generic configuration for client and server
	const options: InitOptions = {
		detection: {
			caches: ['cookie'],
		},
		fallbackLng: 'en',
		initImmediate: true,
		interpolation: { escapeValue: false },
		keySeparator: false,
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

	// then we add the configuration used only client-side
	if (isBrowser) {
		// here we configure the path for our JSON filas with the localized messages
		options.backend = { loadPath: '/locales/{{lng}}.json' };
		// and here we set what to use as cache for the language detection
		options.detection = { caches: ['cookie'] };
		// and we tell i18next to use the language detector and http api plugins
		i18next.use(LanguageDetector).use(HttpApi);
	}

	// now we tell i18next to use the React plunig and wee initialize it with our options
	await i18next.use(initReactI18next).init(options);

	// agora removemos o bloco que usava require, pois o backend já carrega os arquivos de tradução
};
