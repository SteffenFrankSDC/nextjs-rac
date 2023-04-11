import React from "react";
import {
    TextField as RACTextField,
    Label as RACLabel,
    Input as RACInput,
    Text as RACText
} from "react-aria-components";

import type {
    TextFieldProps,
    LabelProps,
    InputProps,
    InputRenderProps,
    TextProps
} from "react-aria-components";
import type { ReactNode, FC } from "react";

type RACTextFieldProps = {
    children?: ReactNode | ((values: InputProps) => ReactNode),
    className?: string
} & TextFieldProps & React.RefAttributes<HTMLDivElement>

type RACLabelProps = {
    className?: string
} & LabelProps & React.RefAttributes<HTMLLabelElement>

type RACInputProps = {
    className?: string | ((values: InputRenderProps) => string)
} & InputProps & React.RefAttributes<HTMLInputElement>

type RACTextProps = {
    className?: string,
    slot: "errorMessage" | "description"
} & TextProps & React.RefAttributes<HTMLElement>


export const TextField:
    FC<RACTextFieldProps> =
    ({ children, className, ...props }) => {

        const classNameString = [
            "form-control",
            className
        ].join(" ");

        return <RACTextField
            className={classNameString}
            {...props}
        >
            {children}
        </RACTextField >;
    }

export const Label:
    FC<RACLabelProps> =
    ({ className, ...props }) => {

        const classNameString = [
            "label label-text",
            className
        ].join(" ");

        return <RACLabel
            className={classNameString}
            {...props}
        />;
    }

export const Input: FC<RACInputProps> = ({ className, ...props }) => {
    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: InputRenderProps) => {
        const {
            // isDisabled,
            // isHovered,
            // isFocused,
            // isFocusVisible,
        } = props;
        return [
            "input input-bordered",
            userClassNameFn(props)
        ].join(" ");
    }

    return <RACInput
        className={classNameFn}
        {...props}
    />
}

export const Text:
    FC<RACTextProps> =
    ({ className, slot, ...props }) => {

        const classNameString = [
            "label-text-alt",
            slot == "errorMessage" ? "text-error" : "text-neutral",
            className
        ].join(" ");

        return <RACText
            className={classNameString}
            slot={slot}
            {...props}
        />;
    }