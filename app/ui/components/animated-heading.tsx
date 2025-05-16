import { motion, useAnimation } from 'motion/react';
import type React from 'react';
import type { ReactNode } from 'react';

interface AnimatedHeadingProps {
	tag?: keyof React.JSX.IntrinsicElements;
	children: ReactNode;
	className?: string;
}

const gradient = 'linear-gradient(110deg,#D4D4D8,45%,#27272A,55%,#D4D4D8)';

export function AnimatedHeading({
	children,
	className = '',
}: AnimatedHeadingProps) {
	const controls = useAnimation();

	return (
		<motion.h1
			animate={controls}
			className={className}
			onHoverEnd={() => {
				controls.start({
					backgroundPosition: '0% 0%',
					transition: {
						backgroundPosition: { duration: 0.5, ease: 'easeInOut' },
					},
				});
			}}
			onHoverStart={() => {
				controls.start({
					backgroundPosition: ['0% 0%', '-200% 0%'],
					transition: {
						backgroundPosition: {
							duration: 2.2,
							ease: 'linear',
							repeat: Infinity,
						},
					},
				});
			}}
			style={{
				backgroundClip: 'text',
				backgroundImage: gradient,
				backgroundPosition: '0% 0%',
				backgroundSize: '250% 100%',
				color: 'transparent',
				display: 'inline-block',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
			}}
		>
			{children}
		</motion.h1>
	);
}
