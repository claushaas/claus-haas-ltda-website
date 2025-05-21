import {
	isRouteErrorResponse,
	Links,
	type LoaderFunctionArgs,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from 'react-router';
import type { Route } from './+types/root';
import './app.css';
import { useIsBot } from './hooks/use-is-bot';
import { detectLanguage } from './i18n/i18n';
import { LanguageSwitcher } from './ui/components/language-switcher';

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
	{
		href: '/favicon.ico',
		rel: 'shortcut icon',
	},
	{
		href: '/android-chrome-192x192.png',
		rel: 'icon',
		sizes: '192x192',
		type: 'image/png',
	},
	{
		href: '/android-chrome-512x512.png',
		rel: 'icon',
		sizes: '512x512',
		type: 'image/png',
	},
	{ href: '/site.webmanifest', rel: 'manifest' },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
	const language = detectLanguage(request);
	return { language };
};

export function Layout({ children }: { children: React.ReactNode }) {
	const language = useLoaderData<typeof loader>().language;
	const isBot = useIsBot();

	return (
		<html lang={language}>
			<head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta charSet="utf-8" />
				<meta content="index, follow" name="robots" />
				<meta content="Claus Haas Ltda." name="author" />
				<meta content="yes" name="mobile-web-app-capable" />
				<meta content="default" name="apple-mobile-web-app-status-bar-style" />
				<meta content="telephone=no" name="format-detection" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="#111113"
					media="(prefers-color-scheme: dark)"
					name="theme-color"
				/>
				<meta
					content="#fcfcfd"
					media="(prefers-color-scheme: light)"
					name="theme-color"
				/>
				<Meta />
				<Links />
			</head>
			<body className="m-auto h-fit max-w-4xl space-y-16 bg-slate-1 px-4 dark:bg-slatedark-1">
				<header className="flex justify-end pt-4">
					<LanguageSwitcher />
				</header>
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
