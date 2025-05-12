// Importa todos os arquivos .ts de projetos
import * as yogaEmMovimento from './yoga-em-movimento';

const projetosTS = [yogaEmMovimento.yogaEmMovimento];

type Projeto = {
	content?: string;
	slug: string;
	title?: string;
	link?: string;
	tecnologias?: string[];
	descricao?: string;
	destaques?: string[];
};

export function getAllProjects(): Projeto[] {
	// Retorna os projetos definidos em arquivos .ts
	return projetosTS.map((projeto) => ({
		...projeto,
		slug: projeto.title?.toLowerCase().replace(/\s+/g, '-') || '',
	}));
}
