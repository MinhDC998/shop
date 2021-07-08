/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, createContext } from 'react';
import { IForm, ILabel, INormalInput, IWrapperSectionInput, ICommonState } from '@elements/form/form.types';

const useInput = (
    initialState: ICommonState,
): {
    state: ICommonState;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
    const reducer = (state: ICommonState, newState: ICommonState) => ({ ...state, ...newState });
    const [state, setState] = React.useReducer(reducer, initialState);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name;
        const value = e.target.value;

        setState({ [name]: value });
    };

    return { state, onChangeValue };
};

const FormContext = createContext({ state: {}, onChangeValue: (e: React.ChangeEvent<HTMLInputElement>): void => {} });

export const Form: FC<IForm> = (props: IForm) => {
    const { children, formProps, styleId } = props;
    const { state, onChangeValue } = useInput(formProps.initialState);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        formProps.onSubmit(state);
    };

    return (
        <FormContext.Provider value={{ state, onChangeValue }}>
            <form onSubmit={onSubmit} id={styleId}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export const Input: FC<INormalInput> = ({ type, name, className, styleId }: INormalInput) => {
    const { onChangeValue } = React.useContext(FormContext);
    return <input type={type} name={name} id={styleId} className={className} onChange={onChangeValue} />;
};

export const Label: FC<ILabel> = ({ labelFor, labelTitle, icon, className }: ILabel) => {
    return (
        <label htmlFor={labelFor} className={className}>
            {icon} {labelTitle}
        </label>
    );
};

export const WrapperSectionInput: FC<IWrapperSectionInput> = ({
    styleId,
    className,
    children,
}: IWrapperSectionInput) => {
    return (
        <div id={styleId} className={className}>
            {children}
        </div>
    );
};
