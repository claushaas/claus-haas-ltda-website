import { Link } from 'react-router';
import Face from '~/assets/images/face.svg?react';
import { useIsBot } from '~/hooks/use-is-bot';
import ProjectGallery from '../ui/layouts/projects-gallery';
import type { Route } from './+types/home';

export function meta({ data }: Route.MetaArgs) {
	return [
		{ title: 'Claus Haas Ltda.' },
		{ content: 'Bem-vind@ ao meu website', name: 'description' },
		{
			content: data.colorScheme === 'dark' ? '#111113' : '#fcfcfd',
			name: 'theme-color',
		},
	];
}

export const loader = ({ request }: Route.LoaderArgs) => {
	const colorScheme = request.headers.get('sec-ch-prefers-color-scheme');

	return {
		colorScheme: colorScheme ?? 'dark',
	};
};

export default function Home() {
	const isBot = useIsBot();

	return (
		<>
			<header className="my-16 flex flex-wrap gap-4 md:h-96 md:flex-nowrap">
				<div className="flex w-full justify-center md:justify-start">
					<Face className="h-full w-fit fill-sky-12 stroke-2 stroke-sky-11 dark:fill-skydark-11 dark:stroke-skydark-10" />
				</div>
				<div className="flex w-full flex-col justify-between">
					<div className="flex flex-col items-end">
						<h1 className="font-default text-9xl text-shadow-sky-12 text-shadow-xs dark:text-shadow-skydark-12">
							Claus
						</h1>
						<h1 className="text-9xl text-shadow-sky-12 text-shadow-xs dark:text-shadow-skydark-12">
							Haas
						</h1>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-2xl">Fullstack Developer</p>
						<p className="text-2xl">Automation Expert</p>
						<p className="text-2xl">CRM Specialist</p>
					</div>
				</div>
			</header>
			<main>
				{/* Sobre / Resumo Profissional */}
				<section>
					<h2 className="mb-2 font-bold text-3xl">Sobre</h2>
					<p className="max-w-2xl text-lg text-sky-11 dark:text-skydark-11">
						Desenvolvedor fullstack com experiência em plataformas web,
						automação e integrações de marketing digital. Atuação em projetos de
						grande escala, liderança e inovação em ambientes educacionais e
						corporativos.
					</p>
				</section>

				{/* Skills & Tecnologias */}
				<section>
					<h2 className="mb-2 font-bold text-3xl">Skills & Tecnologias</h2>
					<div className="flex flex-wrap gap-2">
						{[
							'HTML',
							'CSS',
							'JavaScript',
							'TypeScript',
							'React.js',
							'React Router',
							'React Native',
							'Expo',
							'Expo Router',
							'Remix.Js',
							'Node',
							'Docker',
							'Git',
							'MySQL',
							'Postgres',
							'Vite',
							'AWS',
							'SES',
							'Wordpress',
							'Mautic',
							'InfusionSoft',
							'Thrive Themes',
							'Elementor',
							'Motion',
							'Zapier',
							'Biome',
						].map((skill) => (
							<span
								className="rounded-md bg-sky-3 px-3 py-1 font-medium text-sky-12 text-sm shadow-slate-8 shadow-xs dark:bg-skydark-3 dark:text-skydark-12 dark:shadow-slate-8"
								key={skill}
							>
								{skill}
							</span>
						))}
					</div>
				</section>

				{/* Projetos */}
				<ProjectGallery />
			</main>
			<footer className="mb-0 border-slate-2 border-t-2 py-16 dark:border-slatedark-2">
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
