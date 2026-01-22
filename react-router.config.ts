import type { Config } from '@react-router/dev/config';
import { notes as notesEn } from './app/content-index/notes.en';
import { notes as notesPt } from './app/content-index/notes.pt';

const notePaths = [
	...notesEn.map((note) => `/en/notes/${note.slug}`),
	...notesPt.map((note) => `/pt/notes/${note.slug}`),
];

export default {
	future: {
		v8_viteEnvironmentApi: true,
	},
	prerender: async () => [
		'/en',
		'/pt',
		'/en/how-i-work',
		'/pt/how-i-work',
		'/en/principles',
		'/pt/principles',
		'/en/about',
		'/pt/about',
		'/en/projects',
		'/pt/projects',
		'/en/uses',
		'/pt/uses',
		'/en/contact',
		'/pt/contact',
		'/en/harada',
		'/pt/harada',
		'/en/notes',
		'/pt/notes',
		...notePaths,
	],
	ssr: true,
} satisfies Config;
