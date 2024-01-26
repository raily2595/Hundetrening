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
export declare type KursUpdateFormInputValues = {
    kursholder?: string;
};
export declare type KursUpdateFormValidationValues = {
    kursholder?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KursUpdateFormOverridesProps = {
    KursUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    kursholder?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KursUpdateFormProps = React.PropsWithChildren<{
    overrides?: KursUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kurs?: any;
    onSubmit?: (fields: KursUpdateFormInputValues) => KursUpdateFormInputValues;
    onSuccess?: (fields: KursUpdateFormInputValues) => void;
    onError?: (fields: KursUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KursUpdateFormInputValues) => KursUpdateFormInputValues;
    onValidate?: KursUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KursUpdateForm(props: KursUpdateFormProps): React.ReactElement;
