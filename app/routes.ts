import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
	index('./routes/home.tsx'),
	route('palette-kit', './routes/palette-kit.tsx'),
	route('harada', './routes/harada.tsx'),
] satisfies RouteConfig;
