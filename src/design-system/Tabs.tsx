import React from "react";
import {
    Tabs as RACTabs,
    TabList as RACTabList,
    Tab as RACTab,
    TabPanels as RACTabPanels,
    TabPanel as RACTabPanel,
} from 'react-aria-components';

import type {
    TabsProps,
    TabListProps,
    TabProps,
    TabPanelsProps,
    TabPanelProps,
    TabRenderProps,
    TabsRenderProps
} from "react-aria-components";
import type { Scale } from "./props";

export function Tabs({
    children,
    className,
    orientation = "horizontal",
    ...props }: TabsProps) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: TabsRenderProps) => {
        const {
            orientation
        } = props;
        return [
            "flex",
            orientation === "vertical" ? "flex-row" : "flex-col",
            userClassNameFn(props)
        ].join(" ");
    }

    return (
        <RACTabs {...props} orientation={orientation} className={classNameFn}>
            {children}
        </RACTabs>
    );
}

type TabListStyleProps = {
    scale?: Scale,
    variant?: "bordered" | "lifted" | "boxed"
}

export function TabList<T extends object>({
    children,
    className,
    scale,
    variant = "bordered",
    ...props }: TabListProps<T> & TabListStyleProps) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: TabsRenderProps) => {
        const {
            orientation
        } = props;
        return [
            orientation === "vertical" ? "w-fit flex flex-col [&>.react-aria-Tab]:justify-start" : "",
            variant === "boxed" ? "tabs-boxed" : "",
            variant === "bordered" ? "[&>.react-aria-Tab]:tab-bordered" : "",
            variant === "lifted" ? "[&>.react-aria-Tab]:tab-lifted" : "",
            orientation === "vertical" && variant === "bordered"
                ? "[&>.react-aria-Tab]:border-b-0 [&>.react-aria-Tab]:border-r-2"
                : "",
            scale === "xs" ? "[&>.react-aria-Tab]:tab-xs" : "",
            scale === "sm" ? "[&>.react-aria-Tab]:tab-sm" : "",
            scale === "md" ? "[&>.react-aria-Tab]:tab-md" : "",
            scale === "lg" ? "[&>.react-aria-Tab]:tab-lg" : "",
            userClassNameFn(props)
        ].join(" ");
    }

    return (
        <RACTabList {...props} className={classNameFn}>
            {children}
        </RACTabList>
    );
}

export function Tab({ children, className, ...props }: TabProps & TabListStyleProps) {

    const userClassNameFn = typeof className === "function" ? className : () => className;

    const classNameFn = (props: TabRenderProps) => {

        const {
            // isHovered,
            // isPressed,
            isSelected,
            // isFocused,
            // isFocusVisible,
            isDisabled,
        } = props;

        return [
            "react-aria-Tab tab",
            isSelected ? "tab-active" : "",
            isDisabled ? "tab-disabled" : "",
            userClassNameFn(props)
        ].join(" ")
    }
    return (
        <RACTab {...props} className={classNameFn}>
            {children}
        </RACTab>
    );
}

export function TabPanels<T extends object>({ ...props }: TabPanelsProps<T>) {
    return <RACTabPanels
        {...props}
    />;
}

export function TabPanel({ children, className, ...props }: TabPanelProps) {

    const classNameString = [
        "",
        className
    ].join(" ");

    return (
        <RACTabPanel {...props} className={classNameString}>
            {children}
        </RACTabPanel>
    );
}

