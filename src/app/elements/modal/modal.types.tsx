import React from 'react';

export interface IModal {
    title: string | (() => string);
    isShowModal: boolean;
    children?: JSX.Element[];
    footer?: JSX.Element[];
    toggleModal: (isShowModal: boolean) => (e: React.MouseEvent<HTMLElement>) => void;
    onSubmitModal?: any;
}

export type IUseToggleModal = Omit<IModal, 'title' | 'children' | 'footer' | 'onSubmitModal'>;
