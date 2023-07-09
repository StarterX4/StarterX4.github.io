import HomePage from '../HomePage/HomePage';
import Repos from '../Repos/Repos';
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
                <Route path={pagePaths.REPOS} element={<Repos />} />
            </>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
