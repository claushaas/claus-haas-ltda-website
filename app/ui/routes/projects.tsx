import { useTranslation } from 'react-i18next';

export default function ProjectsRoute() {
	const { t } = useTranslation('routes');

	return (
		<main>
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('projects.title')}</h1>
					<p className="t-body">{t('projects.description')}</p>
				</header>
				<section className="stack-lg">
					<section className="stack-sm">
						<h2 className="t-heading">{t('projects.featured.title')}</h2>
						<p className="t-body">{t('projects.featured.body')}</p>
						<ul className="t-body list-disc pl-6 stack-xs">
							<li>{t('projects.featured.highlights.0')}</li>
							<li>{t('projects.featured.highlights.1')}</li>
							<li>{t('projects.featured.highlights.2')}</li>
						</ul>
						<p className="t-meta">
							<a
								className="underline underline-offset-2 hover:opacity-80"
								href={t('projects.featured.linkUrl')}
								rel="noopener noreferrer"
								target="_blank"
							>
								{t('projects.featured.linkLabel')}
							</a>
						</p>
					</section>
					<section className="stack-sm">
						<h2 className="t-heading">{t('projects.next.title')}</h2>
						<p className="t-body">{t('projects.next.body')}</p>
					</section>
				</section>
			</div>
		</main>
	);
}
