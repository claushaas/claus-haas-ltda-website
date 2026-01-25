import { Earth } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '~/hooks/use-change-language';

/**
 * Componente para seleção de idioma com ícones Font Awesome 6.
 */
export const LanguageSwitcher = () => {
	const { t } = useTranslation();
	const { changeLanguage, currentLanguage } = useChangeLanguage();

	const languages: {
		code: import('~/i18n/i18n').SupportedLanguage;
		label: string;
	}[] = [
		{ code: 'pt', label: 'Pt' },
		{ code: 'en', label: 'En' },
	];

	const otherLanguage: (typeof languages)[number] = languages.find(
		(lang) => lang.code !== currentLanguage,
	) ?? { code: 'en', label: 'En' };

	return (
		<div className="flex items-center">
			<Earth aria-label={t('idioma.label', 'Idioma')} className="icon" />
			<button
				aria-pressed={currentLanguage === otherLanguage.code}
				className="rounded px-2 py-1 weight-medium cursor-pointer"
				key={otherLanguage.code}
				onClick={() => changeLanguage(otherLanguage.code)}
				type="button"
			>
				<span>{otherLanguage.label}</span>
			</button>
		</div>
	);
};
