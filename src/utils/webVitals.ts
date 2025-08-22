import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

// Declare global types
declare global {
	interface Window {
		gtag: (command: string, targetId: string, config: Record<string, any>) => void;
	}
	const gtag: Window['gtag'];
}

interface MetricHandler {
	(name: string, value: number): void;
}

const sendToAnalytics = ({ name, delta, value, id }: { name: string; delta: number; value: number; id: string }) => {
	// Send to Google Analytics
	if (typeof gtag !== 'undefined') {
		gtag('event', name, {
			event_category: 'Web Vitals',
			event_label: id,
			value: Math.round(name === 'CLS' ? delta * 1000 : delta),
			non_interaction: true,
		});
	}

	// Log to console in development
	if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
		console.log(`Web Vital: ${name}`, { delta, value, id });
	}
};

export const reportWebVitals = (onPerfEntry?: MetricHandler) => {
	if (onPerfEntry && typeof onPerfEntry === 'function') {
		onCLS((metric) => onPerfEntry('CLS', metric.value));
		onFCP((metric) => onPerfEntry('FCP', metric.value));
		onLCP((metric) => onPerfEntry('LCP', metric.value));
		onTTFB((metric) => onPerfEntry('TTFB', metric.value));
	} else {
		onCLS(sendToAnalytics);
		onFCP(sendToAnalytics);
		onLCP(sendToAnalytics);
		onTTFB(sendToAnalytics);
	}
};

// Performance monitoring utilities
export const performanceMonitor = {
	// Measure component render time
	measureRender: (componentName: string) => {
		const start = performance.now();
		return () => {
			const end = performance.now();
			const duration = end - start;
			
			if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
				console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
			}
			
			// Send to analytics if duration is concerning
			if (duration > 100 && typeof gtag !== 'undefined') {
				gtag('event', 'slow_render', {
					event_category: 'Performance',
					event_label: componentName,
					value: Math.round(duration),
				});
			}
		};
	},

	// Measure function execution time
	measureFunction: <T extends (...args: unknown[]) => unknown>(
		fn: T,
		functionName: string,
	): T => {
		return ((...args: Parameters<T>) => {
			const start = performance.now();
			const result = fn(...args);
			const end = performance.now();
			const duration = end - start;
			
			if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
				console.log(`${functionName} execution time: ${duration.toFixed(2)}ms`);
			}
			
			return result;
		}) as T;
	},

	// Check if user is on a slow connection
	isSlowConnection: (): boolean => {
		if ('connection' in navigator) {
			const connection = (navigator as any).connection;
			return connection.effectiveType === 'slow-2g' || 
				   connection.effectiveType === '2g' || 
				   connection.effectiveType === '3g';
		}
		return false;
	},

	// Get device memory info
	getDeviceMemory: (): number | null => {
		if ('deviceMemory' in navigator) {
			return (navigator as any).deviceMemory;
		}
		return null;
	},
};
