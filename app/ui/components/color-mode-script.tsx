import { useMemo } from 'react';
import { useGlobalState } from '~/state/global-state';

export const ColorModeScript = () => {
	const { colorModePreference } = useGlobalState();
	const scriptContent = useMemo(() => {
		const preference = colorModePreference ?? 'system';
		return `(() => {
  try {
    const preference = '${preference}';
    const stored = localStorage.getItem('color-mode-preference');
    const resolved = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : preference;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mode = resolved === 'system' ? (prefersDark ? 'dark' : 'light') : resolved;
    document.documentElement.classList.toggle('dark', mode === 'dark');
  } catch {}
})();`;
	}, [colorModePreference]);

	return (
		<script id="color-mode-script" type="text/plain">
			{scriptContent}
		</script>
	);
};
