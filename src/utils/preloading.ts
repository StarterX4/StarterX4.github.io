// Preloading utilities for better perceived performance

interface PreloadableComponent {
	preload: () => Promise<any>;
}

// Preload components on hover
export const preloadOnHover = (componentLoader: () => Promise<any>) => {
	let timeoutId: number | undefined;
	
	const preload = () => {
		timeoutId = window.setTimeout(() => {
			componentLoader();
		}, 100); // Small delay to avoid unnecessary preloading
	};
	
	const cancelPreload = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = undefined;
		}
	};
	
	return { preload, cancelPreload };
};

// Preload critical components immediately
export const preloadCriticalComponents = () => {
	// Preload the most commonly used components
	const criticalComponents = [
		() => import('../components/HomePage/HomePage'),
		() => import('../components/Repos/Repos'),
	];
	
	// Use requestIdleCallback for non-blocking preloading
	if ('requestIdleCallback' in window) {
		requestIdleCallback(() => {
			criticalComponents.forEach(loader => {
				loader().catch(() => {
					// Silently fail - preloading is optional
				});
			});
		});
	} else {
		// Fallback for browsers without requestIdleCallback
		setTimeout(() => {
			criticalComponents.forEach(loader => {
				loader().catch(() => {
					// Silently fail - preloading is optional
				});
			});
		}, 1000);
	}
};

// Preload on route change prediction
export const preloadOnRoutePrediction = (currentPath: string) => {
	const routePredictions: Record<string, () => Promise<any>> = {
		'/': () => import('../components/Repos/Repos'),
		'/repos': () => import('../components/HomePage/HomePage'),
	};
	
	const predictedRoute = routePredictions[currentPath];
	if (predictedRoute) {
		predictedRoute().catch(() => {
			// Silently fail - prediction is optional
		});
	}
};
