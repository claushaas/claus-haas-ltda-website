import { Outlet, redirect } from 'react-router';
import { detectLanguage } from '~/i18n/i18n';
import type { Route } from './+types/lang';

const supportedLanguages = ['en', 'pt'];

export const loader = ({ params, request }: Route.LoaderArgs) => {
	const url = new URL(request.url);
	const segments = url.pathname.split('/').filter(Boolean);
	const [first, ...rest] = segments;
	const lang = params.lang ?? '';

	if (!supportedLanguages.includes(lang)) {
		const detected = detectLanguage(request);
		return redirect(`/${detected}/${segments.join('/')}${url.search}`);
	}

	const normalizedRest = [...rest];
	while (supportedLanguages.includes(normalizedRest[0] ?? '')) {
		normalizedRest.shift();
	}

	if (normalizedRest.length !== rest.length) {
		const nextPath = `/${first}${normalizedRest.length ? `/${normalizedRest.join('/')}` : ''}`;
		return redirect(`${nextPath}${url.search}`);
	}

	return null;
};

export default function LangLayout() {
	return <Outlet />;
}
