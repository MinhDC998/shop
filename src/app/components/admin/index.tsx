import React, { FC } from 'react';

type ChildProps = {
    children: FC;
};

const AdminLayout: FC<ChildProps> = ({ children }: ChildProps) => {
    return (
        <>
            this is admin page
            {children}
            this is admin page
        </>
    );
};

export default AdminLayout;
