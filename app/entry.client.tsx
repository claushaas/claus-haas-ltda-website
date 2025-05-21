import i18next from 'i18next';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { HydratedRouter } from 'react-router/dom';
import { initI18Next } from './i18n/i18n';

async function main() {
	await initI18Next(i18next);

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
