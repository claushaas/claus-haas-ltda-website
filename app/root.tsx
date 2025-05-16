import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { useIsBot } from './hooks/use-is-bot';

export const links: Route.LinksFunction = () => [
	{
		href: '/apple-touch-icon.png',
		rel: 'apple-touch-icon',
		sizes: '180x180',
	},
	{
		href: '/favicon-32x32.png',
		rel: 'icon',
		sizes: '32x32',
		type: 'image/png',
	},
	{
		href: '/favicon-16x16.png',
		rel: 'icon',
		sizes: '16x16',
		type: 'image/png',
	},
	{ href: '/site.webmanifest', rel: 'manifest' },
];

export function Layout({ children }: { children: React.ReactNode }) {
	const isBot = useIsBot();

	return (
		<html className="h-full" lang="en">
			<head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<Meta />
				<Links />
			</head>
			<body className="m-auto h-fit max-w-4xl space-y-16 bg-slate-1 px-4 dark:bg-slatedark-1">
				{children}
				<ScrollRestoration />
				{isBot ? null : <Scripts />}
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="container mx-auto p-4 pt-16">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
