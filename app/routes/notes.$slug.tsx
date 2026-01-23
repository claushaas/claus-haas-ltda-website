import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { notes as notesEn } from '~/content-index/notes.en';
import { notes as notesPt } from '~/content-index/notes.pt';
import { useGlobalState } from '~/state/global-state';

const modules = import.meta.glob('../content/mdx/*/notes/*.mdx');

type LangParam = 'en' | 'pt';

type NoteMeta = {
	slug: string;
	title: string;
	date?: string;
	summary?: string;
};

const getNotesByLang = (lang: LangParam) => (lang === 'pt' ? notesPt : notesEn);

const resolveModulePath = (lang: LangParam, slug: string) =>
	`../content/mdx/${lang}/notes/${slug}.mdx`;

export default function NoteDetailRoute() {
	const { lang, slug } = useParams();
	const resolvedLang = lang === 'pt' ? 'pt' : 'en';
	const noteSlug = slug ?? '';
	const notes = getNotesByLang(resolvedLang);
	const { t } = useTranslation('routes');
	const { setLoadState } = useGlobalState();

	const note = useMemo<NoteMeta | undefined>(
		() => notes.find((entry) => entry.slug === noteSlug),
		[notes, noteSlug],
	);

	const [MdxComponent, fallback] = useMemo(() => {
		const key = resolveModulePath(resolvedLang, noteSlug);
		const loader = modules[key];
		if (!loader) {
			return [null, t('notes.notFound')] as const;
		}

		return [loader, null] as const;
	}, [noteSlug, resolvedLang, t]);

	useEffect(() => {
		if (!note || !MdxComponent) {
			setLoadState('error');
			return;
		}
		setLoadState('ready');
	}, [MdxComponent, note, setLoadState]);

	if (!MdxComponent || !note) {
		return (
			<main>
				<div
					className="reading section stack-lg"
					id="main-content"
					tabIndex={-1}
				>
					<header className="stack-sm">
						<h1 className="t-heading">{t('notes.title')}</h1>
						<p className="t-body">{fallback ?? t('notes.notFound')}</p>
					</header>
				</div>
			</main>
		);
	}

	const NoteContent = MdxComponent as unknown as React.ComponentType;

	return (
		<main>
			<div className="reading section stack-lg" id="main-content" tabIndex={-1}>
				<header className="stack-sm">
					<h1 className="t-heading">{note.title}</h1>
					{note.summary ? <p className="t-body">{note.summary}</p> : null}
					{note.date ? <p className="t-meta">{note.date}</p> : null}
				</header>

				<article className="stack-lg">
					<NoteContent />
				</article>
			</div>
		</main>
	);
}
