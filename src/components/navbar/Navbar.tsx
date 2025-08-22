import './Navbar.css';
import SitesButton from './sitesButton/SitesButton';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { pagePaths } from '../../utils/pagePaths';
import React, { useCallback, useMemo } from 'react';
import { preloadOnHover } from '../../utils/preloading';

interface TabItem {
    label: string;
    targetPage: string;
    preloadComponent?: () => Promise<any>;
}

const Navbar: React.FC = React.memo(() => {
    const navigate = useNavigate();

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
        navigate(`../${path}`);
    }, [navigate]);

    const getNavigationButtons = useCallback(() => {
        return tabs.map((tab) => {
            const { preload, cancelPreload } = preloadOnHover(
                tab.preloadComponent || (() => Promise.resolve()),
            );

            return (
                <Button
                    key={tab.label}
                    onClick={() => handleNavigation(tab.targetPage)}
                    onMouseEnter={preload}
                    onMouseLeave={cancelPreload}
                    onFocus={preload}
                    onBlur={cancelPreload}
                >
                    {tab.label}
                </Button>
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
});

Navbar.displayName = 'Navbar';

export default Navbar;
