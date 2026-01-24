import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const links = [
	{ href: '/how-i-work', key: 'howIWork' },
	{ href: '/principles', key: 'principles' },
	{ href: '/notes', key: 'notes' },
	{ href: '/harada', key: 'harada' },
	{ href: '/about', key: 'about' },
];

const normalizeLanguage = (language: string) =>
	language.startsWith('pt') ? 'pt' : 'en';

export const SiteNav = () => {
	const { t, i18n } = useTranslation('siteNav');
	const language = normalizeLanguage(i18n.language);

	return (
		<nav aria-label={t('label')} className="stack-xs">
			<div className="nav-row">
				{links.map((link) => (
					<Link key={link.key} to={`/${language}${link.href}`}>
						{t(link.key)}
					</Link>
				))}
			</div>
		</nav>
	);
};
