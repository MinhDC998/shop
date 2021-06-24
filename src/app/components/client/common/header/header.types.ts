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