import { redirect } from 'react-router';
import { detectLanguage } from '~/i18n/i18n';
import type { Route } from './+types/redirect';

export const loader = ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url);
	const pathname = url.pathname === '/' ? '' : url.pathname;
	const lang = detectLanguage(request);

	return redirect(`/${lang}${pathname}${url.search}`);
};

export default function RedirectRoute() {
	return null;
}
