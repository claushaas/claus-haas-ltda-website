// Importa todos os arquivos .ts de projetos
import * as yem from './yem';

const TSProjects = [yem.project];

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
