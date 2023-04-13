import React from "react";
import {
    Input as RACInput,
} from "react-aria-components";

import type {
    InputProps,
    InputRenderProps,
} from "react-aria-components";

import type { Semantics, Scale } from "./props";

type InputStyleProps = {
    semantics?: Semantics,
    scale?: Scale,
}

const semanticsMapping = {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    warning: "input-warning",
    error: "input-error",
    info: "input-info"
}

const scaleMapping = {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg",
}

export function Input({ semantics, scale, className, ...props }: InputStyleProps & InputProps) {

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
            semantics ? semanticsMapping[semantics] : "",
            scale ? scaleMapping[scale] : "",
            userClassNameFn(props)
        ].join(" ");
    }

    return <RACInput
        className={classNameFn}
        {...props}
    />
}
