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
export declare type BrukerCreateFormInputValues = {
    navn?: string;
};
export declare type BrukerCreateFormValidationValues = {
    navn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrukerCreateFormOverridesProps = {
    BrukerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrukerCreateFormProps = React.PropsWithChildren<{
    overrides?: BrukerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BrukerCreateFormInputValues) => BrukerCreateFormInputValues;
    onSuccess?: (fields: BrukerCreateFormInputValues) => void;
    onError?: (fields: BrukerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrukerCreateFormInputValues) => BrukerCreateFormInputValues;
    onValidate?: BrukerCreateFormValidationValues;
} & React.CSSProperties>;
export default function BrukerCreateForm(props: BrukerCreateFormProps): React.ReactElement;
