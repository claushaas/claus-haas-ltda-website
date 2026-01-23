import { redirect } from 'react-router';
import { detectLanguage } from '~/i18n/i18n';
import type { Route } from './+types/redirect';

export const loader = ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url);
	const lang = detectLanguage(request);

	const segments = url.pathname.split('/').filter(Boolean);
	const hasLangPrefix = segments[0] === 'en' || segments[0] === 'pt';
	while (segments[0] === 'en' || segments[0] === 'pt') {
		segments.shift();
	}
	const rest = segments.join('/');
	const nextPath = `/${lang}${rest ? `/${rest}` : ''}`;

	if (hasLangPrefix) {
		return null;
	}

	return redirect(`${nextPath}${url.search}`);
};

export default function RedirectRoute() {
	return null;
}
