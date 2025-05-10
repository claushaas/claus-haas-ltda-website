import Face from '../../public/images/face.svg?react';

export function meta() {
	return [
		{ title: 'New React Router App' },
		{ content: 'Welcome to React Router!', name: 'description' },
	];
}

export default function Home() {
	return (
		<main className="m-auto max-w-4xl space-y-16 px-4 py-8">
			{/* Apresentação */}
			<section className="flex flex-wrap gap-4 md:h-96 md:flex-nowrap">
				<div className="flex w-full justify-center md:justify-start">
					<Face className="h-full w-fit fill-sky-12 stroke-2 stroke-sky-11 dark:fill-skydark-11 dark:stroke-skydark-10" />
				</div>
				<div className="flex w-full flex-col justify-between">
					<div className="flex flex-col items-end">
						<h1 className="text-9xl text-shadow-md text-shadow-sky-12 dark:text-shadow-skydark-12">
							Claus
						</h1>
						<h1 className="text-9xl text-shadow-md text-shadow-sky-12 dark:text-shadow-skydark-12">
							Haas
						</h1>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-2xl">Fullstack Developer</p>
						<p className="text-2xl">Automation Expert</p>
						<p className="text-2xl">CRM Specialist</p>
					</div>
				</div>
			</section>

			{/* Sobre / Resumo Profissional */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Sobre</h2>
				<p className="max-w-2xl text-lg text-sky-11 dark:text-skydark-11">
					Desenvolvedor fullstack com experiência em plataformas web, automação
					e integrações de marketing digital. Atuação em projetos de grande
					escala, liderança e inovação em ambientes educacionais e corporativos.
				</p>
			</section>

			{/* Experiência Profissional */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Experiência</h2>
				<ul className="space-y-4">
					<li>
						<strong>Full-Stack Dev — Yoga em Movimento</strong>{' '}
						<span className="text-sky-10">2016 - presente</span>
						<p className="text-sky-11 dark:text-skydark-11">
							Desenvolvimento e manutenção da plataforma online de yoga,
							integrações com CRMs, automação de marketing e serviços de
							mensagens. Plataforma com mais de 70 mil alunos.
						</p>
					</li>
					<li>
						<strong>Founder e CEO — SwáSthya Yoga - Ribeirão Preto</strong>{' '}
						<span className="text-sky-10">2010 - 2016</span>
						<p className="text-sky-11 dark:text-skydark-11">
							Fundador da escola, responsável por estratégias de marketing
							digital pioneiras no segmento. Venda da escola em 2016.
						</p>
					</li>
					<li>
						<strong>Yoga Teacher — SwáSthya Yoga - São Bernardo</strong>{' '}
						<span className="text-sky-10">2005 - 2019</span>
						<p className="text-sky-11 dark:text-skydark-11">
							Aulas práticas e teóricas de yoga para alunos em escolas e
							academias.
						</p>
					</li>
					<li>
						<strong>Accounting Analyst — Volkswagen do Brasil</strong>{' '}
						<span className="text-sky-10">2000 - 2005</span>
						<p className="text-sky-11 dark:text-skydark-11">
							Consolidação de dados financeiros do grupo, relatórios executivos
							e integração com matriz na Alemanha.
						</p>
					</li>
				</ul>
			</section>

			{/* Educação */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Educação</h2>
				<ul className="space-y-2">
					<li>
						<strong>Full-Stack Web Development</strong> — Trybe{' '}
						<span className="text-sky-10">2023 - 2024</span>
					</li>
					<li>
						<strong>Yoga Instructor</strong> — Universidade do Yoga{' '}
						<span className="text-sky-10">2004 - 2005</span>
					</li>
					<li>
						<strong>Business Management</strong> — Colégio Humboldt{' '}
						<span className="text-sky-10">1999 - 2000</span>
					</li>
				</ul>
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
						'Python',
						'Kotlin',
						'React.js',
						'React Router',
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
					].map((skill) => (
						<span
							className="rounded bg-sky-3 px-3 py-1 font-medium text-sky-12 text-sm dark:bg-skydark-3 dark:text-skydark-12"
							key={skill}
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Projetos */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Projetos</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{/* Exemplo de card de projeto. Substitua/adicione seus projetos reais aqui. */}
					<div className="rounded-lg border border-sky-4 bg-sky-2 p-4 shadow dark:border-skydark-4 dark:bg-skydark-2">
						<h3 className="mb-1 font-semibold text-xl">Nome do Projeto</h3>
						<p className="mb-2 text-sky-11 dark:text-skydark-11">
							Breve descrição do projeto, tecnologias utilizadas, desafios e
							resultados.
						</p>
						<span className="cursor-not-allowed text-sky-10 underline opacity-60">
							Ver mais
						</span>
					</div>
					{/* Adicione mais cards conforme necessário */}
				</div>
			</section>

			{/* Certificações & Prêmios */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Certificações & Prêmios</h2>
				<ul className="space-y-2">
					<li>
						Leão de Ouro (Gold Lion) - União Nacional de Yoga{' '}
						<span className="text-sky-10">2008</span>
					</li>
					<li>
						Clean Code Highlight - Trybe{' '}
						<span className="text-sky-10">2023</span>
					</li>
					<li>
						Soft Skills Highlight - Leadership - Trybe{' '}
						<span className="text-sky-10">2023</span>
					</li>
					<li>
						GTD - Fundamentals <span className="text-sky-10">2018</span>
					</li>
					<li>
						GTD - Projects and Priorities{' '}
						<span className="text-sky-10">2018</span>
					</li>
					<li>
						Product Launch Formula - Erico Rocha{' '}
						<span className="text-sky-10">2015</span>
					</li>
				</ul>
			</section>

			{/* Idiomas */}
			<section>
				<h2 className="mb-2 font-bold text-3xl">Idiomas</h2>
				<ul className="space-y-2">
					<li>Português — Nativo</li>
					<li>Inglês — Avançado (LCCI Level 2 - 11/2000)</li>
				</ul>
			</section>
		</main>
	);
}
