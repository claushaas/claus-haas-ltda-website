import { Link } from 'react-router';
import { useIsBot } from '~/hooks/use-is-bot';
import Face from '~/ui/components/face';
import { skills } from '../content/skills/skills';
import { SkillBadge } from '../ui/components/skill-badge';
import ProjectGallery from '../ui/layouts/projects-gallery';

export const meta = () => {
	return [
		{ title: 'Claus Haas Ltda.' },
		{ content: 'Bem-vind@ ao meu website', name: 'description' },
	];
};

export default function Home() {
	const isBot = useIsBot();

	return (
		<>
			<header
				className="my-16 flex flex-wrap gap-4 md:h-96 md:flex-nowrap"
				id="header"
			>
				<div className="flex w-full justify-center md:justify-start">
					<Face className="max-h-56 sm:max-h-none" />
				</div>
				<div className="flex w-full flex-col justify-between">
					<div className="flex flex-col items-end">
						<h1 className="text-right font-default text-9xl">
							Claus
							<span className="block">Haas</span>
						</h1>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-2xl">Fullstack Developer</p>
						<p className="text-2xl">Automation Expert</p>
						<p className="text-2xl">CRM Specialist</p>
						<PrideFlag className="size-8" />
					</div>
				</div>
			</header>
			<main id="main-content" tabIndex={-1}>
				{/* Sobre / Resumo Profissional */}
				<section aria-labelledby="sobre-heading" id="about">
					<h2 className="mb-2 font-bold text-3xl">Sobre</h2>
					<p className="max-w-2xl text-lg text-sky-11 dark:text-skydark-11">
						Desenvolvedor fullstack com experiência em plataformas web,
						automação e integrações de marketing digital. Atuação em projetos de
						grande escala, liderança e inovação em ambientes educacionais e
						corporativos.
					</p>
				</section>

				{/* Skills & Tecnologias */}
				<section aria-labelledby="skills-heading" id="skills">
					<h2 className="mb-2 font-bold text-3xl">Skills & Tecnologias</h2>
					<div className="flex flex-wrap gap-4">
						{skills.map((skill) => (
							<SkillBadge key={skill} skill={skill} />
						))}
					</div>
				</section>

				{/* Projetos */}
				<section aria-labelledby="projetos-heading" id="projects">
					<ProjectGallery />
				</section>
			</main>
			<footer
				className="mb-0 border-slate-2 border-t-2 py-16 dark:border-slatedark-2"
				id="footer"
			>
				<p className="text-center">
					Todos os direitos reservados - {new Date().getFullYear()} - Claus Haas
					Ltda.
					{!isBot && ' - CNPJ 59.586.732/0001-58'}
				</p>
				{!isBot && (
					<p className="text-center">
						<Link
							className="text-sky-8 underline underline-offset-2 hover:opacity-80 dark:text-skydark-8"
							to={'mailto:contact@claushaas.dev'}
						>
							contact@claushaas.dev
						</Link>
					</p>
				)}
			</footer>
		</>
	);
}
