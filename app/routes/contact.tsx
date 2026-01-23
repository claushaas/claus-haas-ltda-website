import { useTranslation } from 'react-i18next';

export default function ContactRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('contact.title')}</h1>
					<p className="t-body">{t('contact.description')}</p>
				</header>
				<section className="stack-lg">
					<p className="t-body">{t('contact.placeholder')}</p>
				</section>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
