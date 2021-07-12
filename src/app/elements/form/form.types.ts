import React, { FC } from 'react';

interface IFormCommon {
    className?: string
    id?: string
}

export type ICommonState = Record<string, string | number | boolean>;

export interface IForm extends IFormCommon {
    children: React.ReactNode
    formProps: {
        initialState: Record<string, string | number | boolean>
        onSubmit: any
    }
}

export interface INormalInput extends IFormCommon {
    handleChange?: any
    name: string
    type: string
    placeholder: string
}

export interface ILabel extends IFormCommon {
    htmlFor: string
    labelTitle: string
    icon?: JSX.Element
}

export interface IWrapperSectionInput extends IFormCommon {
    children: React.ReactNode
}

export interface ICustomUseInput {
    formAction: {
        state: ICommonState;
        onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
    formAttributes: {
        values: {
            isOnSubmit: boolean
        }
        actions: {
            toggleSubmitting: (isSubmit: boolean) => void
        }
    }
}

export interface IButton extends IFormCommon {
    buttonTitle: string
}