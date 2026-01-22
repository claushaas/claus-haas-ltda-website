import { useTranslation } from 'react-i18next';
import { SiteNav } from '~/ui/components/site-nav';

export default function AboutRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('about.title')}</h1>
					<p className="t-body">{t('about.description')}</p>
					<SiteNav />
				</header>
				<article className="stack-lg">
					<p className="t-body">{t('about.placeholder')}</p>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
