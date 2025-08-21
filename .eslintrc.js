module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
	],
	rules: {
		// React specific rules
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		
		// Accessibility rules
		'jsx-a11y/alt-text': 'error',
		'jsx-a11y/anchor-has-content': 'error',
		'jsx-a11y/anchor-is-valid': 'error',
		'jsx-a11y/aria-props': 'error',
		'jsx-a11y/aria-proptypes': 'error',
		'jsx-a11y/aria-unsupported-elements': 'error',
		'jsx-a11y/role-has-required-aria-props': 'error',
		'jsx-a11y/role-supports-aria-props': 'error',
		
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
	settings: {
		react: {
			version: 'detect',
		},
	},
};
