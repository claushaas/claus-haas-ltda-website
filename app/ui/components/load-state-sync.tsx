import { useEffect, useRef } from 'react';
import { useLocation, useNavigation } from 'react-router';
import { useGlobalState } from '~/state/global-state';

export const LoadStateSync = () => {
	const navigation = useNavigation();
	const location = useLocation();
	const { loadState, setLoadState } = useGlobalState();
	const prevLangRef = useRef<string | null>(null);

	useEffect(() => {
		if (navigation.state !== 'idle') {
			setLoadState('loading');
			return;
		}

		if (loadState === 'loading' || loadState === 'idle') {
			setLoadState('ready');
		}
	}, [loadState, navigation.state, setLoadState]);

	useEffect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		const isLoading = navigation.state !== 'idle';
		document.body.classList.toggle('is-loading', isLoading);

		return () => {
			document.body.classList.remove('is-loading');
		};
	}, [navigation.state]);

	useEffect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		const [nextLang] = location.pathname.split('/').filter(Boolean);
		const prevLang = prevLangRef.current;
		const isLang = nextLang === 'pt' || nextLang === 'en';

		if (prevLang && isLang && prevLang !== nextLang) {
			const body = document.body;
			body.classList.add('is-lang-switching');
			const timeoutId = window.setTimeout(() => {
				body.classList.remove('is-lang-switching');
			}, 160);

			return () => {
				window.clearTimeout(timeoutId);
				body.classList.remove('is-lang-switching');
			};
		}

		if (isLang) {
			prevLangRef.current = nextLang;
		}
	}, [location.pathname]);

	return null;
};
