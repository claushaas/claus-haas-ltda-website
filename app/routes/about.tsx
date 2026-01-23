import { useTranslation } from 'react-i18next';

export default function AboutRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('about.title')}</h1>
					<p className="t-body">{t('about.description')}</p>
				</header>
				<article className="stack-lg">
					<p className="t-body">{t('about.body.0')}</p>
					<p className="t-body">{t('about.body.1')}</p>
					<p className="t-body">{t('about.body.2')}</p>
					<ul className="t-body list-disc pl-6 stack-xs">
						<li>{t('about.highlights.0')}</li>
						<li>{t('about.highlights.1')}</li>
						<li>{t('about.highlights.2')}</li>
					</ul>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
