/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HendelseCreateFormInputValues = {
    navn?: string;
    sted?: string;
    miljoe?: string;
    dato?: string;
    type?: string;
    handleliste?: string;
    pakkeliste?: string;
};
export declare type HendelseCreateFormValidationValues = {
    navn?: ValidationFunction<string>;
    sted?: ValidationFunction<string>;
    miljoe?: ValidationFunction<string>;
    dato?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    handleliste?: ValidationFunction<string>;
    pakkeliste?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HendelseCreateFormOverridesProps = {
    HendelseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    sted?: PrimitiveOverrideProps<TextFieldProps>;
    miljoe?: PrimitiveOverrideProps<TextFieldProps>;
    dato?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    handleliste?: PrimitiveOverrideProps<TextAreaFieldProps>;
    pakkeliste?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type HendelseCreateFormProps = React.PropsWithChildren<{
    overrides?: HendelseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HendelseCreateFormInputValues) => HendelseCreateFormInputValues;
    onSuccess?: (fields: HendelseCreateFormInputValues) => void;
    onError?: (fields: HendelseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HendelseCreateFormInputValues) => HendelseCreateFormInputValues;
    onValidate?: HendelseCreateFormValidationValues;
} & React.CSSProperties>;
export default function HendelseCreateForm(props: HendelseCreateFormProps): React.ReactElement;
