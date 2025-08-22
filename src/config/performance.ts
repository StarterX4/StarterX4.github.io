// Performance configuration and thresholds
export const PERFORMANCE_CONFIG = {
	// Render time thresholds (in milliseconds)
	RENDER_THRESHOLDS: {
		GOOD: 16, // 60fps
		ACCEPTABLE: 33, // 30fps
		POOR: 100,
		CRITICAL: 500,
	},

	// Bundle size thresholds (in KB)
	BUNDLE_THRESHOLDS: {
		GOOD: 200,
		ACCEPTABLE: 500,
		POOR: 1000,
		CRITICAL: 2000,
	},

	// Web Vitals thresholds
	WEB_VITALS: {
		LCP: {
			GOOD: 2500,
			POOR: 4000,
		},
		FID: {
			GOOD: 100,
			POOR: 300,
		},
		CLS: {
			GOOD: 0.1,
			POOR: 0.25,
		},
		FCP: {
			GOOD: 1800,
			POOR: 3000,
		},
		TTFB: {
			GOOD: 800,
			POOR: 1800,
		},
	},

	// Connection types
	CONNECTION_TYPES: {
		SLOW: ['slow-2g', '2g', '3g'],
		FAST: ['4g', '5g'],
	},

	// Device memory thresholds (in GB)
	DEVICE_MEMORY: {
		LOW: 2,
		MEDIUM: 4,
		HIGH: 8,
	},

	// Debounce and throttle delays (in milliseconds)
	DELAYS: {
		SEARCH_DEBOUNCE: 300,
		SCROLL_THROTTLE: 16,
		RESIZE_DEBOUNCE: 250,
		CLICK_THROTTLE: 100,
	},

	// Lazy loading options
	LAZY_LOADING: {
		INTERSECTION_THRESHOLD: 0.1,
		ROOT_MARGIN: '50px',
	},

	// Image optimization
	IMAGE_OPTIMIZATION: {
		QUALITY: 85,
		FORMATS: ['webp', 'avif'],
		PLACEHOLDER_SIZE: 20,
	},

	// Cache settings
	CACHE: {
		MAX_AGE: 7 * 24 * 60 * 60 * 1000, // 7 days
		STALE_WHILE_REVALIDATE: 24 * 60 * 60 * 1000, // 24 hours
	},
} as const;

// Performance monitoring settings
export const MONITORING_CONFIG = {
	// Enable/disable performance monitoring
	ENABLED: typeof window !== 'undefined' && window.location.hostname !== 'localhost',
	
	// Sampling rate for performance metrics (0-1)
	SAMPLING_RATE: 0.1,
	
	// Metrics to track
	METRICS: {
		RENDER_TIME: true,
		INTERACTION_TIME: true,
		MEMORY_USAGE: true,
		NETWORK_REQUESTS: true,
		BUNDLE_SIZE: true,
	},
	
	// Error tracking
	ERROR_TRACKING: {
		ENABLED: true,
		IGNORE_PATTERNS: [
			/ResizeObserver loop limit exceeded/,
			/Network request failed/,
		],
	},
} as const;

// Performance optimization strategies
export const OPTIMIZATION_STRATEGIES = {
	// Code splitting
	CODE_SPLITTING: {
		ENABLED: true,
		CHUNK_SIZE: 244 * 1024, // 244KB
		MAX_CHUNKS: 10,
	},
	
	// Tree shaking
	TREE_SHAKING: {
		ENABLED: true,
		PURE_MODULES: true,
	},
	
	// Minification
	MINIFICATION: {
		ENABLED: true,
		REMOVE_CONSOLE: typeof window !== 'undefined' && window.location.hostname !== 'localhost',
		REMOVE_DEBUGGER: true,
	},
	
	// Compression
	COMPRESSION: {
		ENABLED: true,
		ALGORITHM: 'gzip',
		LEVEL: 6,
	},
} as const;

// Performance utility functions
export const getPerformanceScore = (metrics: {
	lcp?: number;
	fid?: number;
	cls?: number;
	fcp?: number;
	ttfb?: number;
}) => {
	let score = 100;
	const weights = { lcp: 0.25, fid: 0.25, cls: 0.25, fcp: 0.15, ttfb: 0.1 };

	if (metrics.lcp) {
		if (metrics.lcp > PERFORMANCE_CONFIG.WEB_VITALS.LCP.POOR) {
			score -= 25 * weights.lcp;
		} else if (metrics.lcp > PERFORMANCE_CONFIG.WEB_VITALS.LCP.GOOD) {
			score -= 10 * weights.lcp;
		}
	}

	if (metrics.fid) {
		if (metrics.fid > PERFORMANCE_CONFIG.WEB_VITALS.FID.POOR) {
			score -= 25 * weights.fid;
		} else if (metrics.fid > PERFORMANCE_CONFIG.WEB_VITALS.FID.GOOD) {
			score -= 10 * weights.fid;
		}
	}

	if (metrics.cls) {
		if (metrics.cls > PERFORMANCE_CONFIG.WEB_VITALS.CLS.POOR) {
			score -= 25 * weights.cls;
		} else if (metrics.cls > PERFORMANCE_CONFIG.WEB_VITALS.CLS.GOOD) {
			score -= 10 * weights.cls;
		}
	}

	return Math.max(0, Math.round(score));
};

export const getPerformanceGrade = (score: number): string => {
	if (score >= 90) return 'A';
	if (score >= 80) return 'B';
	if (score >= 70) return 'C';
	if (score >= 60) return 'D';
	return 'F';
};
