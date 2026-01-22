import { useCallback, useEffect, useRef } from 'react';

const focusableSelector =
	'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getFocusable = (container: HTMLElement) =>
	Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
		(element) =>
			!element.hasAttribute('disabled') && !element.getAttribute('aria-hidden'),
	);

type UseEngagedOptions = {
	active: boolean;
	onClose: () => void;
	returnFocusRef?: React.RefObject<HTMLElement>;
};

export const useEngaged = ({
	active,
	onClose,
	returnFocusRef,
}: UseEngagedOptions) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onClose();
				return;
			}

			if (event.key !== 'Tab' || !containerRef.current) {
				return;
			}

			const focusable = getFocusable(containerRef.current);
			if (focusable.length === 0) {
				event.preventDefault();
				containerRef.current.focus();
				return;
			}

			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const activeElement = document.activeElement;

			if (event.shiftKey && activeElement === first) {
				event.preventDefault();
				last.focus();
				return;
			}

			if (!event.shiftKey && activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		},
		[onClose],
	);

	const onOverlayClick = useCallback(
		(event: React.MouseEvent) => {
			if (event.target === event.currentTarget) {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (!active) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const focusTimer = window.setTimeout(() => {
			const container = containerRef.current;
			if (!container) {
				return;
			}

			const focusable = getFocusable(container);
			const target = focusable[0] ?? container;
			target.focus();
		}, 0);

		return () => {
			window.clearTimeout(focusTimer);
			document.body.style.overflow = previousOverflow;
			returnFocusRef?.current?.focus();
		};
	}, [active, returnFocusRef]);

	return { containerRef, onKeyDown, onOverlayClick };
};
