import './Navbar.css';
import SitesButton from './sitesButton/SitesButton';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { pagePaths } from '../../utils/pagePaths';

interface TabItem {
    label: string;
    targetPage: string;
}

export default function Navbar() {
    const navigate = useNavigate();

    const tabs: TabItem[] = [
        {
            label: 'Home',
            targetPage: pagePaths.HOME_PAGE,
        },
        {
            label: 'Repositories',
            targetPage: pagePaths.REPOS,
        },
    ];

    const getNavigationButtons = () => {
        return tabs.map((tab) => {
            return (
                <Button
                    onClick={() => {
                        navigate(`../${tab.targetPage}`);
                    }}
                >
                    {tab.label}
                </Button>
            );
        });
    };

    return (
        <div className="card">
            <div className="navigation-menu">
                <SitesButton />
                {getNavigationButtons()}
            </div>
        </div>
    );
}
