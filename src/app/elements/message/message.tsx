import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { IConfigMessage } from '@elements/message/message.types';
import './message.scss';

const messageBox = (): HTMLElement | null => document.getElementById('message-box');

const renderBox = (message: string, messageType: string, config?: IConfigMessage) => {
    messageBox()?.classList.add(messageType);
    messageBox()?.classList.add('message-show-up');

    setTimeout(() => {
        messageBox()?.classList.remove('message-show-up');
        messageBox()?.classList.remove(messageType);
    }, config?.duration || 2000);

    ReactDOM.render(
        <span>
            {config?.icon} {message}
        </span>,
        messageBox(),
    );
};

const success = (message: string, config?: IConfigMessage): void => {
    renderBox(message, 'message-success', config);
};

const error = (message: string, config?: IConfigMessage): void => {
    renderBox(message, 'message-error', config);
};

export default { success, error };
