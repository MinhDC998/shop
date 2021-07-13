import React, { FC } from 'react';
import ClientHeader from '@client/common/header/header';
import ClientFooter from '@client/common/footer/footer';

type ChildProps = {
    children: FC;
};

const ClientLayout: FC<ChildProps> = ({ children }: ChildProps) => {
    return (
        <>
            <ClientHeader />
            {children}
            <ClientFooter />
        </>
    );
};

export default ClientLayout;
