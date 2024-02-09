/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HendelseUpdateFormInputValues = {
    navn?: string;
    sted?: string;
    miljoe?: string;
    dato?: string;
    type?: string;
    handleliste?: string;
    pakkeliste?: string;
};
export declare type HendelseUpdateFormValidationValues = {
    navn?: ValidationFunction<string>;
    sted?: ValidationFunction<string>;
    miljoe?: ValidationFunction<string>;
    dato?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    handleliste?: ValidationFunction<string>;
    pakkeliste?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HendelseUpdateFormOverridesProps = {
    HendelseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    sted?: PrimitiveOverrideProps<TextFieldProps>;
    miljoe?: PrimitiveOverrideProps<TextFieldProps>;
    dato?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    handleliste?: PrimitiveOverrideProps<TextFieldProps>;
    pakkeliste?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HendelseUpdateFormProps = React.PropsWithChildren<{
    overrides?: HendelseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hendelse?: any;
    onSubmit?: (fields: HendelseUpdateFormInputValues) => HendelseUpdateFormInputValues;
    onSuccess?: (fields: HendelseUpdateFormInputValues) => void;
    onError?: (fields: HendelseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HendelseUpdateFormInputValues) => HendelseUpdateFormInputValues;
    onValidate?: HendelseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HendelseUpdateForm(props: HendelseUpdateFormProps): React.ReactElement;
