import { useEffect, useRef, useCallback } from 'preact/compat';
import { performanceMonitor } from '../utils/webVitals';

interface UsePerformanceOptions {
	componentName: string;
	measureRender?: boolean;
	measureInteractions?: boolean;
}

export const usePerformance = ({ 
	componentName, 
	measureRender = true, 
	measureInteractions = false, 
}: UsePerformanceOptions) => {
	const renderTimeRef = useRef<number>(0);
	const interactionCountRef = useRef<number>(0);

	// Measure render time
	useEffect(() => {
		if (measureRender) {
			renderTimeRef.current = performance.now();
			return () => {
				const endTime = performance.now();
				const renderTime = endTime - renderTimeRef.current;
				
				if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
					console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
				}
			};
		}
		return undefined;
	}, [componentName, measureRender]);

	// Track user interactions
	const trackInteraction = useCallback((interactionType: string) => {
		if (measureInteractions) {
			interactionCountRef.current++;
			
			if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
				console.log(`${componentName} interaction: ${interactionType} (total: ${interactionCountRef.current})`);
			}
		}
	}, [componentName, measureInteractions]);

	// Performance recommendations
	const getPerformanceRecommendations = useCallback(() => {
		const recommendations: string[] = [];
		const isSlowConnection = performanceMonitor.isSlowConnection();
		const deviceMemory = performanceMonitor.getDeviceMemory();
		
		if (isSlowConnection) {
			recommendations.push('Consider reducing image quality or implementing progressive loading');
		}
		
		if (deviceMemory && deviceMemory < 4) {
			recommendations.push('Consider reducing memory usage for low-end devices');
		}
		
		return recommendations;
	}, []);

	return {
		trackInteraction,
		getPerformanceRecommendations,
		interactionCount: interactionCountRef.current,
	};
};

// Hook for debounced functions
export const useDebounce = <T extends (...args: unknown[]) => unknown>(
	callback: T,
	delay: number,
): T => {
	const timeoutRef = useRef<number | undefined>(undefined);

	return useCallback((...args: Parameters<T>) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		
		timeoutRef.current = window.setTimeout(() => {
			callback(...args);
		}, delay);
	}, [callback, delay]) as T;
};

// Hook for throttled functions
export const useThrottle = <T extends (...args: unknown[]) => unknown>(
	callback: T,
	delay: number,
): T => {
	const lastCallRef = useRef<number>(0);

	return useCallback((...args: Parameters<T>) => {
		const now = Date.now();
		
		if (now - lastCallRef.current >= delay) {
			callback(...args);
			lastCallRef.current = now;
		}
	}, [callback, delay]) as T;
};

// Hook for intersection observer (lazy loading)
export const useIntersectionObserver = (
	callback: () => void,
	options: IntersectionObserverInit = {},
) => {
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return undefined;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback();
					observer.unobserve(entry.target);
				}
			});
		}, options);

		observer.observe(element);

		return () => {
			if (element) {
				observer.unobserve(element);
			}
			observer.disconnect();
		};
	}, [callback, options]);

	return elementRef;
};
