import type { ReactNode } from 'react';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import type {
	AttentionState,
	ColorMode,
	ColorModePreference,
	GlobalState,
	InputMode,
	LoadState,
	MotionMode,
} from './engaged';

type GlobalStateProviderProps = {
	children: ReactNode;
};

const GlobalStateContext = createContext<GlobalState | null>(null);

const colorModeStorageKey = 'color-mode-preference';

const getStoredColorModePreference = (): ColorModePreference => {
	if (typeof window === 'undefined') {
		return 'system';
	}

	const stored = window.localStorage.getItem(colorModeStorageKey);
	if (stored === 'light' || stored === 'dark' || stored === 'system') {
		return stored;
	}

	return 'system';
};

const getSystemColorMode = (): ColorMode => {
	if (typeof window === 'undefined') {
		return 'light';
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

const resolveColorMode = (preference: ColorModePreference): ColorMode =>
	preference === 'system' ? getSystemColorMode() : preference;

const applyColorMode = (mode: ColorMode) => {
	if (typeof document === 'undefined') {
		return;
	}
	document.documentElement.classList.toggle('dark', mode === 'dark');
};

const getInitialColorMode = (): ColorMode => {
	if (typeof window === 'undefined') {
		return 'light';
	}
	const preference = getStoredColorModePreference();
	return resolveColorMode(preference);
};

const getInitialMotionMode = (): MotionMode => {
	if (typeof window === 'undefined') {
		return 'normal';
	}
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches
		? 'reduced'
		: 'normal';
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
	const [attention, setAttention] = useState<AttentionState>('ambient');
	const [colorModePreference, setColorModePreferenceState] =
		useState<ColorModePreference>(getStoredColorModePreference);
	const [colorMode, setColorModeState] =
		useState<ColorMode>(getInitialColorMode);
	const [motionMode, setMotionMode] =
		useState<MotionMode>(getInitialMotionMode);
	const [loadState, setLoadState] = useState<LoadState>('idle');
	const [inputMode, setInputMode] = useState<InputMode>('pointer');

	const setAttentionState = useCallback((next: AttentionState) => {
		setAttention(next);
	}, []);

	const setColorModePreference = useCallback((next: ColorModePreference) => {
		setColorModePreferenceState(next);
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(colorModeStorageKey, next);
		}
		setColorModeState(resolveColorMode(next));
	}, []);

	const setColorMode = useCallback(
		(next: ColorMode) => {
			setColorModePreference(next);
		},
		[setColorModePreference],
	);

	useEffect(() => {
		applyColorMode(colorMode);
	}, [colorMode]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			if (colorModePreference === 'system') {
				setColorModeState(media.matches ? 'dark' : 'light');
			}
		};

		media.addEventListener('change', handleChange);

		if (colorModePreference === 'system') {
			setColorModeState(media.matches ? 'dark' : 'light');
		}

		return () => {
			media.removeEventListener('change', handleChange);
		};
	}, [colorModePreference]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const handleMotion = (event: MediaQueryListEvent) => {
			setMotionMode(event.matches ? 'reduced' : 'normal');
		};

		media.addEventListener('change', handleMotion);
		setMotionMode(media.matches ? 'reduced' : 'normal');

		return () => {
			media.removeEventListener('change', handleMotion);
		};
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const handleKey = () => setInputMode('keyboard');
		const handlePointer = () => setInputMode('pointer');
		const handleTouch = () => setInputMode('touch');

		window.addEventListener('keydown', handleKey);
		window.addEventListener('mousedown', handlePointer);
		window.addEventListener('pointerdown', handlePointer);
		window.addEventListener('touchstart', handleTouch, { passive: true });

		return () => {
			window.removeEventListener('keydown', handleKey);
			window.removeEventListener('mousedown', handlePointer);
			window.removeEventListener('pointerdown', handlePointer);
			window.removeEventListener('touchstart', handleTouch);
		};
	}, []);

	const value = useMemo(
		() => ({
			attention,
			colorMode,
			colorModePreference,
			inputMode,
			loadState,
			motionMode,
			setAttention: setAttentionState,
			setColorMode,
			setColorModePreference,
			setLoadState,
		}),
		[
			attention,
			colorMode,
			colorModePreference,
			inputMode,
			loadState,
			motionMode,
			setAttentionState,
			setColorMode,
			setColorModePreference,
		],
	);

	return (
		<GlobalStateContext.Provider value={value}>
			{children}
		</GlobalStateContext.Provider>
	);
};

export const useGlobalState = () => {
	const context = useContext(GlobalStateContext);
	if (!context) {
		throw new Error('useGlobalState must be used within GlobalStateProvider');
	}
	return context;
};
