import HomePage from '../HomePage/HomePage';
//import GameStats from '../GameStats/GameStats';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { pagePaths } from '../../utils/pagePaths';

export default function KetherApplication() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<HomePage />} />
                <Route path={pagePaths.HOME_PAGE} element={<HomePage />} />
            </>
        )
    );
//<Route path={pagePaths.GAME_STATS} element={<GameStats />} />
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
