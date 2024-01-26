/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type TreningCreateFormInputValues = {};
export declare type TreningCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TreningCreateFormOverridesProps = {
    TreningCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TreningCreateFormProps = React.PropsWithChildren<{
    overrides?: TreningCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TreningCreateFormInputValues) => TreningCreateFormInputValues;
    onSuccess?: (fields: TreningCreateFormInputValues) => void;
    onError?: (fields: TreningCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TreningCreateFormInputValues) => TreningCreateFormInputValues;
    onValidate?: TreningCreateFormValidationValues;
} & React.CSSProperties>;
export default function TreningCreateForm(props: TreningCreateFormProps): React.ReactElement;
