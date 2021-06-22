import React, { FC } from 'react';
import ClientHeader from '@client/common/header/header';

type ChildProps = {
    children: FC;
};

const ClientLayout: FC<ChildProps> = ({ children }: ChildProps) => {
    return (
        <>
            <ClientHeader />
            {children}
            this is client Layout
        </>
    );
};

export default ClientLayout;
