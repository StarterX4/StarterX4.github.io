import React from 'react';
import './SkeletonLoading.css';

interface SkeletonLoadingProps {
	type?: 'page' | 'content' | 'navbar';
}

export const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ 
	type = 'page', 
}) => {
	if (type === 'navbar') {
		return (
			<div className="skeleton-navbar">
				<div className="skeleton-button skeleton-sites-button" />
				<div className="skeleton-button" />
				<div className="skeleton-button" />
			</div>
		);
	}

	if (type === 'content') {
		return (
			<div className="skeleton-content">
				<div className="skeleton-text skeleton-title" />
				<div className="skeleton-text skeleton-paragraph" />
				<div className="skeleton-text skeleton-paragraph" />
				<div className="skeleton-text skeleton-paragraph short" />
			</div>
		);
	}

	// Default page skeleton
	return (
		<div className="skeleton-page">
			<SkeletonLoading type="navbar" />
			<div className="skeleton-main">
				<SkeletonLoading type="content" />
			</div>
			<div className="skeleton-footer">
				<div className="skeleton-text skeleton-footer-text" />
			</div>
		</div>
	);
};
