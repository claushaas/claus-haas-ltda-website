import i18n from 'i18next';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { HydratedRouter } from 'react-router/dom';
import { initI18Next } from './i18n/i18n';

startTransition(async () => {
	await initI18Next(i18n);

	hydrateRoot(
		document,
		<StrictMode>
			<I18nextProvider i18n={i18n}>
				<HydratedRouter />
			</I18nextProvider>
		</StrictMode>,
	);
});
