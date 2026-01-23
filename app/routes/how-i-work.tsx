import { useTranslation } from 'react-i18next';

export default function HowIWorkRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('howIWork.title')}</h1>
					<p className="t-body">{t('howIWork.description')}</p>
				</header>
				<article className="stack-lg">
					<p className="t-body">{t('howIWork.placeholder')}</p>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
