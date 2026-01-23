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
					<section className="stack-sm">
						<h2 className="t-heading">{t('howIWork.sections.model.title')}</h2>
						<p className="t-body">{t('howIWork.sections.model.body')}</p>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">
							{t('howIWork.sections.bestResults.title')}
						</h2>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('howIWork.sections.bestResults.items.0')}</li>
							<li>{t('howIWork.sections.bestResults.items.1')}</li>
							<li>{t('howIWork.sections.bestResults.items.2')}</li>
							<li>{t('howIWork.sections.bestResults.items.3')}</li>
						</ul>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">
							{t('howIWork.sections.boundaries.title')}
						</h2>
						<p className="t-body">{t('howIWork.sections.boundaries.body')}</p>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">
							{t('howIWork.sections.disagreement.title')}
						</h2>
						<p className="t-body">{t('howIWork.sections.disagreement.body')}</p>
						<p className="t-meta">{t('howIWork.sections.disagreement.rule')}</p>
					</section>
				</article>
				<footer className="t-meta">{t('footer')}</footer>
			</div>
		</main>
	);
}
