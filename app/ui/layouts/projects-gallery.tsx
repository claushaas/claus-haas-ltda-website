import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllProjects } from '~/content/projects';
import ProjectCard from '../components/project-card';

export default function ProjetosSection() {
	const { t } = useTranslation();
	const projectsList = getAllProjects();
	const [orderOfProjects, setOrderOfProjects] = useState(
		projectsList.map((_, index) => index),
	);

	const next = () => {
		setOrderOfProjects((prev) => {
			const [first, ...rest] = prev;
			return [...rest, first];
		});
	};

	return (
		<section aria-labelledby="projetos-heading">
			<h2 className="mb-8 font-bold text-3xl" id="projetos-heading">
				{t('projects.title')}
			</h2>
			<div className="relative flex items-center">
				<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-slate-1 to-transparent dark:from-slatedark-1" />
				<ul
					aria-label={t('projects.listAria')}
					className="flex w-full gap-4 overflow-hidden py-4"
				>
					{orderOfProjects.map((projectOrder) => {
						const project = projectsList[projectOrder];
						return <ProjectCard key={project.slug} project={project} />;
					})}
				</ul>
				<button
					aria-label={t('projects.nextAria')}
					className="-translate-y-1/2 absolute top-1/2 right-0 z-20 rounded-full bg-sky-3 px-2 py-1 text-sky-12 shadow hover:bg-sky-4 dark:bg-skydark-3 dark:text-skydark-12 dark:hover:bg-skydark-4"
					onClick={next}
					type="button"
				>
					<svg
						aria-label={t('projects.nextAria')}
						fill="none"
						height="24"
						role="img"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>{t('projects.next')}</title>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</button>
			</div>
		</section>
	);
}
