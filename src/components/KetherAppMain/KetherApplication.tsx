import { lazy, Suspense } from 'preact/compat';
import { SkeletonLoading } from '../Loading/SkeletonLoading';
import { Router, Route } from 'wouter';
import { pagePaths } from '../../utils/pagePaths';

// Lazy load components for code splitting
const HomePage = lazy(() => import('../HomePage/HomePage'));
const Repos = lazy(() => import('../Repos/Repos'));

// Smart loading fallback - shows skeleton immediately
const PageLoader = () => <SkeletonLoading type="page" />;

export default function KetherApplication() {
    // @ts-ignore - wouter types don't match Preact perfectly
    const RouteComponent = Route as any;
    const RouterComponent = Router as any;
    
    return (
        <RouterComponent>
            <RouteComponent path="/">
                {() => (
                    <Suspense fallback={<PageLoader />}>
                        <HomePage />
                    </Suspense>
                )}
            </RouteComponent>
            <RouteComponent path={pagePaths.HOME_PAGE}>
                {() => (
                    <Suspense fallback={<PageLoader />}>
                        <HomePage />
                    </Suspense>
                )}
            </RouteComponent>
            <RouteComponent path={pagePaths.REPOS}>
                {() => (
                    <Suspense fallback={<PageLoader />}>
                        <Repos />
                    </Suspense>
                )}
            </RouteComponent>
        </RouterComponent>
    );
}
