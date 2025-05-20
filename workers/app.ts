import { createRequestHandler } from 'react-router';

declare module 'react-router' {
	export interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: ExecutionContext;
		};
	}
}

const requestHandler = createRequestHandler(
	() => import('virtual:react-router/server-build'),
	import.meta.env.MODE,
);

export default {
	async fetch(request, _env, _ctx) {
		return requestHandler(request, new Map());
	},
} satisfies ExportedHandler<Env>;
