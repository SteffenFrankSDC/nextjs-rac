import React from "react";
import {
    ListBox as RACListBox,
    Item as RACItem,
    Section as RACSection,
    Header as RACHeader,
    Text as RACText
} from "react-aria-components";

import type { ListBoxProps, ListBoxRenderProps, ItemProps, ItemRenderProps, SectionProps, TextProps } from "react-aria-components";

export function ListBox<T extends object>({ children, className, ...props }: ListBoxProps<T>) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: ListBoxRenderProps) => {
        const {
            // isEmpty,
            // isFocused,
            // isFocusVisible,
            // isDropTarget
        } = props;
        return [
            "menu border p-2",
            userClassNameFn(props)
        ].join(" ");
    }

    return (
        <RACListBox {...props} className={classNameFn}>
            {children}
        </RACListBox>
    );
}

export function Item<T extends object>({ children, className, ...props }: ItemProps<T>) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: ItemRenderProps) => {

        const {
            // isHovered,
            // isPressed,
            isSelected,
            // isFocused,
            // isFocusVisible,
            isDisabled,
            // selectionMode,
            // selectionBehavior,
            // allowsDragging,
            // isDragging,
            // isDropTarget
        } = props;
        return [
            "btn btn-ghost font-normal h-fit min-h-fit flex-col items-start text-left gap-1 my-1 p-1 ",
            isSelected ? "btn-active" : "",
            isDisabled ? "btn-disabled" : "",
            userClassNameFn(props)
        ].join(" ");
    }
    return (
        <RACItem {...props} className={classNameFn}>
            {children}
        </RACItem>
    );
}

export function Text({ className, slot, ...props }: TextProps) {

    const classNameString = [
        "font-normal",
        slot == "description" ? "font-thin text-xs" : "",
        className
    ].join(" ");

    return <RACText
        className={classNameString}
        slot={slot}
        {...props}
    />;
}


export function Section<T extends object>({ children, className, ...props }: SectionProps<T>) {

    const classNameString = [
        "menu my-1",
        className
    ].join(" ");

    return (
        <RACSection {...props} className={classNameString}>
            {children}
        </RACSection>
    );
}

export function Header({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {

    const classNameString = [
        "text-xs uppercase tracking-widest px-1 pt-2 pb-1",
        className
    ].join(" ");

    return (
        <RACHeader {...props} className={classNameString}>
            {children}
        </RACHeader>
    );
}