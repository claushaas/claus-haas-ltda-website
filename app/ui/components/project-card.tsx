import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type Project = {
	content?: string;
	slug: string;
	title?: string;
	link?: string;
	technologies?: string[];
	description?: string;
	highlights?: string[];
};

type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	const { t } = useTranslation();
	return (
		<motion.li
			className="max-w-[80%] flex-shrink-0 rounded-3xl bg-sky-2 p-6 shadow-slate-8 shadow-sm sm:w-96 sm:max-w-none dark:bg-skydark-2 dark:shadow-slatedark-8"
			key={project.slug}
			layout
			transition={{ duration: 0.4, type: 'tween' }}
		>
			{project.title && (
				<h3 className="mt-0 mb-1 font-semibold text-xl sm:mt-0">
					{project.title}
				</h3>
			)}
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
					aria-label={t('project.seeMoreAria', { title: project.title })}
					className="text-sky-10 underline hover:opacity-80"
					href={project.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{t('project.seeMore')}
				</a>
			) : (
				<span className="cursor-not-allowed text-sky-10 underline opacity-60">
					{t('project.seeMore')}
				</span>
			)}
		</motion.li>
	);
}
