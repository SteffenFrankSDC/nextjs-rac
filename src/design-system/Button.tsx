import React from "react";
import { Button as RACButton } from "react-aria-components";

import type {
    ButtonProps,
    ButtonRenderProps
} from "react-aria-components";

import type { Semantics, Scale } from "./props";

type ButtonStyleProps = {
    semantics?: Semantics
    variant?: "outline" | "ghost" | "link" | "glass",
    shape?: "wide" | "block" | "circle" | "square",
    scale?: Scale,
    isLoading?: boolean,
    isAnimated?: boolean,
}

const semanticsMapping = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    warning: "btn-warning",
    error: "btn-error",
    info: "btn-info"
}

const variantMapping = {
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
    glass: "glass",
}

const ghostSemanticsMapping = {
    primary: "hover:bg-primary hover:text-primary-content",
    secondary: "hover:bg-secondary hover:text-secondary-content",
    accent: "hover:bg-accent hover:text-accent-content",
    warning: "hover:bg-warning hover:text-warning-content",
    error: "hover:bg-error hover:text-error-content",
    info: "hover:bg-info hover:text-info-content"
}

const shapeMapping = {
    wide: "btn-wide",
    block: "btn-block",
    circle: "btn-circle",
    square: "btn-square",
}

const scaleMapping = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
}

export function Button({
    children,
    className,
    semantics,
    variant,
    shape,
    scale,
    isLoading,
    isAnimated = true,
    ...props }: ButtonStyleProps & ButtonProps) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: ButtonRenderProps) => {
        const {
            isDisabled,
            isPressed,
            // isHovered,
            // isFocused,
            // isFocusVisible,
        } = props;
        return [
            "btn",
            semantics ? semanticsMapping[semantics] : "",
            variant ? variantMapping[variant] : "",
            variant === "ghost" && semantics ? ghostSemanticsMapping[semantics] : "",
            shape ? shapeMapping[shape] : "",
            scale ? scaleMapping[scale] : "",
            isLoading ? "loading" : "",
            isAnimated ? "" : "no-animation",
            isDisabled ? "btn-disabled" : "",
            isPressed ? "btn-active" : "",
            userClassNameFn(props)
        ].join(" ");
    }

    return (
        <RACButton className={classNameFn} {...props}>
            {children}
        </RACButton >
    );
}