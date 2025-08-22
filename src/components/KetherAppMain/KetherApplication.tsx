import React, { Suspense } from 'react';
import { SkeletonLoading } from '../Loading/SkeletonLoading';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { pagePaths } from '../../utils/pagePaths';

// Lazy load components for code splitting
const HomePage = React.lazy(() => import('../HomePage/HomePage'));
const Repos = React.lazy(() => import('../Repos/Repos'));

// Smart loading fallback - shows skeleton immediately
const PageLoader: React.FC = () => <SkeletonLoading type="page" />;

export default function KetherApplication() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route 
                    path="/" 
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <HomePage />
                        </Suspense>
                    } 
                />
                <Route 
                    path={pagePaths.HOME_PAGE} 
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <HomePage />
                        </Suspense>
                    } 
                />
                <Route 
                    path={pagePaths.REPOS} 
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Repos />
                        </Suspense>
                    } 
                />
            </>,
        ),
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
