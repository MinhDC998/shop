import React, { FC } from 'react';

type ChildProps = {
    children: FC;
};

const ClientLayout: FC<ChildProps> = ({ children }: ChildProps) => {
    return (
        <>
            this is client Layout
            {children}
            this is client Layout
        </>
    );
};

export default ClientLayout;
