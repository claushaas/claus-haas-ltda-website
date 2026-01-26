/** Posição virtual da fonte de luz usada no cálculo das sombras. */
const LIGHT = { x: 0, y: 0 };
/** Distância de referência para o decaimento (falloff) da luz. */
const RANGE = 2000;

/** Valores base (tema claro) para o efeito de elevação. */
const BASE = { ao: 0.025, hi: 0.05, sh: 0.0025 };
/** Valores máximos (tema claro) para o efeito de elevação. */
const MAX = { ao: 0.3, hi: 0.18, sh: 0.12 };

/** Valores base (tema escuro) para o efeito de elevação. */
const BASE_DARK = { ao: 0.002, hi: 0.015, sh: 0.0005 };
/** Valores máximos (tema escuro) para o efeito de elevação. */
const MAX_DARK = { ao: 0.027, hi: 0.02, sh: 0.008 };

/**
 * Atualiza as variáveis CSS de um único elemento "elevated"
 * com base na distância e no ângulo em relação à fonte de luz.
 */
const updateElevatedElement = (element: Element) => {
	if (!(element instanceof HTMLElement)) {
		return;
	}

	/** Centro geométrico do elemento na viewport. */
	const rect = element.getBoundingClientRect();
	const cx = rect.left + rect.width / 2;
	const cy = rect.top + rect.height / 2;

	/** Vetor entre a luz e o elemento. */
	const dx = LIGHT.x - cx;
	const dy = LIGHT.y - cy;

	/** Distância, ângulo e decaimento usados no shading. */
	const distance = Math.hypot(dx, dy);
	const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
	const cssAngle = angle - 90;
	const falloff = 1 / (1 + distance / RANGE);

	/** Seleção dos limites conforme tema (claro/escuro). */
	const isDark = document.documentElement.classList.contains('dark');
	const base = isDark ? BASE_DARK : BASE;
	const max = isDark ? MAX_DARK : MAX;

	/** Interpolações finais para realces, oclusão e sombra. */
	const hi = base.hi + (max.hi - base.hi) * falloff;
	const ao = base.ao + (max.ao - base.ao) * falloff;
	const sh = base.sh + (max.sh - base.sh) * falloff;

	/** Aplica variáveis CSS consumidas pelos tokens de elevação. */
	element.style.setProperty('--a', `${cssAngle}deg`);
	element.style.setProperty('--hi', hi.toFixed(3));
	element.style.setProperty('--ao', ao.toFixed(3));
	element.style.setProperty('--sh', sh.toFixed(3));
};

/**
 * Recalcula a posição da luz e atualiza todos os elementos `.surface`.
 */
const updateAllElevated = () => {
	/** Luz fica acima da viewport para dar sensação de iluminação superior. */
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	LIGHT.x = viewportWidth / 2;
	LIGHT.y = -viewportHeight * 12;
	document.querySelectorAll('.surface').forEach(updateElevatedElement);
	document.documentElement.dataset.elevationReady = 'true';
};

/**
 * Inicializa listeners para atualizar a elevação em resize/scroll e troca de tema.
 * Retorna uma função de cleanup para remover listeners e observers.
 */
export const initElevation = () => {
	if (typeof window === 'undefined') {
		return () => {};
	}

	/** Controla a atualização via rAF para evitar recomputes excessivos. */
	let rafId: number | null = null;
	/** Observa mudanças de tema (classe no <html>). */
	let observer: MutationObserver | null = null;
	const scheduleUpdate = () => {
		if (rafId !== null) {
			return;
		}

		rafId = window.requestAnimationFrame(() => {
			rafId = null;
			updateAllElevated();
		});
	};

	const handleUpdate = () => scheduleUpdate();
	window.addEventListener('resize', handleUpdate);
	window.addEventListener('scroll', handleUpdate, { passive: true });
	scheduleUpdate();

	observer = new MutationObserver(() => scheduleUpdate());
	observer.observe(document.documentElement, {
		attributeFilter: ['class'],
		attributes: true,
	});

	return () => {
		window.removeEventListener('resize', handleUpdate);
		window.removeEventListener('scroll', handleUpdate);
		if (observer) {
			observer.disconnect();
		}
		if (rafId !== null) {
			window.cancelAnimationFrame(rafId);
		}
	};
};
