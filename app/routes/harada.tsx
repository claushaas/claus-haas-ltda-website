import { isbot } from 'isbot';
import { useTranslation } from 'react-i18next';
import haradaIndex from '~/content/harada/index.json';
import schema from '~/content/harada/schema.json';
import { detectLanguage, type SupportedLanguage } from '~/i18n/i18n';
import type { Route } from './+types/harada';

type LocalizedText = { en: string; pt: string };

type HaradaContent = {
	actions: LocalizedText[][];
	goal: LocalizedText;
	meta: {
		period: string;
		title: LocalizedText;
		updatedAt: string;
	};
	themes: LocalizedText[];
};

type CellRole = 'goal' | 'theme' | 'action';

type GridCell = {
	col: number;
	direction?: string;
	index?: number;
	role: CellRole;
	row: number;
	text: string;
};

type LoaderResponse = {
	grid: (GridCell | null)[][];
	goal: string;
	meta: {
		title: string;
		period: string;
		updatedAt: string;
	};
	themes: string[];
	version: string;
	language: SupportedLanguage;
};

const noIndexHeaders = {
	'X-Robots-Tag': 'noindex, nofollow, noarchive',
};

const withNoIndexHeaders = (init?: ResponseInit) => {
	return {
		...init,
		headers: {
			...noIndexHeaders,
			...(init?.headers ?? {}),
		},
	};
};

const themeLayouts = schema.layout.themes;
const actionPattern = schema.layout.actions.blockPattern;
const gridSize = {
	cols: schema.layout.grid.columns,
	rows: schema.layout.grid.rows,
};
const goalPosition = schema.layout.goal.position;

const isIsoDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);

const assertString = (value: unknown): value is string =>
	typeof value === 'string';

const resolveText = (text: LocalizedText, language: SupportedLanguage) =>
	text[language] ?? text.en ?? text.pt;

const haradaVersions = import.meta.glob('../content/harada/*.json', {
	eager: true,
});

const validateHarada = (data: HaradaContent) => {
	const validateText = (text: LocalizedText, label: string) => {
		if (!text || !assertString(text.en) || !assertString(text.pt)) {
			throw new Error(`${label} deve conter chaves 'pt' e 'en'.`);
		}
	};

	validateText(data.goal, 'Goal');

	if (
		!Array.isArray(data.themes) ||
		data.themes.length !== themeLayouts.length
	) {
		throw new Error('Themes devem ter exatamente 8 itens.');
	}

	data.themes.forEach((theme, index) => {
		validateText(theme, `Theme ${index + 1}`);
	});

	if (
		!Array.isArray(data.actions) ||
		data.actions.length !== schema.constraints.actionsPerTheme
	) {
		throw new Error('Actions devem ter 8 blocos, um por theme.');
	}

	data.actions.forEach((actionList, themeIndex) => {
		if (!Array.isArray(actionList)) {
			throw new Error(`Actions do theme ${themeIndex + 1} inválidas.`);
		}
		if (actionList.length !== schema.constraints.actionsPerTheme) {
			throw new Error(`Theme ${themeIndex + 1} deve ter exatamente 8 actions.`);
		}
		actionList.forEach((action, actionIndex) => {
			validateText(
				action,
				`Action ${actionIndex + 1} do theme ${themeIndex + 1}`,
			);
		});
	});

	if (!data.meta) {
		throw new Error('Meta é obrigatório.');
	}

	const { period, title, updatedAt } = data.meta;
	if (!assertString(period) || !assertString(updatedAt)) {
		throw new Error('Campos period e updatedAt devem ser strings.');
	}
	validateText(title, 'Meta.title');
	if (!isIsoDate(updatedAt)) {
		throw new Error(
			'Campo meta.updatedAt deve estar em formato ISO (YYYY-MM-DD).',
		);
	}
};

const ensureInsideGrid = (row: number, col: number) => {
	if (row < 0 || col < 0 || row >= gridSize.rows || col >= gridSize.cols) {
		throw new Error(`Posição fora do grid: (${row}, ${col}).`);
	}
};

