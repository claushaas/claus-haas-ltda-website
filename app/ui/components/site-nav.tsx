import { useTranslation } from 'react-i18next';

const links = [
	{ href: '/how-i-work', key: 'howIWork' },
	{ href: '/principles', key: 'principles' },
	{ href: '/notes', key: 'notes' },
	{ href: '/harada', key: 'harada' },
	{ href: '/about', key: 'about' },
];

export const SiteNav = () => {
	const { t } = useTranslation();

	return (
		<nav aria-label={t('siteNav.label')} className="stack-xs">
			<div className="t-meta">{t('siteNav.navigationMeta')}</div>
			<div className="nav-row">
				{links.map((link) => (
					<a href={link.href} key={link.key}>
						{t(`siteNav.${link.key}`)}
					</a>
				))}
			</div>
		</nav>
	);
};
