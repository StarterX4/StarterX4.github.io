import { useState, useEffect } from 'preact/compat';
import { Loading } from './Loading';

interface SmartLoadingProps {
	size?: 'small' | 'medium' | 'large';
	text?: string;
	delay?: number; // Delay before showing spinner (ms)
	minDisplayTime?: number; // Minimum time to show spinner (ms)
}

export const SmartLoading = ({ 
	size = 'medium', 
	text = 'Loading...', 
	delay = 200, // Only show spinner after 200ms
	minDisplayTime = 500, // Show for at least 500ms to avoid flicker
}) => {
	const [showSpinner, setShowSpinner] = useState(false);
	const [startTime, setStartTime] = useState<number | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSpinner(true);
			setStartTime(Date.now());
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [delay]);

	useEffect(() => {
		if (showSpinner && startTime) {
			const elapsed = Date.now() - startTime;
			const remaining = Math.max(0, minDisplayTime - elapsed);
			
			if (remaining > 0) {
				const timer = setTimeout(() => {
					// Component will unmount naturally
				}, remaining);
				return () => clearTimeout(timer);
			}
		}
		return undefined;
	}, [showSpinner, startTime, minDisplayTime]);

	if (!showSpinner) {
		return null; // Show nothing during the delay
	}

	return <Loading size={size} text={text} />;
};
