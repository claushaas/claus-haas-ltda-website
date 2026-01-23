import { Moon, Sun, SunMoon } from 'lucide-react';
import type { ColorModePreference } from '~/state/engaged';
import { useGlobalState } from '~/state/global-state';

export const ColorModeToggle = () => {
	const { colorModePreference, setColorModePreference } = useGlobalState();
	const options: ColorModePreference[] = ['system', 'light', 'dark'];

	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<div className="flex overflow-hidden rounded-full border border-slate-4 bg-slate-1 dark:border-slatedark-4 dark:bg-slatedark-1">
				{options.map((option) => {
					const isActive = colorModePreference === option;
					return (
						<button
							aria-pressed={isActive}
							className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
								isActive
									? 'bg-slate-12 text-slate-1 dark:bg-slatedark-12 dark:text-slatedark-1'
									: 'text-slate-11 hover:bg-slate-3 dark:text-slatedark-11 dark:hover:bg-slatedark-3'
							}`}
							key={option}
							onClick={() => setColorModePreference(option)}
							type="button"
						>
							{option === 'light' ? (
								<Sun className="inline-block h-4 w-4" />
							) : option === 'dark' ? (
								<Moon className="inline-block h-4 w-4" />
							) : option === 'system' ? (
								<SunMoon className="inline-block h-4 w-4" />
							) : null}
						</button>
					);
				})}
			</div>
		</div>
	);
};
