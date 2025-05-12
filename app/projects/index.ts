import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'app/projects');

type Projeto = {
	content: string;
	slug: string;
	title?: string;
	link?: string;
};

export function getAllProjects(): Projeto[] {
	const files = fs.readdirSync(projectsDir);
	return files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(projectsDir, file);
			const fileContents = fs.readFileSync(filePath, 'utf8');
			const { data, content } = matter(fileContents);
			return {
				...data,
				content,
				slug: file.replace(/\.md$/, ''),
			};
		});
}
