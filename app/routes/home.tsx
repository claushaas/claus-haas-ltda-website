import { useTranslation } from 'react-i18next';
import { useIsBot } from '~/hooks/use-is-bot';
import Face from '~/ui/components/face';
import { LanguageSwitcher } from '~/ui/components/language-switcher';
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
	const { t } = useTranslation();

	return (
		<>
			<header
				className="mb-0 flex flex-col items-center justify-items-start"
				id="header"
			>
				<div className="px-16 py-4">
					<LanguageSwitcher />
				</div>
				<div className="mt-4 flex w-full flex-wrap gap-4 sm:mt-16 sm:flex-nowrap md:h-96">
					<div className="mb-4 flex w-full justify-center sm:mb-0 md:justify-start">
						<Face className="max-h-56 w-fit sm:max-h-none" />
					</div>
					<div className="m-auto flex w-fit flex-col sm:w-full sm:justify-between">
						<div className="flex flex-col items-end">
							<h1 className="text-right font-default text-5xl sm:text-8xl">
								Claus
								<span className="sm:block"> Haas</span>
							</h1>
						</div>
						<div className="flex flex-col items-end">
							<p className="text-right text-xl sm:text-2xl">
								{t('home.role1')}
								<span className="block">{t('home.role2')}</span>
								<span className="block">{t('home.role3')}</span>
							</p>
						</div>
					</div>
				</div>
			</header>
			<main id="main-content" tabIndex={-1}>
				<section aria-labelledby="about-heading" id="about">
					<div className="mb-10 sm:mb-20">
						<h2 className="mt-10 mb-4 font-bold text-xl sm:mt-20 sm:mb-8 sm:text-3xl">
							{t('home.aboutTitle')}
						</h2>

						<p>{t('home.about1')}</p>

						<p>{t('home.about2')}</p>

						<p>{t('home.about3')}</p>

						<p>{t('home.about4')}</p>
					</div>

					<div className="mb-10 sm:mb-20">
						<h3 className="mb-4 font-semibold text-lg sm:mb-8 sm:text-2xl">
							{t('home.whatIDoTitle')}
						</h3>
						<ul className="list-inside list-disc">
							<li>{t('home.whatIDo1')}</li>
							<li>{t('home.whatIDo2')}</li>
							<li>{t('home.whatIDo3')}</li>
							<li>{t('home.whatIDo4')}</li>
							<li>{t('home.whatIDo5')}</li>
						</ul>
					</div>

					<div className="mb-10 sm:mb-20">
						<h3 className="mb-4 font-semibold text-lg sm:mb-8 sm:text-2xl">
							{t('home.experienceTitle')}
						</h3>
						<p>{t('home.experience')}</p>
					</div>

					<div className="mb-10 sm:mb-20">
						<h3 className="mb-4 font-semibold text-lg sm:mb-8 sm:text-2xl">
							{t('home.whenTitle')}
						</h3>
						<ul className="list-inside list-disc">
							<li>{t('home.when1')}</li>
							<li>{t('home.when2')}</li>
							<li>{t('home.when3')}</li>
							<li>{t('home.when4')}</li>
						</ul>
					</div>

					<div className="mb-10 sm:mb-20">
						<h3 className="mb-4 font-semibold text-lg sm:mb-8 sm:text-2xl">
							{t('home.motivationTitle')}
						</h3>
						<ul className="list-inside list-disc">
							<li>{t('home.motivation1')}</li>
							<li>{t('home.motivation2')}</li>
							<li>{t('home.motivation3')}</li>
						</ul>
					</div>

					<div className="mb-10 sm:mb-20">
						<h3 className="mb-4 font-semibold text-lg sm:mb-8 sm:text-2xl">
							{t('home.techRightTitle')}
						</h3>
						<p>{t('home.techRight1')}</p>

						<p>{t('home.techRight2')}</p>
					</div>

					<div className="mb-10 sm:mb-20">
						<p className="font-semibold text-lg">
							{t('home.letsTalk')}
							{!isBot && (
								<a
									aria-label={t('home.emailAria')}
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
					<h2
						className="mb-8 font-bold text-xl sm:text-3xl"
						id="skills-heading"
					>
						{t('home.skillsTitle')}
					</h2>
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
					{t('home.footer', { year: new Date().getFullYear() })}
					{!isBot && t('home.footerCnpj')}
				</p>
			</footer>
		</>
	);
}
