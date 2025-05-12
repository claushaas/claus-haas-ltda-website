import { getAllProjects } from '~/projects';

export default function ProjetosSection() {
	const projetos = getAllProjects();
	return (
		<section>
			<h2 className="mb-2 font-bold text-3xl">Projetos</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projetos.map((project) => (
					<div
						className="rounded-3xl bg-sky-2 p-4 shadow-slate-8 shadow-xs dark:bg-skydark-2 dark:shadow-slatedark-8"
						key={project.slug}
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
					</div>
				))}
			</div>
		</section>
	);
}
