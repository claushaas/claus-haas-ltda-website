import { useTranslation } from 'react-i18next';

export default function ContactRoute() {
	const { t } = useTranslation('routes');

	return (
		<main>
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('contact.title')}</h1>
					<p className="t-body">{t('contact.description')}</p>
				</header>
				<section className="stack-lg">
					<p className="t-body">{t('contact.body.0')}</p>
					<p className="t-body">{t('contact.body.1')}</p>
					<p className="t-body">
						{t('contact.emailLabel')}{' '}
						<a
							className="underline underline-offset-2 hover:opacity-80"
							href={`mailto:${t('contact.email')}`}
						>
							{t('contact.email')}
						</a>
					</p>
					<ul className="t-body list-disc pl-6 stack-xs">
						<li>{t('contact.expectations.0')}</li>
						<li>{t('contact.expectations.1')}</li>
						<li>{t('contact.expectations.2')}</li>
					</ul>
				</section>
			</div>
		</main>
	);
}
