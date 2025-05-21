import type React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFlag, FaFlagUsa, FaGlobe } from 'react-icons/fa6';
import { useChangeLanguage } from '~/hooks/use-change-language';

/**
 * Componente para seleção de idioma com ícones Font Awesome 6.
 */
export const LanguageSwitcher = () => {
	const { t } = useTranslation();
	const { changeLanguage, currentLanguage } = useChangeLanguage();

	const languages: {
		code: 'pt' | 'en';
		icon: React.JSX.Element;
		label: string;
	}[] = [
		{
			code: 'pt',
			icon: <FaFlag className="mr-1 inline-block" />,
			label: t('idioma.pt', 'Português'),
		},
		{
			code: 'en',
			icon: <FaFlagUsa className="mr-1 inline-block" />,
			label: t('idioma.en', 'English'),
		},
	];

	return (
		<div className="flex items-center gap-2">
			<FaGlobe
				aria-label={t('idioma.label', 'Idioma')}
				className="text-lg text-radix-slate-11"
			/>
			{languages.map(({ code, label, icon }) => (
				<button
					aria-pressed={currentLanguage === code}
					className={`rounded px-2 py-1 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-radix-slate-7 ${
						currentLanguage === code
							? 'bg-radix-slate-4 text-radix-slate-12'
							: 'bg-transparent text-radix-slate-11 hover:bg-radix-slate-3'
					}`}
					key={code}
					onClick={() => changeLanguage(code)}
					type="button"
				>
					{icon}
					<span className="sr-only">{label}</span>
				</button>
			))}
		</div>
	);
};