const buildGrid = (
	data: HaradaContent,
	language: SupportedLanguage,
): (GridCell | null)[][] => {
	const grid: (GridCell | null)[][] = Array.from(
		{ length: gridSize.rows },
		() => Array.from({ length: gridSize.cols }, () => null),
	);

	const placeCell = (cell: GridCell) => {
		ensureInsideGrid(cell.row, cell.col);
		if (grid[cell.row]?.[cell.col]) {
			throw new Error(`Colisão no grid na posição (${cell.row}, ${cell.col}).`);
		}
		grid[cell.row][cell.col] = cell;
	};

	placeCell({
		col: goalPosition.col,
		role: 'goal',
		row: goalPosition.row,
		text: resolveText(data.goal, language),
	});

	themeLayouts.forEach((layout, index) => {
		const themeText = resolveText(data.themes[index], language);
		placeCell({
			col: layout.position.col,
			direction: layout.direction,
			index,
			role: 'theme',
			row: layout.position.row,
			text: themeText,
		});

		const actions = data.actions[index];
		const blockRows = layout.actionsBlock.rows;
		const blockCols = layout.actionsBlock.cols;
		const fillOrder = actionPattern.fillOrder;

		fillOrder.forEach(([rowOffset, colOffset], actionIndex) => {
			const row = blockRows[rowOffset];
			const col = blockCols[colOffset];
			const actionText = resolveText(actions[actionIndex], language);
			placeCell({
				col,
				direction: layout.direction,
				index: actionIndex,
				role: 'action',
				row,
				text: actionText,
			});
		});
	});

	return grid;
};

const loadVersion = async (
	version: string,
	options?: { isBot?: boolean },
): Promise<HaradaContent> => {
	const targetVersion = options?.isBot ? 'dummy' : version;

	const entry = Object.entries(haradaVersions).find(([path]) =>
		path.endsWith(`${targetVersion}.json`),
	);

	if (!entry) {
		throw new Error(`Não foi possível carregar a versão "${targetVersion}".`);
	}

	const module = entry[1] as { default?: HaradaContent };
	return module.default ?? (module as HaradaContent);
};

export async function loader({ request }: Route.LoaderArgs) {
	const language = detectLanguage(request);
	const version = haradaIndex.latest;
	if (!version) {
		throw Response.json(
			{
				message: 'Arquivo index.json não define a versão mais recente.',
				source: 'harada-loader',
			},
			withNoIndexHeaders({ status: 500 }),
		);
	}

	const userAgent = request.headers.get('user-agent') ?? '';
	const isBot = isbot(userAgent);
	const resolvedVersion = isBot ? 'dummy' : version;
	const content = await loadVersion(resolvedVersion, { isBot });

	try {
		validateHarada(content);
		const grid = buildGrid(content, language);

		return Response.json(
			{
				goal: resolveText(content.goal, language),
				grid,
				language,
				meta: {
					period: content.meta.period,
					title: resolveText(content.meta.title, language),
					updatedAt: content.meta.updatedAt,
				},
				themes: content.themes.map((theme) => resolveText(theme, language)),
				version: resolvedVersion,
			},
			withNoIndexHeaders(),
		);
	} catch (error) {
		const message =
			error instanceof Error
				? error.message
				: 'Erro desconhecido ao validar o Harada.';
		throw Response.json(
			{
				language,
				message,
				source: 'harada-loader',
				version: resolvedVersion,
			},
			withNoIndexHeaders({ status: 400 }),
		);
	}
}

export const meta: Route.MetaFunction = () => [
	{ content: 'noindex, nofollow, noarchive', name: 'robots' },
	{ content: 'noindex, nofollow, noarchive', name: 'googlebot' },
];

