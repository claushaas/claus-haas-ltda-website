import { useTranslation } from 'react-i18next';

/**
 * Hook para acessar a instância global do i18n (remix-i18next).
 * Útil para trocar idioma e acessar métodos do i18n.
 */
export const useI18nInstance = () => {
	const { i18n } = useTranslation();
	return i18n;
};
