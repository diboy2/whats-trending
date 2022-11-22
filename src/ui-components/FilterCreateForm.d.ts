/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FilterCreateFormInputValues = {
    text?: string;
};
export declare type FilterCreateFormValidationValues = {
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilterCreateFormOverridesProps = {
    FilterCreateFormGrid?: FormProps<GridProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilterCreateFormProps = React.PropsWithChildren<{
    overrides?: FilterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FilterCreateFormInputValues) => FilterCreateFormInputValues;
    onSuccess?: (fields: FilterCreateFormInputValues) => void;
    onError?: (fields: FilterCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FilterCreateFormInputValues) => FilterCreateFormInputValues;
    onValidate?: FilterCreateFormValidationValues;
}>;
export default function FilterCreateForm(props: FilterCreateFormProps): React.ReactElement;
