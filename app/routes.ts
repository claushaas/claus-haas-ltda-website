import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
	route(':lang(en|pt)', './routes/lang.tsx', [
		index('./routes/home.tsx'),
		route('harada', './routes/harada.tsx'),
		route('palette-kit', './routes/palette-kit.tsx'),
	]),
	route(
		'.well-known/appspecific/com.chrome.devtools.json',
		'./routes/devtools-probe.tsx',
	),
] satisfies RouteConfig;
