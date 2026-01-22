import type { ReactNode, RefObject } from 'react';
import { useEffect } from 'react';
import { useEngaged } from '~/hooks/use-engaged';
import { useGlobalState } from '~/state/global-state';

const useHistoryBackClose = (active: boolean, onClose: () => void) => {
	useEffect(() => {
		if (!active) {
			return;
		}

		const handlePop = () => onClose();
		window.history.pushState({ engaged: true }, '');
		window.addEventListener('popstate', handlePop);

		return () => {
			window.removeEventListener('popstate', handlePop);
			if (window.history.state?.engaged) {
				window.history.back();
			}
		};
	}, [active, onClose]);
};

type FocusLayerProps = {
	active: boolean;
	children: ReactNode;
	onClose: () => void;
	returnFocusRef?: RefObject<HTMLElement>;
};

export const FocusLayer = ({
	active,
	children,
	onClose,
	returnFocusRef,
}: FocusLayerProps) => {
	const { containerRef, onKeyDown, onOverlayClick } = useEngaged({
		active,
		onClose,
		returnFocusRef,
	});
	const { setAttention } = useGlobalState();

	useHistoryBackClose(active, onClose);

	useEffect(() => {
		setAttention(active ? 'engaged' : 'ambient');
		return () => setAttention('ambient');
	}, [active, setAttention]);

	if (!active) {
		return null;
	}

	return (
		<div
			aria-modal="true"
			className="focus-layer"
			onClick={onOverlayClick}
			onKeyDown={onKeyDown}
			role="dialog"
		>
			<div
				className="focus-surface surface surface-pad"
				ref={containerRef}
				role="document"
				tabIndex={-1}
			>
				{children}
			</div>
		</div>
	);
};
