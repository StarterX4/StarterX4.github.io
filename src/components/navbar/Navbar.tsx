import './Navbar.css';
import SitesButton from './sitesButton/SitesButton';
import { Button } from 'primereact/button';
import { useLocation } from 'wouter';
import { pagePaths } from '../../utils/pagePaths';
import { useCallback, useMemo } from 'preact/compat';
import { preloadOnHover } from '../../utils/preloading';

interface TabItem {
    label: string;
    targetPage: string;
    preloadComponent?: () => Promise<any>;
}

const Navbar = () => {
    const [, setLocation] = useLocation();

    const tabs: TabItem[] = useMemo(() => [
        {
            label: 'Home',
            targetPage: pagePaths.HOME_PAGE,
            preloadComponent: () => import('../HomePage/HomePage'),
        },
        {
            label: 'Repositories',
            targetPage: pagePaths.REPOS,
            preloadComponent: () => import('../Repos/Repos'),
        },
    ], []);

    const handleNavigation = useCallback((path: string) => {
        setLocation(path);
    }, [setLocation]);

    const getNavigationButtons = useCallback(() => {
        return tabs.map((tab) => {
            const { preload, cancelPreload } = preloadOnHover(
                tab.preloadComponent || (() => Promise.resolve()),
            );

            const ButtonComponent = Button as any;
            return (
                <ButtonComponent
                    key={tab.label}
                    onClick={() => handleNavigation(tab.targetPage)}
                    onMouseEnter={preload}
                    onMouseLeave={cancelPreload}
                    onFocus={preload}
                    onBlur={cancelPreload}
                >
                    {tab.label}
                </ButtonComponent>
            );
        });
    }, [tabs, handleNavigation]);

    return (
        <div className="card">
            <div className="navigation-menu">
                <SitesButton />
                {getNavigationButtons()}
            </div>
        </div>
    );
};

export default Navbar;
