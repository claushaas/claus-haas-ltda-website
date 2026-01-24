export const loader = () =>
	new Response('{}', {
		headers: {
			'Cache-Control': 'no-store',
			'Content-Type': 'application/json',
		},
		status: 200,
	});

export default function DevToolsProbe() {
	return null;
}
