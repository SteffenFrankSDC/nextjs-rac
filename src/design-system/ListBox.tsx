import React from "react";
import {
    ListBox as RACListBox,
    Item as RACItem,
    Section as RACSection,
    Header as RACHeader,
    Text as RACText
} from "react-aria-components";

import type {
    ListBoxProps,
    ListBoxRenderProps,
    ItemProps,
    ItemRenderProps,
    SectionProps,
    TextProps
} from "react-aria-components";

type ListBoxStyleProps = {
    hasBorder?: boolean
}

export function ListBox<T extends object>({
    children,
    hasBorder = true,
    className,
    ...props }: ListBoxStyleProps & ListBoxProps<T>) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: ListBoxRenderProps) => {
        const {
            // isEmpty,
            // isFocused,
            // isFocusVisible,
            // isDropTarget
        } = props;
        return [
            "react-aria-ListBox",
            "menu p-1",
            "[&>.react-aria-DropIndicator]:outline [&>.react-aria-DropIndicator]:outline-accent [&>.react-aria-DropIndicator]:outline [&>.react-aria-DropIndicator]:outline-1",
            "[&>*[data-dragging]]:opacity-20 [&>*[data-dragging]]:bg-transparent",
            hasBorder ? "border" : "",
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
            "react-aria-Item",
            "btn",
            "font-normal h-fit min-h-fit flex-col items-start text-left gap-1 my-1 p-1 border-0",
            isSelected ? "border-l-2 btn-ghost border-l-accent hover:border-l-accent ml-1 pl-1" : "btn-ghost",
            isDisabled ? "btn-disabled bg-transparent" : "",
            userClassNameFn(props)
        ].join(" ")
    }
    return (
        <RACItem {...props} className={classNameFn}>
            {children}
        </RACItem>
    );
}

export function Text({ className, slot, ...props }: TextProps) {

    const classNameString = [
        "react-aria-Text",
        "font-normal",
        slot == "description" ? "font-thin text-xs" : "",
        slot == "label" ? "font-semibold" : "",
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
        "react-aria-Section",
        "menu my-1 group/section",
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
        "react-aria-Header",
        "menu-title pl-1 mt-2 group-first/section:mt-0 pb-1",
        className
    ].join(" ");

    return (
        <RACHeader {...props} className={classNameString}>
            {children}
        </RACHeader>
    );
}