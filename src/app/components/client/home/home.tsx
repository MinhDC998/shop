import React, { FC } from 'react';
import message from '@elements/message/message';

const HomePage: FC = () => {
    const onSubmit = (values: any, action?: any) => {
        console.log({ values, action });
    };

    const showMessageBox = () => {
        message.success('aaa');
    };

    const showErrorBox = () => {
        message.error('bbb');
    };

    return (
        <div>
            <h1 onClick={showMessageBox}> This is home page 12 3 4 5 6 6 </h1>
            <span onClick={showErrorBox}>s</span>
        </div>
    );
};

export default HomePage;
