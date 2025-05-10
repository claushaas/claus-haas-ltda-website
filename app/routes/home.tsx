import Face from '../../public/images/face.svg?react';
import type { Route } from './+types/home';

export function meta() {
	return [
		{ title: 'New React Router App' },
		{ content: 'Welcome to React Router!', name: 'description' },
	];
}

export default function Home() {
	return (
		<main className="m-auto max-w-4xl px-4 py-8">
			<section className="flex flex-wrap gap-4 md:flex-nowrap">
				<div className="flex w-full justify-center md:justify-start">
					<Face className="max-h-72 fill-sky-11 md:max-h-96" />
				</div>
				<div className="flex w-full flex-col justify-between">
					<div className="flex flex-col items-end">
						<h1 className="text-9xl">Claus</h1>
						<h1 className="text-9xl">Haas</h1>
					</div>
					<div className="flex flex-col items-end">
						<p className="text-2xl">Fullstack Developer</p>
						<p className="text-2xl">Automation Expert</p>
						<p className="text-2xl">CRM Specialist</p>
					</div>
				</div>
			</section>
		</main>
	);
}
