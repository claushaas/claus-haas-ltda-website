import { useTranslation } from 'react-i18next';

export default function UsesRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('uses.title')}</h1>
					<p className="t-body">{t('uses.description')}</p>
				</header>
				<article className="stack-lg">
					<p className="t-body">{t('uses.placeholder')}</p>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
