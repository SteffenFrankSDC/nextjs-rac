import React from "react";
import { Button as RACButton } from "react-aria-components";

import type { ButtonProps, ButtonRenderProps } from "react-aria-components";

export function Button({ children, className, ...props }: ButtonProps) {

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
            isDisabled ? "btn-disabled" : "",
            isPressed ? "btn-active" : "",
            userClassNameFn(props)
        ].join(" ");
    }

    return <RACButton
        className={classNameFn}
        {...props}
    >
        {children}
    </RACButton >;
}