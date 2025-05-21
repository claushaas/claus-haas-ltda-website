import i18next from 'i18next';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { HydratedRouter } from 'react-router/dom';
import { initI18Next } from './i18n/i18n';

function getInitialLanguage() {
	const script = document.getElementById('initial-i18n-language');
	if (script) {
		try {
			const { language } = JSON.parse(script.textContent || '{}');
			return language;
		} catch {
			return undefined;
		}
	}
	return undefined;
}

async function main() {
	const initialLanguage = getInitialLanguage();
	await initI18Next(i18next, initialLanguage);

	startTransition(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<I18nextProvider i18n={i18next}>
					<HydratedRouter />
				</I18nextProvider>
			</StrictMode>,
		);
	});
}

main().catch((error) => console.error(error));
