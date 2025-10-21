import { render } from 'preact';
import './index.css';
import KetherApplication from './components/KetherAppMain/KetherApplication';
import './global.css';
import { reportWebVitals } from './utils/webVitals';

render(
	<KetherApplication />,
	document.getElementById('root') as HTMLElement,
);

// Report Web Vitals for performance monitoring
reportWebVitals();
