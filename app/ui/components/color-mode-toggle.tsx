import { useTranslation } from 'react-i18next';
import { useGlobalState } from '~/state/global-state';

type ColorModeOption = {
	label: string;
	value: import('~/state/engaged').ColorModePreference;
};

export const ColorModeToggle = () => {
	const { t } = useTranslation('siteNav');
	const { colorModePreference, setColorModePreference } = useGlobalState();

	const options: ColorModeOption[] = [
		{ label: t('theme.system'), value: 'system' },
		{ label: t('theme.light'), value: 'light' },
		{ label: t('theme.dark'), value: 'dark' },
	];

	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<span className="t-meta">{t('theme.label')}</span>
			<div className="flex overflow-hidden rounded-full border border-slate-4 bg-slate-1 dark:border-slatedark-4 dark:bg-slatedark-1">
				{options.map((option) => {
					const isActive = colorModePreference === option.value;
					return (
						<button
							aria-pressed={isActive}
							className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
								isActive
									? 'bg-slate-12 text-slate-1 dark:bg-slatedark-12 dark:text-slatedark-1'
									: 'text-slate-11 hover:bg-slate-3 dark:text-slatedark-11 dark:hover:bg-slatedark-3'
							}`}
							key={option.value}
							onClick={() => setColorModePreference(option.value)}
							type="button"
						>
							{option.label}
						</button>
					);
				})}
			</div>
		</div>
	);
};
