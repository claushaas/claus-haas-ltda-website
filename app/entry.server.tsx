import { isbot } from 'isbot';
import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import type {
	EntryContext,
	unstable_RouterContextProvider,
} from 'react-router';
import { ServerRouter } from 'react-router';
import { IsBotProvider } from './hooks/use-is-bot';
import { getInstance } from './middleware/i18next';

export const streamTimeout = 5_000;

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	entryContext: EntryContext,
	routerContext: unstable_RouterContextProvider,
) {
	let userAgent = request.headers.get('user-agent');
	const isBotUser = isbot(userAgent ?? '');

	const markup = renderToString(
		<IsBotProvider isBot={isBotUser}>
			<I18nextProvider i18n={getInstance(routerContext)}>
				<ServerRouter context={entryContext} url={request.url} />
			</I18nextProvider>
		</IsBotProvider>,
	);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response(markup, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
