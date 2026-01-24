import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
	index('./routes/redirect.tsx'),
	route(':lang', './routes/lang.tsx', [
		index('./routes/home.tsx'),
		route('how-i-work', './routes/how-i-work.tsx'),
		route('principles', './routes/principles.tsx'),
		route('about', './routes/about.tsx'),
		route('projects', './routes/projects.tsx'),
		route('uses', './routes/uses.tsx'),
		route('contact', './routes/contact.tsx'),
		route('notes', './routes/notes.tsx'),
		route('notes/:slug', './routes/notes.$slug.tsx'),
		route('harada', './routes/harada.tsx'),
		route('palette-kit', './routes/palette-kit.tsx'),
	]),
	route(
		'.well-known/appspecific/com.chrome.devtools.json',
		'./routes/devtools-probe.tsx',
	),
	route('*', './routes/redirect.tsx'),
] satisfies RouteConfig;
