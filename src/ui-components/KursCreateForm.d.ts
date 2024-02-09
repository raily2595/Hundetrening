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
export declare type KursCreateFormInputValues = {
    kursholder?: string;
};
export declare type KursCreateFormValidationValues = {
    kursholder?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KursCreateFormOverridesProps = {
    KursCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    kursholder?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KursCreateFormProps = React.PropsWithChildren<{
    overrides?: KursCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KursCreateFormInputValues) => KursCreateFormInputValues;
    onSuccess?: (fields: KursCreateFormInputValues) => void;
    onError?: (fields: KursCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: KursCreateFormInputValues) => KursCreateFormInputValues;
    onValidate?: KursCreateFormValidationValues;
} & React.CSSProperties>;
export default function KursCreateForm(props: KursCreateFormProps): React.ReactElement;
