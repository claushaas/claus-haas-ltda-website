import { useEffect } from 'react';

const activeClass = 'scrolling';
const idleDelayMs = 700;

export const ScrollbarVisibility = () => {
	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const root = document.documentElement;
		let timeoutId: number | undefined;

		const handleScroll = () => {
			root.classList.add(activeClass);
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}
			timeoutId = window.setTimeout(() => {
				root.classList.remove(activeClass);
			}, idleDelayMs);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}
			root.classList.remove(activeClass);
		};
	}, []);

	return null;
};
