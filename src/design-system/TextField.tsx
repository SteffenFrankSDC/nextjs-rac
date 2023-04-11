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


export function TextField({ children, className, ...props }: TextFieldProps) {

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

export function Label({ className, ...props }: LabelProps) {

    const classNameString = [
        "label label-text",
        className
    ].join(" ");

    return <RACLabel
        className={classNameString}
        {...props}
    />;
}

export function Input({ className, ...props }: InputProps) {

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

export function Text({ className, slot, ...props }: TextProps) {

    const classNameString = [
        "label-text-alt font-thin text-xs",
        slot == "errorMessage" ? "text-error" : "",
        className
    ].join(" ");

    return <RACText
        className={classNameString}
        slot={slot}
        {...props}
    />;
}