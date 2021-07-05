import React, { FC } from 'react';
import SearchBox from '@client/common/header/search-box';
import LoginForm from '@client/common/header/Login';
import '@client/common/header/header.scss';

const Association: FC = () => {
    return (
        <div id="nav-association">
            <div id="search-icon">
                <SearchBox />
            </div>

            <div id="login-icon">
                <LoginForm />
            </div>
        </div>
    );
};

export default Association;
