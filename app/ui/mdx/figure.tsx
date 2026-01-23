import type { ComponentProps } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export type FigureProps = {
	alt: string;
	caption: string;
	src: string;
};

export const Figure = ({ alt, caption, src }: FigureProps) => {
	const { t } = useTranslation();
	const [hasError, setHasError] = useState(false);

	return (
		<figure className="surface surface-pad stack-xs alien">
			{hasError ? (
				<p className="t-body">{t('media.loadError')}</p>
			) : (
				<img alt={alt} onError={() => setHasError(true)} src={src} />
			)}
			<figcaption className="t-meta">{caption}</figcaption>
		</figure>
	);
};

export type CodeBlockProps = {
	caption?: string;
	code: string;
	language?: string;
	preProps?: ComponentProps<'pre'>;
};

export const CodeBlock = ({
	caption,
	code,
	language,
	preProps,
}: CodeBlockProps) => (
	<figure className="surface surface-pad stack-xs alien">
		<pre className="code-block" {...preProps}>
			<code data-lang={language ?? 'plain'}>{code}</code>
		</pre>
		{caption ? <figcaption className="t-meta">{caption}</figcaption> : null}
	</figure>
);
