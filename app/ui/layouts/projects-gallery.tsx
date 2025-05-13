import { motion } from 'motion/react';
import { useState } from 'react';
import { getAllProjects } from '~/projects';

export default function ProjetosSection() {
	const projectsList = getAllProjects();
	const [orderOfProjects, setOrderOfProjects] = useState(
		projectsList.map((_, index) => index),
	);
	const slideWidth = 360;

	function next() {
		setOrderOfProjects((prev) => {
			const [first, ...rest] = prev;
			return [...rest, first];
		});
	}

	return (
		<section>
			<h2 className="mb-2 font-bold text-3xl">Projetos</h2>
			<div className="relative flex items-center">
				<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-slate-1 to-transparent dark:from-slatedark-1" />
				<ul className="flex w-full gap-4 overflow-hidden py-4">
					{orderOfProjects.map((projectOrder) => {
						const project = projectsList[projectOrder];

						return (
							<motion.li
								key={project.slug}
								layout
								transition={{ duration: 0.4, type: 'tween' }}
								className="flex-shrink-0 rounded-3xl bg-sky-2 p-4 shadow-slate-8 shadow-xs dark:bg-skydark-2 dark:shadow-slatedark-8"
								style={{ width: slideWidth }}
							>
								<h3 className="mb-1 font-semibold text-xl">{project.title}</h3>
								{project.description && (
									<p className="mb-2 text-sky-11 dark:text-skydark-11">
										{project.description}
									</p>
								)}
								{project.technologies && project.technologies.length > 0 && (
									<div className="mb-2 flex flex-wrap gap-2">
										{project.technologies.map((tec) => (
											<span
												className="rounded bg-sky-3 px-2 py-0.5 text-sky-12 text-xs dark:bg-skydark-3 dark:text-skydark-12"
												key={tec}
											>
												{tec}
											</span>
										))}
									</div>
								)}
								{project.highlights && project.highlights.length > 0 && (
									<ul className="mb-2 list-disc pl-5 text-sky-11 dark:text-skydark-11">
										{project.highlights.map((destaque) => (
											<li key={destaque}>{destaque}</li>
										))}
									</ul>
								)}
								{project.link ? (
									<a
										className="text-sky-10 underline hover:opacity-80"
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
									>
										Ver mais
									</a>
								) : (
									<span className="cursor-not-allowed text-sky-10 underline opacity-60">
										Ver mais
									</span>
								)}
							</motion.li>
						);
					})}
				</ul>
				<button
					type="button"
					className="-translate-y-1/2 absolute top-1/2 right-0 z-20 rounded-full bg-sky-3 px-2 py-1 text-sky-12 shadow hover:bg-sky-4 dark:bg-skydark-3 dark:text-skydark-12 dark:hover:bg-skydark-4"
					onClick={next}
					aria-label="Next"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-label="Next"
					>
						<title>Next</title>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</button>
			</div>
		</section>
	);
}
