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
export declare type TreningUpdateFormInputValues = {};
export declare type TreningUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TreningUpdateFormOverridesProps = {
    TreningUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TreningUpdateFormProps = React.PropsWithChildren<{
    overrides?: TreningUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trening?: any;
    onSubmit?: (fields: TreningUpdateFormInputValues) => TreningUpdateFormInputValues;
    onSuccess?: (fields: TreningUpdateFormInputValues) => void;
    onError?: (fields: TreningUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TreningUpdateFormInputValues) => TreningUpdateFormInputValues;
    onValidate?: TreningUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TreningUpdateForm(props: TreningUpdateFormProps): React.ReactElement;
