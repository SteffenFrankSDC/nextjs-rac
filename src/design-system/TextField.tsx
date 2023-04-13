import React from "react";
import {
    TextField as RACTextField,
    Label as RACLabel,
    Text as RACText
} from "react-aria-components";

import type {
    TextFieldProps,
    LabelProps,
    TextProps
} from "react-aria-components";

export function TextField({
    isDisabled,
    isReadOnly,
    validationState,
    // isRequired,
    className,
    children,
    ...props }: TextFieldProps) {

    const classNameString = [
        "form-control",
        validationState === "invalid" ? "[&>input]:input-error" : "",
        className
    ].join(" ");

    const childrenToRender = isReadOnly || isDisabled ?
        React.Children.map(children,
            child => React.isValidElement(child) ?
                React.cloneElement(child as React.ReactElement<any>, { readOnly: isReadOnly, disabled: isDisabled })
                : child
        ) : children;

    return <RACTextField
        className={classNameString}
        {...props}
    >
        {childrenToRender}
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