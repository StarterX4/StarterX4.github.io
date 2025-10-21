module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// General code quality rules
		'no-console': 'warn',
		'no-debugger': 'error',
		'no-alert': 'warn',
		'prefer-const': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'arrow-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
	},
};
