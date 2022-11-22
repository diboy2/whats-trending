/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Filter } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FilterUpdateFormInputValues = {
    text?: string;
};
export declare type FilterUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilterUpdateFormOverridesProps = {
    FilterUpdateFormGrid?: FormProps<GridProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilterUpdateFormProps = React.PropsWithChildren<{
    overrides?: FilterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    filter?: Filter;
    onSubmit?: (fields: FilterUpdateFormInputValues) => FilterUpdateFormInputValues;
    onSuccess?: (fields: FilterUpdateFormInputValues) => void;
    onError?: (fields: FilterUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FilterUpdateFormInputValues) => FilterUpdateFormInputValues;
    onValidate?: FilterUpdateFormValidationValues;
}>;
export default function FilterUpdateForm(props: FilterUpdateFormProps): React.ReactElement;
