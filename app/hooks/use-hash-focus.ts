import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useHashFocus = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			return;
		}

		const targetId = decodeURIComponent(hash.slice(1));
		const target = document.getElementById(targetId);

		if (!target) {
			return;
		}

		if (!target.hasAttribute('tabindex')) {
			target.setAttribute('tabindex', '-1');
		}

		requestAnimationFrame(() => {
			target.scrollIntoView({ block: 'start' });
			target.focus({ preventScroll: true });
		});
	}, [hash]);
};
