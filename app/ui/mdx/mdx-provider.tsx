import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps, ReactNode } from 'react';

const Heading1 = ({ className, ...props }: ComponentProps<'h1'>) => (
	<h1
		className={['t-heading', className].filter(Boolean).join(' ')}
		{...props}
	/>
);

const Heading2 = ({ className, ...props }: ComponentProps<'h2'>) => (
	<h2
		className={['t-heading', className].filter(Boolean).join(' ')}
		{...props}
	/>
);

const Heading3 = ({ className, ...props }: ComponentProps<'h3'>) => (
	<h3
		className={['t-heading', className].filter(Boolean).join(' ')}
		{...props}
	/>
);

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
