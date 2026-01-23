import { useEffect } from 'react';

export const useColorModeScript = () => {
	useEffect(() => {
		const script = document.getElementById('color-mode-script');
		if (!script || script.tagName !== 'SCRIPT') {
			return;
		}

		try {
			const content = script.textContent ?? '';
			if (content) {
				const runner = new Function(content);
				runner();
			}
		} catch {
			// Silenciosamente ignora erros para evitar quebrar o boot.
		}
	}, []);
};
