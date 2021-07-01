import React, { createContext, FC } from 'react';
import { IClientContext, IChildrenProps } from '@client/context/client-context.types';

const initialContext: IClientContext = {
    cart: [
        {
            quantity: 0,
            prodName: '',
        },
    ],
};

const contextReducer = (state: IClientContext, action: { type: string; data: Record<string, any> }) => {
    switch (action.type) {
        case 'test':
            return { ...state, cart: [] };
            break;
        default:
            return state;
    }
};

export const ClientContext = createContext<{
    data: IClientContext;
    dispatch: any;
}>({ data: initialContext, dispatch: { type: 'a', data: {} } });

const ClientContextProvider: FC<IChildrenProps> = ({ children }: IChildrenProps) => {
    const [data, dispatch] = React.useReducer(contextReducer, initialContext);

    return <ClientContext.Provider value={{ data, dispatch }}> {children} </ClientContext.Provider>;
};

export default ClientContextProvider;
