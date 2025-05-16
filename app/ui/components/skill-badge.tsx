import { motion } from 'motion/react';

interface SkillBadgeProps {
	skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
	return (
		<motion.span
			className="rounded-md bg-sky-3 px-3 py-1 font-medium text-sky-12 text-sm shadow-slate-8 shadow-xs dark:bg-skydark-3 dark:text-skydark-12 dark:shadow-slate-8"
			onMouseEnter={(e) => {
				const isDark = window.matchMedia(
					'(prefers-color-scheme: dark)',
				).matches;
				e.currentTarget.style.backgroundColor = isDark ? '#113555' : '#d1f0fa';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = '';
			}}
			transition={{
				damping: 20,
				duration: 0.18,
				stiffness: 300,
				type: 'spring',
			}}
			whileHover={{
				scale: 1.08,
			}}
		>
			{skill}
		</motion.span>
	);
}
