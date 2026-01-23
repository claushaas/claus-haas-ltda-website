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
import { useTranslation } from 'react-i18next';
import { useHashFocus } from '~/hooks/use-hash-focus';
import { GlobalStateProvider } from '~/state/global-state';
import { AppMdxProvider } from '~/ui/mdx/mdx-provider';
import { useIsBot } from './hooks/use-is-bot';
import { defaultLanguage, detectLanguage } from './i18n/i18n';
import { ColorModeScript } from './ui/components/color-mode-script';
import { ColorModeToggle } from './ui/components/color-mode-toggle';
import { LanguageSwitcher } from './ui/components/language-switcher';
import { LoadStateSync } from './ui/components/load-state-sync';
import { SiteNav } from './ui/components/site-nav';
import { SkipLink } from './ui/components/skip-link';

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
				<body className="page m-auto h-fit space-y-16 px-4 flex flex-col justify-between">
					<div className="m-0">
						<SkipLink />
						<header className="flex flex-col items-center gap-4 py-4">
							<div className="flex flex-wrap items-center justify-center gap-3">
								<LanguageSwitcher />
								<ColorModeToggle />
							</div>
							<SiteNav />
						</header>
						<LoadStateSync />
						<AppMdxProvider>{children}</AppMdxProvider>
					</div>
					<footer
						className="mb-0 border-slate-2 border-t-2 pb-2 pt-16 dark:border-slatedark-2"
						id="footer"
					>
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
