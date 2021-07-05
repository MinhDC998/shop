import React, { FC } from 'react';
import { BiUser, BiLock } from 'react-icons/bi';
const LoginForm: FC = () => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(1);
    };

    return (
        <>
            <label htmlFor="show-login-form">
                <BiUser />
            </label>
            <input type="checkbox" id="show-login-form" />
            <form id="login-form" onSubmit={onSubmit}>
                <div className="wrapper-input">
                    <label htmlFor="email" className="label-form">
                        <BiUser /> Email
                    </label>
                    <input type="text" name="email" id="email" className="input-form" placeholder="Enter your email" />
                </div>

                <div className="wrapper-input">
                    <label htmlFor="password" className="label-form">
                        <BiLock /> Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="input-form"
                        placeholder="Enter your password"
                    />
                </div>

                <div id="login-action">
                    <div id="remember-me">
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <span id="forgot-password">Forgot your password?</span>
                </div>

                <button className="btn" id="login-btn" type="submit">
                    Login
                </button>
                <div id="or-divide">
                    <span>Or</span>
                </div>
                <div className="btn" id="register-redirect">
                    <label htmlFor="to-register" className="center-items">
                        Register
                    </label>
                    <input type="checkbox" id="to-register" />
                </div>
            </form>
        </>
    );
};

export default LoginForm;
