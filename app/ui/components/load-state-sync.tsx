import { useEffect } from 'react';
import { useNavigation } from 'react-router';
import { useGlobalState } from '~/state/global-state';

export const LoadStateSync = () => {
	const navigation = useNavigation();
	const { loadState, setLoadState } = useGlobalState();

	useEffect(() => {
		if (navigation.state !== 'idle') {
			setLoadState('loading');
			return;
		}

		if (loadState === 'loading' || loadState === 'idle') {
			setLoadState('ready');
		}
	}, [loadState, navigation.state, setLoadState]);

	return null;
};
