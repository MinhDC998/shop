import { FC } from 'react';

export interface IChildrenProps {
    children: FC;
}

export interface IClientContext {
    cart: Array<{
        quantity: number;
        prodName: string;
    }>;
}
