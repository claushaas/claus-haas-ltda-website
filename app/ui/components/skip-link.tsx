import { useTranslation } from 'react-i18next';

export const SkipLink = () => {
	const { t } = useTranslation();

	return (
		<a className="t-meta" href="#main-content">
			{t('skipLink.label')}
		</a>
	);
};
