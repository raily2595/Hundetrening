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
export declare type OektUpdateFormInputValues = {
    fokus?: string;
    egenvurdering?: string;
    notat?: string;
    hundID?: string;
};
export declare type OektUpdateFormValidationValues = {
    fokus?: ValidationFunction<string>;
    egenvurdering?: ValidationFunction<string>;
    notat?: ValidationFunction<string>;
    hundID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OektUpdateFormOverridesProps = {
    OektUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fokus?: PrimitiveOverrideProps<TextFieldProps>;
    egenvurdering?: PrimitiveOverrideProps<TextFieldProps>;
    notat?: PrimitiveOverrideProps<TextFieldProps>;
    hundID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OektUpdateFormProps = React.PropsWithChildren<{
    overrides?: OektUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oekt?: any;
    onSubmit?: (fields: OektUpdateFormInputValues) => OektUpdateFormInputValues;
    onSuccess?: (fields: OektUpdateFormInputValues) => void;
    onError?: (fields: OektUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OektUpdateFormInputValues) => OektUpdateFormInputValues;
    onValidate?: OektUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OektUpdateForm(props: OektUpdateFormProps): React.ReactElement;
