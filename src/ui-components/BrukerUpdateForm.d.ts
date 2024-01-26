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
export declare type BrukerUpdateFormInputValues = {
    navn?: string;
};
export declare type BrukerUpdateFormValidationValues = {
    navn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrukerUpdateFormOverridesProps = {
    BrukerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrukerUpdateFormProps = React.PropsWithChildren<{
    overrides?: BrukerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bruker?: any;
    onSubmit?: (fields: BrukerUpdateFormInputValues) => BrukerUpdateFormInputValues;
    onSuccess?: (fields: BrukerUpdateFormInputValues) => void;
    onError?: (fields: BrukerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrukerUpdateFormInputValues) => BrukerUpdateFormInputValues;
    onValidate?: BrukerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BrukerUpdateForm(props: BrukerUpdateFormProps): React.ReactElement;
