import { isbot } from 'isbot';
import { renderToString } from 'react-dom/server';
import type { EntryContext } from 'react-router';
import { ServerRouter } from 'react-router';
import { IsBotProvider } from './hooks/use-is-bot';

export const streamTimeout = 5_000;

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	entryContext: EntryContext,
) {
	let userAgent = request.headers.get('user-agent');
	const isBotUser = isbot(userAgent ?? '');

	const markup = renderToString(
		<IsBotProvider isBot={isBotUser}>
			<ServerRouter context={entryContext} url={request.url} />
		</IsBotProvider>,
	);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response(markup, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
