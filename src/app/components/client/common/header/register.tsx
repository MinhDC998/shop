import React, { FC } from 'react';
import { IToggleForm } from '@client/common/header/header.types';
import { Form, Input, Label, WrapperSectionInput, Button } from '@elements/form/form';
import { BiUser, BiLock, BiPhone, BiMehBlank } from 'react-icons/bi';

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

                <WrapperSectionInput className="wrapper-input">
                    <Label
                        htmlFor="confirmPassword"
                        className="label-form"
                        labelTitle="Confirm Password"
                        icon={<BiLock />}
                    />
                    <Input
                        name="confirmPassword"
                        className="input-form"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                    />
                </WrapperSectionInput>

                <WrapperSectionInput className="wrapper-input">
                    <Label htmlFor="fullName" className="label-form" labelTitle="Full name" icon={<BiMehBlank />} />
                    <Input
                        name="fullName"
                        className="input-form"
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                    />
                </WrapperSectionInput>

                <WrapperSectionInput className="wrapper-input">
                    <Label htmlFor="phone" className="label-form" labelTitle="Phone" icon={<BiPhone />} />
                    <Input
                        name="phone"
                        className="input-form"
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                    />
                </WrapperSectionInput>

                <Button id="login-btn" className="btn" buttonTitle="Register" />

                <div className="or-divide">
                    <span>Or</span>
                </div>

                <div className="btn register-redirect" onClick={toggleRegister(false)}>
                    Back to login
                </div>
            </Form>
        </>
    );
};

export default Register;
