import { FC } from 'react';
import routerNames from './route-names';
import HomePage from '@components/home/home';

interface IRoute {
    exact: boolean;
    path: string;
    component: FC;
}

const routes: Array<IRoute> = [
    {
        exact: true,
        path: routerNames.homePage,
        component: HomePage,
    },
];

export default routes;
