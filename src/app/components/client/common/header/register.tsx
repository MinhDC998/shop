import React, { FC } from 'react';
import { IToggleForm } from '@client/common/header/header.types';
import { Form, Input, Label, WrapperSectionInput, Button } from '@elements/form/form';
import { BiUser, BiLock } from 'react-icons/bi';

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
};

const Register: FC<IToggleForm> = ({ isShow, toggleRegister }: IToggleForm) => {
    const onSubmit = () => {
        console.log(1);
    };

    return (
        <>
            <Form
                formProps={{ initialState, onSubmit }}
                id="register-form"
                className={`${isShow ? 'register-show' : ''}`}>
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

                <Button id="login-btn" className="btn" buttonTitle="Login" />

                <div className="or-divide">
                    <span>Or</span>
                </div>

                <div className="btn" id="register-redirect" onClick={toggleRegister(false)}>
                    Register
                </div>
            </Form>
        </>
    );
};

export default Register;
