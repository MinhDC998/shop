/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
export interface IMenu {
    name: string;
    path: string;
    accessAble?: number[];
    icon?: string;
}

export interface IMenuArray extends IMenu {
    subMenu?: IMenu[];
}

export interface INavMenuProps {
    menus: IMenuArray[]
}

export interface ISearchTag {
    id?: number
    name: string
}

export interface IToggleForm {
    isShow: boolean
    toggleRegister: (isShow: boolean) => (e: React.MouseEvent<HTMLInputElement>) => void
}