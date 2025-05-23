import * as budgetPal from './budgetPal-app';
import * as bdWebsite from './budgetPal-website';
import * as claus from './portfolio';
import * as yem from './yem';

const TSProjects = [
	budgetPal.project,
	yem.project,
	claus.project,
	bdWebsite.project,
];

type Project = {
	content?: string;
	slug: string;
	title?: string;
	link?: string;
	technologies?: string[];
	description?: string;
	highlights?: string[];
};

export function getAllProjects(): Project[] {
	// Retorna os projetos definidos em arquivos .ts
	return TSProjects.map((projeto) => ({
		...projeto,
		slug: projeto.title?.toLowerCase().replace(/\s+/g, '-') || '',
	}));
}
