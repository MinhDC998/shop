/* eslint-disable react/display-name */
import React, { FC } from 'react';
import { IModal, IUseToggleModal } from '@elements/modal/modal.types';
import { BiX } from 'react-icons/bi';
import './modal.scss';

export const useToggleModal = (defaultShow: boolean): IUseToggleModal => {
    const [isShowModal, setIsShowModal] = React.useState(defaultShow);

    const toggleModal = (isShow: boolean) => (e: React.MouseEvent<HTMLElement>) => {
        setIsShowModal(isShow);
    };

    return { isShowModal, toggleModal };
};

const renderProps = (props: IModal) => {
    const { title, footer, toggleModal, onSubmitModal } = props;

    const renderTitle = () => {
        if (title instanceof Function) {
            return title();
        }

        return title;
    };

    const renderFooter = () => {
        const footerContent: IModal['footer'] = footer || [
            <div className="btn" key="ok" onClick={onSubmitModal ? onSubmitModal : toggleModal(false)}>
                OK
            </div>,
            <div className="btn" key="cancel" onClick={toggleModal(false)}>
                Cancel
            </div>,
        ];

        return footerContent.map((v) => v);
    };

    return { title: renderTitle(), footer: renderFooter() };
};

const Modal: FC<IModal> = (props: IModal) => {
    const { title, footer } = renderProps(props);

    return (
        <div id="wrapper-modal" className={props.isShowModal ? 'show-modal' : undefined}>
            <div id="modal-box">
                <div id="modal-header">
                    <span id="title">{title}</span>
                    <span id="close-btn" onClick={props.toggleModal(false)}>
                        <BiX />
                    </span>
                </div>
                <div id="modal-content">{props?.children}</div>
                <div id="modal-footer">{footer}</div>
            </div>

            <div id="modal-background" onClick={props.toggleModal(false)} />
        </div>
    );
};

export default Modal;
