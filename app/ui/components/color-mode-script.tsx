const scriptContent = `(() => {
  try {
    const stored = localStorage.getItem('color-mode-preference');
    const preference = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mode = preference === 'system' ? (prefersDark ? 'dark' : 'light') : preference;
    document.documentElement.classList.toggle('dark', mode === 'dark');
  } catch {}
})();`;

export const ColorModeScript = () => (
	<script id="color-mode-script" type="text/plain">
		{scriptContent}
	</script>
);
