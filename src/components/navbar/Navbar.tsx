import './Navbar.css';
import SitesButton from './sitesButton/SitesButton';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { pagePaths } from '../../utils/pagePaths';
import React, { useCallback, useMemo } from 'react';

interface TabItem {
    label: string;
    targetPage: string;
}

const Navbar: React.FC = React.memo(() => {
    const navigate = useNavigate();

    const tabs: TabItem[] = useMemo(() => [
        {
            label: 'Home',
            targetPage: pagePaths.HOME_PAGE,
        },
        {
            label: 'Repositories',
            targetPage: pagePaths.REPOS,
        },
    ], []);

    const handleNavigation = useCallback((path: string) => {
        navigate(`../${path}`);
    }, [navigate]);

    const getNavigationButtons = useCallback(() => {
        return tabs.map((tab) => (
            <Button
                key={tab.label}
                onClick={() => handleNavigation(tab.targetPage)}
            >
                {tab.label}
            </Button>
        ));
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
