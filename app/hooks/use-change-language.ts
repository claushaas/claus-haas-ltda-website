import { useCallback } from 'react';
import { useI18nInstance } from './use-i18n-instance';

/**
 * Hook para trocar o idioma da aplicação e persistir no cookie (remix-i18next já faz isso).
 * Retorna a função changeLanguage e o idioma atual.
 */
export const useChangeLanguage = () => {
	const i18n = useI18nInstance();
	const currentLanguage = i18n.language;

	const changeLanguage = useCallback(
		(lng: string) => {
			i18n.changeLanguage(lng);
		},
		[i18n],
	);

	return { changeLanguage, currentLanguage };
};
