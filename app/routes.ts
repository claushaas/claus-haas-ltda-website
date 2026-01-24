import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
	index('./ui/routes/redirect.tsx', { id: 'redirect-root' }),
	route(':lang', './ui/routes/lang.tsx', [
		index('./ui/routes/home.tsx'),
		route('how-i-work', './ui/routes/how-i-work.tsx'),
		route('principles', './ui/routes/principles.tsx'),
		route('about', './ui/routes/about.tsx'),
		route('projects', './ui/routes/projects.tsx'),
		route('uses', './ui/routes/uses.tsx'),
		route('contact', './ui/routes/contact.tsx'),
		route('notes', './ui/routes/notes.tsx'),
		route('notes/:slug', './ui/routes/notes.$slug.tsx'),
		route('harada', './ui/routes/harada.tsx'),
		route('palette-kit', './ui/routes/palette-kit.tsx'),
	]),
	route(
		'.well-known/appspecific/com.chrome.devtools.json',
		'./ui/routes/devtools-probe.tsx',
	),
	route('*', './ui/routes/redirect.tsx', { id: 'redirect-catchall' }),
] satisfies RouteConfig;
