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
					<section className="stack-sm">
						<h2 className="t-heading">{t('uses.sections.stack.title')}</h2>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('uses.sections.stack.items.0')}</li>
							<li>{t('uses.sections.stack.items.1')}</li>
							<li>{t('uses.sections.stack.items.2')}</li>
							<li>{t('uses.sections.stack.items.3')}</li>
						</ul>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">{t('uses.sections.platform.title')}</h2>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('uses.sections.platform.items.0')}</li>
							<li>{t('uses.sections.platform.items.1')}</li>
							<li>{t('uses.sections.platform.items.2')}</li>
						</ul>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">{t('uses.sections.ops.title')}</h2>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('uses.sections.ops.items.0')}</li>
							<li>{t('uses.sections.ops.items.1')}</li>
							<li>{t('uses.sections.ops.items.2')}</li>
							<li>{t('uses.sections.ops.items.3')}</li>
						</ul>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">{t('uses.sections.analytics.title')}</h2>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('uses.sections.analytics.items.0')}</li>
							<li>{t('uses.sections.analytics.items.1')}</li>
						</ul>
					</section>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
