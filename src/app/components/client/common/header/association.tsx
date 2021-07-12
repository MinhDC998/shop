import React, { FC } from 'react';
import SearchBox from '@client/common/header/search-box';
import LoginForm from '@client/common/header/login';
import Register from '@client/common/header/register';
import '@client/common/header/header.scss';
import { BiUser } from 'react-icons/bi';

const Association: FC = () => {
    const [isShowRegister, setIsShowRegister] = React.useState(false);

    const toggleRegister =
        (isShow: boolean) =>
        (e: React.MouseEvent<HTMLInputElement>): void => {
            setIsShowRegister(isShow);
        };

    return (
        <div id="nav-association">
            <div id="search-icon">
                <SearchBox />
            </div>

            <div id="login-icon">
                <label htmlFor="show-login-form">
                    <BiUser />
                </label>

                <input type="checkbox" id="show-login-form" />
                <div id="auth-box">
                    <LoginForm isShow={isShowRegister} toggleRegister={toggleRegister} />
                    <Register isShow={isShowRegister} toggleRegister={toggleRegister} />
                </div>
            </div>
        </div>
    );
};

export default Association;
