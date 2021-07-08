import React, { FC } from 'react';
import { BiUser, BiLock } from 'react-icons/bi';
import { Form, Input, Label, WrapperSectionInput } from '@elements/form/form';

const initialState = {
    email: '',
    password: '',
    remember: false,
};

const LoginForm: FC = () => {
    const onSubmit = (values: any, action: any) => {
        console.log(values);
    };

    return (
        <>
            <label htmlFor="show-login-form">
                <BiUser />
            </label>
            <input type="checkbox" id="show-login-form" />

            <Form formProps={{ initialState, onSubmit }} styleId={'login-form'}>
                <WrapperSectionInput className="wrapper-input">
                    <Label labelFor="email" className="label-form" labelTitle="Email" icon={<BiUser />} />
                    <Input
                        name="email"
                        className="input-form"
                        type="text"
                        styleId="email"
                        placeholder="Enter your email"
                    />
                </WrapperSectionInput>

                <WrapperSectionInput className="wrapper-input">
                    <Label labelFor="password" className="label-form" labelTitle="Password" icon={<BiLock />} />
                    <Input
                        name="password"
                        className="input-form"
                        type="password"
                        styleId="password"
                        placeholder="Enter your password"
                    />
                </WrapperSectionInput>

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
            </Form>
        </>
    );
};

export default LoginForm;
