import { useTranslation } from 'react-i18next';

export default function PrinciplesRoute() {
	const { t } = useTranslation('routes');

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('principles.title')}</h1>
					<p className="t-body">{t('principles.description')}</p>
				</header>
				<article className="stack-lg">
					<section className="stack-sm">
						<h2 className="t-heading" id="principle-invariants">
							{t('principles.sections.invariants.title')}
						</h2>
						<p className="t-body">
							{t('principles.sections.invariants.description')}
						</p>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading" id="principle-boundaries">
							{t('principles.sections.boundaries.title')}
						</h2>
						<p className="t-body">
							{t('principles.sections.boundaries.description')}
						</p>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading" id="principle-decisions">
							{t('principles.sections.decisions.title')}
						</h2>
						<p className="t-body">
							{t('principles.sections.decisions.description')}
						</p>
					</section>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
