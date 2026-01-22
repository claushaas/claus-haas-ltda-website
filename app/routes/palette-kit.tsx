import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import {
	type LoaderFunctionArgs,
	type MetaArgs,
	useLoaderData,
} from 'react-router';
import { detectLanguage } from '~/i18n/i18n';
export const loader = async ({ request }: LoaderFunctionArgs) => {
	const language = detectLanguage(request);

	const url = new URL(`/content/${language}/color-manifesto.md`, request.url);

	let response = await fetch(url);
	let resolvedLanguage = language;

	if (!response.ok) {
		if (language !== 'en') {
			const fallbackUrl = new URL(
				'/content/en/color-manifesto.md',
				request.url,
			);
			const fallbackResponse = await fetch(fallbackUrl);

			if (!fallbackResponse.ok) {
				throw new Response('Markdown not found', { status: 404 });
			}

			response = fallbackResponse;
			resolvedLanguage = 'en';
		} else {
			throw new Response('Markdown not found', { status: 404 });
		}
	}

	return {
		language: resolvedLanguage,
		markdown: await response.text(),
	};
};

export const meta = ({ loaderData }: MetaArgs<typeof loader>) => {
	const language = loaderData?.language;

	const metaByLang = {
		en: {
			title: 'Palette Kit',
		},
		pt: {
			title: 'Palette Kit',
		},
	};

	const meta = metaByLang[language as 'pt' | 'en'] ?? metaByLang.en;

	return [{ title: meta.title }];
};

export default function PaletteKit() {
	const { markdown } = useLoaderData<typeof loader>();

	const [Markdown, setMarkdown] = useState<ComponentType<{
		children: string;
	}> | null>(null);

	useEffect(() => {
		import('react-markdown').then((mod) => {
			setMarkdown(() => mod.default);
		});
	}, []);

	if (!Markdown) return null; // ou skeleton

	return <Markdown>{markdown}</Markdown>;
}
