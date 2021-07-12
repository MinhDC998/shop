/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, createContext } from 'react';
import {
    IForm,
    ILabel,
    INormalInput,
    IWrapperSectionInput,
    ICommonState,
    ICustomUseInput,
    IButton,
} from '@elements/form/form.types';

const initialContext: ICustomUseInput = {
    formAction: {
        state: {},
        onChangeValue: (e: React.ChangeEvent<HTMLInputElement>): void => {},
    },
    formAttributes: {
        values: {
            isOnSubmit: false,
        },
        actions: {
            toggleSubmitting: (isSubmit: boolean) => {},
        },
    },
};

const reducer = <T,>(state: T, newState: T): any => {
    return { ...state, ...newState };
};

const useInput = (initialState: ICommonState): ICustomUseInput['formAction'] => {
    const [state, setState] = React.useReducer(reducer, initialState);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name;
        const value = e.target.value;

        setState({ [name]: value });
    };

    return { state, onChangeValue };
};

const useFormAttrs = (): ICustomUseInput['formAttributes'] => {
    const initialFormAttrs: ICustomUseInput['formAttributes']['values'] = {
        isOnSubmit: false,
    };

    const [attrs, setAttrs] = React.useReducer(reducer, initialFormAttrs);

    const toggleSubmitting = (isSubmit: boolean): void => {
        setAttrs({ isOnSubmit: isSubmit });
    };

    return {
        values: attrs,
        actions: {
            toggleSubmitting,
        },
    };
};

const FormContext = createContext(initialContext);

export const Form: FC<IForm> = (props: IForm) => {
    const { children, formProps, id, className } = props;
    const { state, onChangeValue } = useInput(formProps.initialState);
    const { values, actions } = useFormAttrs();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        actions.toggleSubmitting(true);
        formProps.onSubmit(state, actions);
    };

    return (
        <FormContext.Provider value={{ formAction: { state, onChangeValue }, formAttributes: { values, actions } }}>
            <form onSubmit={onSubmit} id={id} className={className}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export const Input: FC<INormalInput> = ({ type, name, className, id }: INormalInput) => {
    const { formAction } = React.useContext(FormContext);
    return <input type={type} name={name} id={id} className={className} onChange={formAction.onChangeValue} />;
};

export const Label: FC<ILabel> = ({ htmlFor, labelTitle, icon, className }: ILabel) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {icon} {labelTitle}
        </label>
    );
};

export const WrapperSectionInput: FC<IWrapperSectionInput> = ({ id, className, children }: IWrapperSectionInput) => {
    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
};

export const Button: FC<IButton> = ({ className, id, buttonTitle }: IButton) => {
    const { formAttributes } = React.useContext(FormContext);
    return (
        <button
            type="submit"
            disabled={formAttributes.values.isOnSubmit}
            className={`${className} ${formAttributes.values.isOnSubmit ? 'loading' : ''} `}
            id={id}>
            {buttonTitle}
        </button>
    );
};
