export type AttentionState = 'ambient' | 'focused' | 'engaged';
export type ColorMode = 'light' | 'dark';
export type ColorModePreference = 'system' | 'light' | 'dark';
export type MotionMode = 'normal' | 'reduced';
export type LoadState = 'idle' | 'loading' | 'ready' | 'error' | 'empty';
export type InputMode = 'keyboard' | 'pointer' | 'touch' | 'assistive';

export type GlobalState = {
	attention: AttentionState;
	colorMode: ColorMode;
	colorModePreference: ColorModePreference;
	motionMode: MotionMode;
	loadState: LoadState;
	inputMode: InputMode;
	setAttention: (next: AttentionState) => void;
	setColorMode: (next: ColorMode) => void;
	setColorModePreference: (next: ColorModePreference) => void;
	setLoadState: (next: LoadState) => void;
};
