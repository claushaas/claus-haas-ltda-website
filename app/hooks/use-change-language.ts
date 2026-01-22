import { useCallback } from 'react';
import { useLocation, useNavigate, useRevalidator } from 'react-router';
import { useI18nInstance } from './use-i18n-instance';

const normalizeLanguage = (language: string) =>
	language.startsWith('pt') ? 'pt' : 'en';

const replaceLangPrefix = (pathname: string, language: string) => {
	const segments = pathname.split('/').filter(Boolean);
	if (segments[0] === 'pt' || segments[0] === 'en') {
		segments[0] = language;
		return `/${segments.join('/')}`;
	}

	return `/${language}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
};

/**
 * Hook para trocar o idioma da aplicação e persistir no cookie (remix-i18next já faz isso).
 * Retorna a função changeLanguage e o idioma atual.
 */
export const useChangeLanguage = () => {
	const i18n = useI18nInstance();
	const currentLanguage = normalizeLanguage(i18n.language);
	const { revalidate } = useRevalidator();
	const navigate = useNavigate();
	const location = useLocation();

	const changeLanguage = useCallback(
		(lng: import('~/i18n/i18n').SupportedLanguage) => {
			i18n.changeLanguage(lng);
			const nextPath = replaceLangPrefix(location.pathname, lng);
			navigate(`${nextPath}${location.search}${location.hash}`);
			revalidate();
		},
		[
			i18n,
			location.hash,
			location.pathname,
			location.search,
			navigate,
			revalidate,
		],
	);

	return { changeLanguage, currentLanguage };
};
