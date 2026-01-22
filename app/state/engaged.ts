export type AttentionState = 'ambient' | 'focused' | 'engaged';

export type GlobalState = {
	attention: AttentionState;
	setAttention: (next: AttentionState) => void;
};
