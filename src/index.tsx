import { render } from 'preact';
import './index.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import KetherApplication from './components/KetherAppMain/KetherApplication';
import './global.css';
import { reportWebVitals } from './utils/webVitals';
import { preloadCriticalComponents } from './utils/preloading';

render(
	<KetherApplication />,
	document.getElementById('root') as HTMLElement,
);

// Report Web Vitals for performance monitoring
reportWebVitals();

// Preload critical components for better perceived performance
preloadCriticalComponents();
