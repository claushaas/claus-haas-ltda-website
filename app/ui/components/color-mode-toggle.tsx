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
					console.log('isActive', isActive);

					return (
						<button
							aria-pressed={isActive}
							className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
								isActive ? 'text-muted' : 'text-primary'
							}`}
							key={option}
							onClick={() => setColorModePreference(option)}
							type="button"
						>
							{option === 'light' ? (
								<Sun className="icon" />
							) : option === 'dark' ? (
								<Moon className="icon" />
							) : option === 'system' ? (
								<SunMoon className="icon" />
							) : null}
						</button>
					);
				})}
			</div>
		</div>
	);
};
