import i18next from 'i18next';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import type { AppLoadContext, EntryContext } from 'react-router';
import { ServerRouter } from 'react-router';
import { IsBotProvider } from './hooks/use-is-bot';
import { detectLanguage, initI18Next } from './i18n/i18n';

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext,
	_loadContext: AppLoadContext,
) {
	let shellRendered = false;
	const userAgent = request.headers.get('user-agent');

	await initI18Next(i18next, detectLanguage(request));

	const body = await renderToReadableStream(
		<IsBotProvider isBot={isbot(userAgent ?? '')}>
			<I18nextProvider i18n={i18next}>
				<ServerRouter context={routerContext} url={request.url} />
			</I18nextProvider>
		</IsBotProvider>,
		{
			onError(error: unknown) {
				responseStatusCode = 500;
				// Log streaming rendering errors from inside the shell.  Don't log
				// errors encountered during initial shell rendering since they'll
				// reject and get logged in handleDocumentRequest.
				if (shellRendered) {
					console.error(error);
				}
			},
		},
	);
	shellRendered = true;

	// Ensure requests from bots and SPA Mode renders wait for all content to load before responding
	// https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
	if ((userAgent && isbot(userAgent)) || routerContext.isSpaMode) {
		await body.allReady;
	}

	responseHeaders.set('Content-Type', 'text/html');
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
