import i18n from 'i18next';
import { useCallback } from 'react';
import { setI18nextCookie } from '~/i18n/i18n';

/**
 * Hook para trocar o idioma da aplicação e persistir no cookie 'i18next'.
 * Retorna a função changeLanguage e o idioma atual.
 */
export const useChangeLanguage = () => {
	const currentLanguage = i18n.language;

	const changeLanguage = useCallback((lng: string) => {
		i18n.changeLanguage(lng);
		setI18nextCookie(lng);
	}, []);

	return { changeLanguage, currentLanguage };
};
