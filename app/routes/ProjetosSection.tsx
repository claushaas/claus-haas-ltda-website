import ReactMarkdown from 'react-markdown';
import { getAllProjects } from '~/projects';

export default function ProjetosSection() {
	const projetos = getAllProjects();
	return (
		<section>
			<h2 className="mb-2 font-bold text-3xl">Projetos</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{projetos.map((projeto) => (
					<div
						key={projeto.slug}
						className="rounded-lg border border-sky-4 bg-sky-2 p-4 shadow dark:border-skydark-4 dark:bg-skydark-2"
					>
						<h3 className="mb-1 font-semibold text-xl">{projeto.title}</h3>
						<div className="mb-2 text-sky-11 dark:text-skydark-11">
							<ReactMarkdown>{projeto.content}</ReactMarkdown>
						</div>
						{projeto.link ? (
							<a
								href={projeto.link}
								className="text-sky-10 underline hover:opacity-80"
								target="_blank"
								rel="noopener noreferrer"
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
