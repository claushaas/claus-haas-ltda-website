import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps, ReactNode } from 'react';
import { isValidElement } from 'react';
import { Callout } from './callout';
import { CodeBlock, Figure } from './figure';

const getNodeText = (node: ReactNode): string => {
	if (node === null || node === undefined) {
		return '';
	}

	if (typeof node === 'string' || typeof node === 'number') {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map(getNodeText).join('');
	}

	if (isValidElement<{ children?: ReactNode }>(node)) {
		return getNodeText(node.props.children);
	}

	return '';
};

const slugifyHeading = (value: string) =>
	value
		.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');

type HeadingProps = ComponentProps<'h1'>;

const renderHeading = (
	tag: 'h1' | 'h2' | 'h3',
	{ className, id, children, ...props }: HeadingProps,
) => {
	const text = getNodeText(children);
	const slug = text ? slugifyHeading(text) : '';
	const resolvedId = id ?? (slug ? slug : undefined);
	const HeadingTag = tag;

	return (
		<HeadingTag
			className={['t-heading', className].filter(Boolean).join(' ')}
			id={resolvedId}
			{...props}
		>
			{children}
		</HeadingTag>
	);
};

const Heading1 = (props: HeadingProps) => renderHeading('h1', props);
const Heading2 = (props: HeadingProps) => renderHeading('h2', props);
const Heading3 = (props: HeadingProps) => renderHeading('h3', props);

const Paragraph = ({ className, ...props }: ComponentProps<'p'>) => (
	<p className={['t-body', className].filter(Boolean).join(' ')} {...props} />
);

const List = ({ className, ...props }: ComponentProps<'ul'>) => (
	<ul className={['t-body', className].filter(Boolean).join(' ')} {...props} />
);

const OrderedList = ({ className, ...props }: ComponentProps<'ol'>) => (
	<ol className={['t-body', className].filter(Boolean).join(' ')} {...props} />
);

const ListItem = ({ className, ...props }: ComponentProps<'li'>) => (
	<li className={['t-body', className].filter(Boolean).join(' ')} {...props} />
);

const Pre = ({ className, ...props }: ComponentProps<'pre'>) => (
	<pre
		className={['surface', 'tile', className].filter(Boolean).join(' ')}
		{...props}
	/>
);

type ProviderProps = {
	children: ReactNode;
};

export const AppMdxProvider = ({ children }: ProviderProps) => (
	<MDXProvider
		components={{
			Callout,
			CodeBlock,
			Figure,
			h1: Heading1,
			h2: Heading2,
			h3: Heading3,
			li: ListItem,
			ol: OrderedList,
			p: Paragraph,
			pre: Pre,
			ul: List,
		}}
	>
		{children}
	</MDXProvider>
);
