import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
	plugins: [preact()],
	base: '/',
	build: {
		outDir: 'build',
		sourcemap: false,
	},
	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime',
		},
	},
});


