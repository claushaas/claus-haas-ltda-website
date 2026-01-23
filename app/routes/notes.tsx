import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { notes as notesEn } from '~/content-index/notes.en';
import { notes as notesPt } from '~/content-index/notes.pt';
import { useGlobalState } from '~/state/global-state';

type LangParam = 'en' | 'pt';

const getNotesByLang = (lang: LangParam) => (lang === 'pt' ? notesPt : notesEn);

export default function NotesRoute() {
	const { lang } = useParams();
	const resolvedLang = lang === 'pt' ? 'pt' : 'en';
	const notes = getNotesByLang(resolvedLang);
	const { t } = useTranslation('routes');
	const { setLoadState } = useGlobalState();

	useEffect(() => {
		setLoadState(notes.length === 0 ? 'empty' : 'ready');
	}, [notes.length, setLoadState]);

	return (
		<main className="page">
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{t('notes.title')}</h1>
					<p className="t-body">{t('notes.description')}</p>
				</header>

				<section className="stack-sm">
					{notes.length === 0 ? (
						<p className="t-body">{t('notes.empty')}</p>
					) : (
						notes.map((note) => (
							<a
								className="stack-xs"
								href={`/${resolvedLang}/notes/${note.slug}`}
								key={note.slug}
							>
								<div className="t-body">{note.title}</div>
								{note.date ? <div className="t-meta">{note.date}</div> : null}
							</a>
						))
					)}
				</section>

				<footer className="t-meta">
					{t('footer', { year: new Date().getFullYear() })}
				</footer>
			</div>
		</main>
	);
}
