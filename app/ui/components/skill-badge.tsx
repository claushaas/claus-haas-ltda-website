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
			className="cursor-grab px-3 py-1 font-medium text-sm active:cursor-grabbing"
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
