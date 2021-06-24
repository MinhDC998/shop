import React, { FC } from 'react';
import '@client/common/header/header.scss';
import { logo } from '@utils/images-loader';
import NavMenu from '@client/common/header/top-menu';
import Association from '@client/common/header/association';
import { IMenuArray } from '@client/common/header/header.types';

const links: IMenuArray[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Products',
        path: '/products',
        subMenu: [
            {
                name: 'product 1',
                path: '/',
            },
            {
                name: 'product 2',
                path: '/',
            },
            {
                name: 'product 3',
                path: '/',
            },
            {
                name: 'product 4',
                path: '/',
            },
            {
                name: 'product 5',
                path: '/',
            },
        ],
    },
    {
        name: 'Blog',
        path: '/blog',
    },
    {
        name: 'Pages',
        path: '/pages',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const ClientHeader: FC = () => {
    return (
        <div className="main-content">
            <header id="client-header">
                <div id="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <NavMenu menus={links} />
                <Association />
            </header>
        </div>
    );
};

export default ClientHeader;
