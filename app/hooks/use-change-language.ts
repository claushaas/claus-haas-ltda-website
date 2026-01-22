import { useCallback } from 'react';
import { useRevalidator } from 'react-router';
import { useI18nInstance } from './use-i18n-instance';

/**
 * Hook para trocar o idioma da aplicação e persistir no cookie (remix-i18next já faz isso).
 * Retorna a função changeLanguage e o idioma atual.
 */
export const useChangeLanguage = () => {
	const i18n = useI18nInstance();
	const currentLanguage = i18n.language;
	const { revalidate } = useRevalidator();

	const changeLanguage = useCallback(
		(lng: import('~/i18n/i18n').SupportedLanguage) => {
			i18n.changeLanguage(lng);
			revalidate();
		},
		[i18n, revalidate],
	);

	return { changeLanguage, currentLanguage };
};
