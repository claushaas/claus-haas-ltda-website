import { motion } from 'motion/react';
import { useGlobalState } from '~/state/global-state';

interface SkillBadgeProps {
	skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
	const { motionMode } = useGlobalState();
	const shouldReduceMotion = motionMode === 'reduced';

	return (
		<motion.span
			className="cursor-grab rounded-md bg-sky-3 px-3 py-1 font-medium text-sky-12 text-sm shadow-slate-8 shadow-xs transition-colors active:cursor-grabbing hover:bg-sky-4 dark:bg-skydark-3 dark:text-skydark-12 dark:shadow-slate-8 dark:hover:bg-skydark-4"
			transition={{
				duration: shouldReduceMotion ? 0 : 0.18,
				ease: 'easeInOut',
				type: 'tween',
			}}
			whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
		>
			{skill}
		</motion.span>
	);
}
