import type { ComponentProps } from 'react';

export type FigureProps = {
	alt: string;
	caption: string;
	src: string;
};

export const Figure = ({ alt, caption, src }: FigureProps) => (
	<figure className="surface surface-pad stack-xs alien">
		<img alt={alt} src={src} />
		<figcaption className="t-meta">{caption}</figcaption>
	</figure>
);

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
