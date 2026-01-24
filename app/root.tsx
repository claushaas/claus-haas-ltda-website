import { useTranslation } from 'react-i18next';
import {
	isRouteErrorResponse,
	Links,
	type LoaderFunctionArgs,
	Meta,
	Outlet,
	redirect,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from 'react-router';
import { useHashFocus } from '~/hooks/use-hash-focus';
import { GlobalStateProvider } from '~/state/global-state';
import { AppMdxProvider } from '~/ui/mdx/mdx-provider';
import type { Route } from './+types/root';
import { useIsBot } from './hooks/use-is-bot';
import { defaultLanguage, detectLanguage } from './i18n/i18n';
import { ColorModeToggle } from './ui/components/color-mode-toggle';
import { LanguageSwitcher } from './ui/components/language-switcher';
import { LoadStateSync } from './ui/components/load-state-sync';
import { ScrollbarVisibility } from './ui/components/scrollbar-visibility';
import { SiteNav } from './ui/components/site-nav';
import { SkipLink } from './ui/components/skip-link';
import { ColorModeScript } from './utils/color-mode-script';

import './ui/styles/index.css';

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
	const url = new URL(request.url);
	const segments = url.pathname.split('/').filter(Boolean);
	const [first] = segments;
	const isLangPrefix = first === 'en' || first === 'pt';
	const isWellKnown = url.pathname.startsWith('/.well-known/appspecific/');

	if (!isLangPrefix && !isWellKnown) {
		const language = detectLanguage(request);
		const nextPath = `/${language}${url.pathname === '/' ? '' : url.pathname}`;
		throw redirect(`${nextPath}${url.search}`);
	}

	const language = detectLanguage(request);
	const canonicalUrl = request.url;
	return { canonicalUrl, language };
};

export function Layout({ children }: { children: React.ReactNode }) {
	const loaderData = useLoaderData<typeof loader>();
	const language = loaderData?.language ?? defaultLanguage;
	const canonicalUrl = loaderData?.canonicalUrl;
	const isBot = useIsBot();
	const { t } = useTranslation();

	return (
		<html lang={language} suppressHydrationWarning>
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
				<ColorModeScript />
				{/* SEO & Accessibility */}
				<meta content="Claus Haas Ltda." name="application-name" />
				<meta content="Claus Haas Ltda." name="apple-mobile-web-app-title" />
				<meta content="true" name="HandheldFriendly" />
				<meta content="strict-origin-when-cross-origin" name="referrer" />
				<meta content={language} httpEquiv="Content-Language" />
				{canonicalUrl && <link href={canonicalUrl} rel="canonical" />}
				{/* Open Graph */}
				<meta content="Claus Haas Ltda." property="og:title" />
				<meta
					content="Desenvolvimento de software, automação e soluções digitais sob medida."
					property="og:description"
				/>
				<meta content="website" property="og:type" />
				{canonicalUrl && <meta content={canonicalUrl} property="og:url" />}
				<meta content="/android-chrome-512x512.png" property="og:image" />
				{/* Twitter Card */}
				<meta content="summary_large_image" name="twitter:card" />
				<meta content="Claus Haas Ltda." name="twitter:title" />
				<meta
					content="Desenvolvimento de software, automação e soluções digitais sob medida."
					name="twitter:description"
				/>
				<meta content="/android-chrome-512x512.png" name="twitter:image" />
				<Meta />
				<Links />
				{/* Inject initial language for client SSR sync */}
				<script id="initial-i18n-language" type="application/json">
					{JSON.stringify({ language })}
				</script>
			</head>
			<GlobalStateProvider>
				<body className="page h-fit p-4 flex flex-col justify-between">
					<SkipLink />
					<header className="flex justify-between items-center gap-4 pb-4">
						<SiteNav />
						<div className="flex gap-4">
							<ColorModeToggle />
							<LanguageSwitcher />
						</div>
					</header>
					<ScrollbarVisibility />
					<LoadStateSync />
					<AppMdxProvider>{children}</AppMdxProvider>
					<footer className="mb-0 border-t-2 pb-2 pt-16" id="footer">
						<p className="text-center">
							{t('home.footer', { year: new Date().getFullYear() })}
							{!isBot && t('home.footerCnpj')}
						</p>
					</footer>
					<ScrollRestoration />
					{isBot ? null : <Scripts />}
				</body>
			</GlobalStateProvider>
		</html>
	);
}

export default function App() {
	useHashFocus();
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
