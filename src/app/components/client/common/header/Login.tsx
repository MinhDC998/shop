import React, { FC } from 'react';
import { BiUser, BiLock } from 'react-icons/bi';
import { Form, Input, Label, WrapperSectionInput, Button } from '@elements/form/form';
import { ICustomUseInput } from '@elements/form/form.types';
import { IToggleForm } from '@client/common/header/header.types';

const initialState = {
    email: '',
    password: '',
    remember: false,
};

const LoginForm: FC<IToggleForm> = ({ isShow, toggleRegister }: IToggleForm) => {
    const onSubmit = (
        values: ICustomUseInput['formAction'],
        actions: ICustomUseInput['formAttributes']['actions'],
    ): void => {
        setTimeout(() => {
            actions.toggleSubmitting(false); // logic login goes here
        }, 2000);
    };

    return (
        <>
            <Form
                formProps={{ initialState, onSubmit }}
                id={'login-form'}
                className={`${isShow ? 'login-hidden' : ''}`}>
                <WrapperSectionInput className="wrapper-input">
                    <Label htmlFor="email" className="label-form" labelTitle="Email" icon={<BiUser />} />
                    <Input name="email" className="input-form" type="text" id="email" placeholder="Enter your email" />
                </WrapperSectionInput>

                <WrapperSectionInput className="wrapper-input">
                    <Label htmlFor="password" className="label-form" labelTitle="Password" icon={<BiLock />} />
                    <Input
                        name="password"
                        className="input-form"
                        type="password"
                        id="password"
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

                <Button id="login-btn" className="btn" buttonTitle="Login" />

                <div className="or-divide">
                    <span>Or</span>
                </div>

                <div className="btn register-redirect" onClick={toggleRegister(true)}>
                    Register
                </div>
            </Form>
        </>
    );
};

export default LoginForm;
