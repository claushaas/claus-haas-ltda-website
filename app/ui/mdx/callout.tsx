import type { ReactNode } from 'react';

export type CalloutTone = 'neutral' | 'warning';

type CalloutProps = {
	children: ReactNode;
	tone?: CalloutTone;
	title?: string;
};

export const Callout = ({
	children,
	title,
	tone = 'neutral',
}: CalloutProps) => {
	const toneClass = tone === 'warning' ? 'callout-warning' : 'callout-neutral';

	return (
		<aside className={`surface surface-pad stack-xs ${toneClass}`} role="note">
			{title ? <div className="t-meta">{title}</div> : null}
			<div className="t-body">{children}</div>
		</aside>
	);
};
