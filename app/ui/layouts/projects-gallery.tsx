import { useState } from 'react';
import { getAllProjects } from '~/content/projects';
import ProjectCard from '../components/project-card';

export default function ProjetosSection() {
	const projectsList = getAllProjects();
	const [orderOfProjects, setOrderOfProjects] = useState(
		projectsList.map((_, index) => index),
	);
	const slideWidth = 360;

	const next = () => {
		setOrderOfProjects((prev) => {
			const [first, ...rest] = prev;
			return [...rest, first];
		});
	};

	return (
		<section aria-labelledby="projetos-heading">
			<h2 className="mb-2 font-bold text-3xl" id="projetos-heading">
				Projetos
			</h2>
			<div className="relative flex items-center">
				<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-slate-1 to-transparent dark:from-slatedark-1" />
				<ul
					aria-label="Lista de projetos"
					className="flex w-full gap-4 overflow-hidden py-4"
				>
					{orderOfProjects.map((projectOrder) => {
						const project = projectsList[projectOrder];
						return (
							<ProjectCard
								key={project.slug}
								project={project}
								slideWidth={slideWidth}
							/>
						);
					})}
				</ul>
				<button
					aria-label="Próximo projeto"
					className="-translate-y-1/2 absolute top-1/2 right-0 z-20 rounded-full bg-sky-3 px-2 py-1 text-sky-12 shadow hover:bg-sky-4 dark:bg-skydark-3 dark:text-skydark-12 dark:hover:bg-skydark-4"
					onClick={next}
					type="button"
				>
					<svg
						aria-label="Próximo"
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
						<title>Próximo</title>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</button>
			</div>
		</section>
	);
}
