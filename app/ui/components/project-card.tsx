import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '~/state/global-state';

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
	const { motionMode } = useGlobalState();
	const shouldReduceMotion = motionMode === 'reduced';

	return (
		<motion.li
			className="max-w-[80%] shrink-0 p-6 sm:w-98 sm:max-w-none"
			key={project.slug}
			layout={!shouldReduceMotion}
			transition={{
				duration: shouldReduceMotion ? 0 : 0.24,
				ease: 'easeInOut',
				type: 'tween',
			}}
		>
			{project.title && (
				<h3 className="mt-0 mb-1 sm:mt-0">{t(project.title)}</h3>
			)}
			{project.description && <p className="mb-2">{t(project.description)}</p>}
			{project.technologies && project.technologies.length > 0 && (
				<div className="mb-2 flex flex-wrap gap-2">
					{project.technologies.map((tec) => (
						<span className="px-2 py-0.5" key={tec}>
							{tec}
						</span>
					))}
				</div>
			)}
			{project.highlights && project.highlights.length > 0 && (
				<ul className="mb-2 list-disc pl-5">
					{project.highlights.map((highlight) => (
						<li key={highlight}>{t(highlight)}</li>
					))}
				</ul>
			)}
			{project.link ? (
				<a
					aria-label={t('project.seeMoreAria', {
						title: t(project.title ?? ''),
					})}
					className="underline hover:opacity-80"
					href={project.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{t('project.seeMore')}
				</a>
			) : (
				<span className="cursor-not-allowed underline opacity-60">
					{t('project.seeMore')}
				</span>
			)}
		</motion.li>
	);
}
