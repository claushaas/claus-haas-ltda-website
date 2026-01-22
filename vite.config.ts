import { cloudflare } from '@cloudflare/vite-plugin';
import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		mdx({ providerImportSource: '@mdx-js/react' }),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
	server: {
		host: true,
		port: Number(process.env.APP_PORT) || 3000,
	},
});
