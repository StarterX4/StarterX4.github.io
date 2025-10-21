/// <reference types="preact" />

// Shim React types to work with Preact
declare module 'react' {
	export = preact.compat;
	export as namespace React;
}

declare module 'react-dom' {
	export = preact.compat;
}

declare module 'react/jsx-runtime' {
	export const jsx: preact.JSX.Element;
	export const jsxs: preact.JSX.Element;
	export const Fragment: preact.FunctionComponent;
}

// Fix for wouter with Preact
declare module 'wouter' {
	import { VNode, FunctionComponent } from 'preact';
	
	export interface RouterProps {
		hook?: any;
		base?: string;
		children?: VNode | VNode[];
	}
	
	export const Router: FunctionComponent<RouterProps>;
	
	export interface RouteProps {
		path?: string;
		children?: VNode | ((params: any) => VNode);
		component?: FunctionComponent<any>;
	}
	
	export const Route: FunctionComponent<RouteProps>;
	export const Switch: FunctionComponent<{ children?: VNode | VNode[] }>;
	export function useLocation(): [string, (path: string) => void];
	export function useRoute(pattern: string): [boolean, any];
}

