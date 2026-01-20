import type { LoaderFunctionArgs, MetaArgs } from 'react-router';
import { detectLanguage } from '~/i18n/i18n';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const language = detectLanguage(request);
	const res = await fetch(`/content/${language}/color-manifesto.md`);
	return {
		language,
		markdown: await res.text(),
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
	return <div>Palette Kit Page</div>;
}
