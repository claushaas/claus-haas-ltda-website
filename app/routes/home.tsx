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
				className="my-4 flex flex-wrap gap-4 sm:mt-16 sm:mb-24 sm:flex-nowrap md:h-96"
				id="header"
			>
				<div className="mb-4 flex w-full justify-center sm:mb-0 md:justify-start">
					<Face className="max-h-56 w-fit sm:max-h-none" />
				</div>
				<div className="flex w-full flex-col justify-between">
					<div className="flex flex-col items-end">
						<h1 className="text-right font-default text-6xl sm:text-8xl">
							Claus
							<span className="block">Haas</span>
						</h1>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-right text-xl sm:text-2xl">
							Fullstack Developer
							<span className="block">Automation Expert</span>
							<span className="block">CRM Specialist</span>
						</p>
					</div>
				</div>
			</header>
			<main id="main-content" tabIndex={-1}>
				<section aria-labelledby="about-heading" id="about">
					<div className="mb-20">
						<h2 className="mt-20 mb-8 font-bold text-3xl">
							Transformando ideias em soluções digitais com estratégia, código e
							visão de negócio
						</h2>

						<p>
							Sou <strong>Claus Haas</strong> — desenvolvedor full-stack,
							especialista em infraestrutura em nuvem e automação de sistemas.
							Há mais de 12 anos, ajudo empresas a romperem a barreira entre{' '}
							<em>ter tecnologia</em> e{' '}
							<em>usá-la com inteligência estratégica</em>.
						</p>

						<p>
							Minha motivação principal é simples e poderosa:{' '}
							<strong>ver as coisas funcionando como foram idealizadas</strong>.
							Enquanto muitos se frustram tentando transformar ideias em
							sistemas viáveis, eu entro em cena para{' '}
							<strong>traduzir visão em estrutura</strong>, eliminar gargalos e
							acelerar o crescimento.
						</p>

						<p>
							Mais do que escrever código, meu trabalho é{' '}
							<strong>entender o coração do seu negócio</strong> e transformá-lo
							em sistemas eficientes, interfaces intuitivas e fluxos
							automatizados que realmente fazem diferença. Cada linha de código
							tem propósito. Cada automação tem impacto. Cada sistema que
							construo entrega o que toda empresa busca:{' '}
							<strong>eficiência, controle e escalabilidade real</strong>.
						</p>
					</div>

					<div className="mb-20">
						<h3 className="mb-8 font-semibold text-2xl">
							O que eu faço na prática:
						</h3>
						<ul className="list-inside list-disc">
							<li>Desenvolvo aplicações robustas com React, Node.js e AWS.</li>
							<li>
								Integro CRMs como Mautic, Infusionsoft, RD Station e HubSpot com
								automações que economizam tempo e aumentam conversão.
							</li>
							<li>
								Automatizo vendas, atendimento e jornadas de e-mail, eliminando
								tarefas manuais.
							</li>
							<li>
								Conecto ferramentas díspares e entrego plataformas que funcionam
								— na prática, não só na teoria.
							</li>
							<li>
								Desenho arquiteturas escaláveis com foco em performance e
								crescimento sustentável.
							</li>
						</ul>
					</div>

					<div className="mb-20">
						<h3 className="mb-8 font-semibold text-2xl">
							Experiência comprovada
						</h3>
						<p>
							Já liderei o desenvolvimento de{' '}
							<strong>plataformas com mais de 70 mil usuários ativos</strong>,
							integrando sistemas de pagamento, CRM, e-mail marketing e
							notificações em um ecossistema digital eficiente. Trabalhei com
							ferramentas como React, Supabase, WordPress, Mautic, Infusionsoft,
							RD Station, TypeScript, Next.js, AWS e outras — sempre com foco na{' '}
							<strong>estratégia por trás da tecnologia</strong>.
						</p>
					</div>

					<div className="mb-20">
						<h3 className="mb-8 font-semibold text-2xl">Quando me procuram?</h3>
						<ul className="list-inside list-disc">
							<li>Quando é necessário integrar sistemas que não conversam.</li>
							<li>Quando os processos manuais estão travando a operação.</li>
							<li>Quando os dados precisam virar decisões — não planilhas.</li>
							<li>
								Quando é hora de entregar com precisão, clareza e performance.
							</li>
						</ul>
					</div>

					<div className="mb-20">
						<h3 className="mb-8 font-semibold text-2xl">O que me move:</h3>
						<ul className="list-inside list-disc">
							<li>Criar aplicações que vendem, escalam e encantam.</li>
							<li>
								Automatizar o que atrasa, conectar o que está solto e dar vida
								aos dados.
							</li>
							<li>
								Fazer a tecnologia trabalhar para o negócio — e não o contrário.
							</li>
						</ul>
					</div>

					<div className="mb-20">
						<h3 className="mb-8 font-semibold text-2xl">
							A tecnologia certa, no lugar certo, muda tudo.
						</h3>
						<p>
							Se sua operação ainda depende de improvisos e processos manuais,
							talvez o que falte não seja esforço — mas{' '}
							<strong>estrutura certa, pensada do jeito certo</strong>. Meu
							papel é construir essa estrutura. E fazer sua empresa respirar
							aliviada.
						</p>

						<p>
							Seja qual for o tamanho da sua ideia, ela merece virar realidade.
							Com estratégia, eficiência e tecnologia de verdade.
						</p>
					</div>

					<div className="mb-20">
						<p className="font-semibold text-lg">
							{'Vamos conversar && () =>'}
							{!isBot && (
								<a
									aria-label="Enviar email para contact@claushaas.dev"
									className="ml-2 text-sky-8 underline underline-offset-2 hover:opacity-80 dark:text-skydark-8"
									href="mailto:contact@claushaas.dev"
								>
									contact@claushaas.dev
								</a>
							)}
						</p>
					</div>
				</section>

				{/* Skills & Tecnologias */}
				<section aria-labelledby="skills-heading" id="skills">
					<h2 className="mb-8 font-bold text-3xl">Skills & Tecnologias</h2>
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
			</footer>
		</>
	);
}
