const LIGHT = { x: 0, y: 0 };
const RANGE = 800;

// const BASE = { ao: 0.025, hi: 0.025, sh: 0.0025 };
// const MAX = { ao: 0.02, hi: 0.02, sh: 0.1 };

const BASE = { ao: 0.025, hi: 0.05, sh: 0.0025 };
const MAX = { ao: 0.3, hi: 0.18, sh: 0.12 };
// const BASE_DARK = { ao: 0.0004, hi: 0.002, sh: 0.00008 };
// const MAX_DARK = { ao: 0.012, hi: 0.008, sh: 0.003 };

const BASE_DARK = { ao: 0.0017, hi: 0.01, sh: 0.0005 };
const MAX_DARK = { ao: 0.027, hi: 0.02, sh: 0.008 };

const updateElevatedElement = (element: Element) => {
	if (!(element instanceof HTMLElement)) {
		return;
	}

	const rect = element.getBoundingClientRect();
	const cx = rect.left + rect.width / 2;
	const cy = rect.top + rect.height / 2;

	const dx = LIGHT.x - cx;
	const dy = LIGHT.y - cy;

	const distance = Math.hypot(dx, dy);
	const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
	const cssAngle = angle - 90;
	const falloff = 1 / (1 + distance / RANGE);

	const isDark = document.documentElement.classList.contains('dark');
	const base = isDark ? BASE_DARK : BASE;
	const max = isDark ? MAX_DARK : MAX;

	const hi = base.hi + (max.hi - base.hi) * falloff;
	const ao = base.ao + (max.ao - base.ao) * falloff;
	const sh = base.sh + (max.sh - base.sh) * falloff;

	element.style.setProperty('--a', `${cssAngle}deg`);
	element.style.setProperty('--hi', hi.toFixed(3));
	element.style.setProperty('--ao', ao.toFixed(3));
	element.style.setProperty('--sh', sh.toFixed(3));
};

const updateAllElevated = () => {
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	LIGHT.x = viewportWidth / 2;
	LIGHT.y = -viewportHeight * 12;
	document.querySelectorAll('.surface').forEach(updateElevatedElement);
	document.documentElement.dataset.elevationReady = 'true';
};

export const initElevation = () => {
	if (typeof window === 'undefined') {
		return () => {};
	}

	let rafId: number | null = null;
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
