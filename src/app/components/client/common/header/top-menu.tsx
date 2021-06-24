import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMenuArray, INavMenuProps } from '@client/common/header/header.types';

const NavMenu: FC<INavMenuProps> = (props: INavMenuProps) => {
    const { menus } = props;

    const renderMenu = (menuClassName?: string, subMenu?: IMenuArray[]) => {
        const menuRender = subMenu ?? menus;

        return (
            <ul className={menuClassName}>
                {menuRender.map((v, i) => {
                    return (
                        <li key={i}>
                            <Link key={i} to={v.path} className="menu-link">
                                {v.name}
                                {v.subMenu ? (
                                    <>
                                        <span className="arrow-down" />
                                        {renderMenu('sub-menu', v.subMenu)}
                                    </>
                                ) : (
                                    ''
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return <div className="nav-menu">{renderMenu()}</div>;
};

export default NavMenu;
