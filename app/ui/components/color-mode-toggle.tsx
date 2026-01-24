import { Moon, Sun, SunMoon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ColorModePreference } from '~/state/engaged';
import { useGlobalState } from '~/state/global-state';

export const ColorModeToggle = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { colorModePreference, setColorModePreference } = useGlobalState();
	const options: ColorModePreference[] = ['system', 'light', 'dark'];

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="flex overflow-hidden rounded-full">
			{options.map((option) => {
				const isActive = colorModePreference === option;

				return (
					<button
						aria-pressed={isActive}
						className={`p-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
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
	);
};
