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
	GlobalState,
	InputMode,
	LoadState,
	MotionMode,
} from './engaged';

type GlobalStateProviderProps = {
	children: ReactNode;
};

const GlobalStateContext = createContext<GlobalState | null>(null);

const getInitialColorMode = (): ColorMode => {
	if (typeof document === 'undefined') {
		return 'light';
	}
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
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
	const [colorMode, setColorModeState] =
		useState<ColorMode>(getInitialColorMode);
	const [motionMode, setMotionMode] =
		useState<MotionMode>(getInitialMotionMode);
	const [loadState, setLoadState] = useState<LoadState>('idle');
	const [inputMode, setInputMode] = useState<InputMode>('pointer');

	const setAttentionState = useCallback((next: AttentionState) => {
		setAttention(next);
	}, []);

	const setColorMode = useCallback((next: ColorMode) => {
		setColorModeState(next);
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', next === 'dark');
		}
	}, []);

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
			inputMode,
			loadState,
			motionMode,
			setAttention: setAttentionState,
			setColorMode,
			setLoadState,
		}),
		[
			attention,
			colorMode,
			inputMode,
			loadState,
			motionMode,
			setAttentionState,
			setColorMode,
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
