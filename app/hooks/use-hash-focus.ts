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

		let focusTarget: HTMLElement = target;
		const labelledBy = target.getAttribute('aria-labelledby');

		if (!target.matches('h1, h2, h3, h4, h5, h6')) {
			if (labelledBy) {
				const labelledTarget = document.getElementById(labelledBy);
				if (labelledTarget) {
					focusTarget = labelledTarget;
				}
			} else {
				const heading = target.querySelector<HTMLElement>(
					'h1, h2, h3, h4, h5, h6',
				);
				if (heading) {
					focusTarget = heading;
				}
			}
		}

		if (!focusTarget.hasAttribute('tabindex')) {
			focusTarget.setAttribute('tabindex', '-1');
		}

		requestAnimationFrame(() => {
			focusTarget.scrollIntoView({ block: 'start' });
			focusTarget.focus({ preventScroll: true });
		});
	}, [hash]);
};
