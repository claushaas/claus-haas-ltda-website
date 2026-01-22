import type { ReactNode } from 'react';
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import type { AttentionState, GlobalState } from './engaged';

type GlobalStateProviderProps = {
	children: ReactNode;
};

const GlobalStateContext = createContext<GlobalState | null>(null);

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
	const [attention, setAttention] = useState<AttentionState>('ambient');

	const setAttentionState = useCallback((next: AttentionState) => {
		setAttention(next);
	}, []);

	const value = useMemo(
		() => ({
			attention,
			setAttention: setAttentionState,
		}),
		[attention, setAttentionState],
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