export default function Harada({ loaderData }: Route.ComponentProps) {
	const data = loaderData as LoaderResponse;
	const { grid, meta, version, goal, themes, language } = data;
	const { t } = useTranslation();

	const roleStyles: Record<
		GridCell['role'],
		{ badge: string; cell: string; label: string }
	> = {
		action: {
			badge: 'bg-slate-12 text-slate-1',
			cell: 'bg-slate-3/80 text-slate-12 border-slate-6 shadow-sm print:bg-white print:border-slate-8',
			label: 'Ação',
		},
		goal: {
			badge: 'bg-amber-12 text-amber-1',
			cell: 'bg-amber-3 text-amber-12 border-amber-7 shadow-lg ring-2 ring-amber-8/80 print:bg-white print:border-amber-8 print:ring-0',
			label: 'Objetivo',
		},
		theme: {
			badge: 'bg-sky-12 text-sky-1',
			cell: 'bg-sky-3/80 text-sky-12 border-sky-7 shadow-md print:bg-white print:border-sky-8',
			label: 'Tema',
		},
	};

	const findThemeForPosition = (row: number, col: number) => {
		return themeLayouts.find((layout) => {
			return (
				layout.actionsBlock.rows.includes(row) &&
				layout.actionsBlock.cols.includes(col)
			);
		});
	};

	const renderCell = (
		cell: GridCell | null,
		rowIndex: number,
		colIndex: number,
	) => {
		let cellToRender = cell;

		if (!cellToRender) {
			const layout = findThemeForPosition(rowIndex, colIndex);
			if (layout) {
				const excludedRow =
					layout.actionsBlock.rows[actionPattern.excludedCell.rowOffset];
				const excludedCol =
					layout.actionsBlock.cols[actionPattern.excludedCell.colOffset];

				if (rowIndex === excludedRow && colIndex === excludedCol) {
					cellToRender = {
						col: colIndex,
						direction: layout.direction,
						index: layout.index,
						role: 'theme',
						row: rowIndex,
						text: themes[layout.index] ?? layout.direction,
					};
				}
			}
		}

		if (!cellToRender) {
			return (
				<div
					aria-hidden
					className="h-full w-full rounded-lg border border-dashed border-slate-4 bg-linear-to-br from-slate-2 to-slate-3/70 print:bg-white print:border-slate-8"
					key={`empty-${rowIndex}-${colIndex}`}
				/>
			);
		}

		const styles = roleStyles[cellToRender.role];
		const tooltipId = `harada-tooltip-${cellToRender.row}-${cellToRender.col}`;
		const directionLabel =
			cellToRender.role !== 'goal' ? (cellToRender.direction ?? '') : 'center';
		const horizontalTooltipClass =
			colIndex <= 2
				? 'left-0 translate-x-0'
				: colIndex >= gridSize.cols - 3
					? 'right-0 translate-x-0'
					: 'left-1/2 -translate-x-1/2';
		const verticalTooltipClass =
			rowIndex >= gridSize.rows - 2
				? 'bottom-full mb-3 -translate-y-3'
				: 'top-full mt-3 translate-y-3';

		return (
			<div key={`${cellToRender.row}-${cellToRender.col}`}>
				<button
					aria-describedby={tooltipId}
					aria-label={cellToRender.text}
					className={`group relative gap-2 flex h-full w-full flex-col items-center rounded-lg border px-3 pb-3 pt-3 text-center text-[11px] leading-snug transition-all duration-150 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-8 sm:text-xs md:text-sm ${styles.cell}`}
					type="button"
				>
					<div className="flex w-full justify-start">
						<span className="pointer-events-none rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide shadow-sm">
							{directionLabel}
						</span>
					</div>
					<div className="flex w-full items-start justify-center">
						<span className="w-full wrap-break-word text-balance line-clamp-4 text-center hyphens-auto">
							{cellToRender.text}
						</span>
					</div>

					<span
						className="sr-only"
						id={tooltipId}
					>{`${styles.label}: ${cellToRender.text}`}</span>
					<div
						className={`pointer-events-none absolute z-30 w-64 rounded-lg border border-slate-8 bg-slate-12 px-3 py-2 text-left text-xs text-slate-1 opacity-0 shadow-2xl transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 print:hidden ${horizontalTooltipClass} ${verticalTooltipClass}`}
					>
						<div className="mb-1 flex items-center gap-2">
							<span
								className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles.badge}`}
							>
								{styles.label}
							</span>
							{cellToRender.direction && (
								<span className="text-[11px] uppercase text-slate-4">
									{cellToRender.direction}
								</span>
							)}
						</div>
						<p className="text-slate-2 text-sm leading-snug">
							{cellToRender.text}
						</p>
					</div>
				</button>
			</div>
		);
	};

	return (
		<main className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 print:max-w-full print:px-2 print:py-4">
			<header className="flex flex-col gap-4 border-b border-slate-4 pb-6 print:border-slate-8">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<div>
						<h1 className="text-3xl font-semibold tracking-tight text-slate-12 dark:text-slate-1 print:text-black">
							{t('harada.title')}
						</h1>
						<p className="text-sm text-slate-11 dark:text-slate-4 print:text-black">
							{t('harada.activeVersion', { version })} •{' '}
							{t('harada.updatedAt', { date: meta.updatedAt })}
						</p>
					</div>
					<div className="flex flex-wrap gap-2">
						<span className="rounded-full bg-amber-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-11 ring-1 ring-amber-7/50 print:bg-white print:ring-amber-8">
							{t('harada.legend.goal')}
						</span>
						<span className="rounded-full bg-sky-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-11 ring-1 ring-sky-7/50 print:bg-white print:ring-sky-8">
							{t('harada.legend.theme')}
						</span>
						<span className="rounded-full bg-slate-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-12 ring-1 ring-slate-7/50 print:bg-white print:ring-slate-8">
							{t('harada.legend.action')}
						</span>
					</div>
				</div>
				<div className="grid gap-3 rounded-xl border border-slate-4 bg-slate-2/50 p-4 shadow-sm print:bg-white print:border-slate-8 print:shadow-none dark:bg-slatedark-2/60">
					<div className="flex flex-wrap items-center gap-2 text-sm text-slate-12 dark:text-slate-3 print:text-black">
						<span className="rounded-md bg-slate-12 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-1 print:bg-black print:text-white">
							{t('harada.metaLabel')}
						</span>
						<span className="font-medium">{meta.title}</span>
						<span className="text-slate-10">·</span>
						<span>{meta.period}</span>
						<span className="text-slate-10">·</span>
						<span className="uppercase">{language}</span>
					</div>
					<p className="text-base font-semibold text-slate-12 dark:text-slate-2 print:text-black">
						{goal}
					</p>
				</div>
			</header>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold text-slate-12 dark:text-slate-1 print:text-black">
						{t('harada.gridTitle')}
					</h2>
					<p className="text-xs text-slate-10 print:text-black">
						{t('harada.gridHint')}
					</p>
				</div>
				<div className="overflow-hidden rounded-2xl border border-slate-4 bg-linear-to-br from-slate-1 via-slate-2 to-slate-3 p-3 shadow-lg print:bg-white print:border-slate-8 print:shadow-none dark:from-slate-12 dark:via-slate-11 dark:to-slate-10">
					<div className="grid aspect-square w-full grid-cols-9 gap-1 sm:gap-1.5 md:gap-2">
						{grid.flatMap((row: (GridCell | null)[], rowIndex: number) =>
							row.map((cell: GridCell | null, colIndex: number) =>
								renderCell(cell, rowIndex, colIndex),
							),
						)}
					</div>
				</div>
			</section>

			<section className="grid gap-4 rounded-xl border border-slate-4 bg-slate-2/60 p-4 shadow-sm print:bg-white print:border-slate-8 print:shadow-none dark:bg-slatedark-2/60">
				<h3 className="text-base font-semibold text-slate-12 dark:text-slate-1 print:text-black">
					{t('harada.themesTitle')}
				</h3>
				<ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
					{themes.map((theme: string, index: number) => (
						<li
							className="flex items-start gap-2 rounded-lg border border-slate-4 bg-slate-1/70 px-3 py-2 text-sm text-slate-12 shadow-sm print:bg-white print:border-slate-8 dark:bg-slatedark-1/60"
							key={theme}
						>
							<span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-12 text-xs font-semibold text-slate-1 print:bg-black print:text-white">
								{index + 1}
							</span>
							<span className="leading-snug">{theme}</span>
						</li>
					))}
				</ol>
			</section>
		</main>
	);
}
