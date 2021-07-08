import React, { FC } from 'react';

const HomePage: FC = () => {
    const onSubmit = (values: any, action?: any) => {
        console.log({ values, action });
    };

    return (
        <div>
            <h1> This is home page 12 3 4 5 6 6 </h1>
        </div>
    );
};

export default HomePage;
