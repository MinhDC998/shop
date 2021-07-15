import React, { FC } from 'react';
import message from '@elements/message/message';
import Modal, { useToggleModal } from '@elements/modal/modal';

const HomePage: FC = () => {
    const { isShowModal, toggleModal } = useToggleModal(false);

    React.useEffect(() => {
        message.success('Hi there');
    }, []);

    return (
        <div>
            <h1> This is home page 12 3 4 5 6 6 </h1>
            <h1 onClick={toggleModal(true)}>show model</h1>
            <Modal title="title" isShowModal={isShowModal} toggleModal={toggleModal}>
                <p>content 1</p>
                <p>content 2</p>
                <p>content 3</p>
            </Modal>
        </div>
    );
};

export default HomePage;
