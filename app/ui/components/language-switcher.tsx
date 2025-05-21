import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa6';
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
		{
			code: 'pt',
			label: 'Português',
		},
		{
			code: 'en',
			label: 'English',
		},
	];

	return (
		<div className="flex items-center gap-2">
			<FaGlobe
				aria-label={t('idioma.label', 'Idioma')}
				className="text-lg text-radix-slate-11 text-sky-11 dark:text-skydark-11"
			/>
			{languages.map(({ code, label }) => (
				<button
					aria-pressed={currentLanguage === code}
					className={`rounded px-2 py-1 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-radix-slate-7 ${currentLanguage === code ? 'cursor-default opacity-60' : 'cursor-pointer text-radix-slate-12 opacity-100 hover:bg-radix-slate-3'}`}
					disabled={currentLanguage === code}
					key={code}
					onClick={() => changeLanguage(code)}
					type="button"
				>
					<span className="text-sky-11 dark:text-skydark-11">{label}</span>
				</button>
			))}
		</div>
	);
};
