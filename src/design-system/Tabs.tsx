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
            // for vertical orientation, stack tabs in a flex-box column and shift labels to the left
            orientation === "vertical" ? "w-fit flex flex-col [&>.react-aria-Tab]:justify-start" : "",

            // boxed style is applied on the tabs-list level
            variant === "boxed" ? "tabs-boxed" : "",

            // bordered style must be applied to each individual tab
            variant === "bordered" ? "[&>.react-aria-Tab]:tab-bordered" : "",

            // for vertical bordered tabs, put the border on the right
            orientation === "vertical" && variant === "bordered"
                ? "[&>.react-aria-Tab]:border-b-0 [&>.react-aria-Tab]:border-r-2"
                : "",

            // lifted style must be applied to each individual tab
            orientation === "horizontal" && variant === "lifted" ? "[&>.react-aria-Tab]:tab-lifted" : "",

            // for vertical lifted tabs, we must completely re-write the styles 
            orientation === "vertical" && variant === "lifted"
                ?
                "[&>.react-aria-Tab]:border " +
                "[&>.react-aria-Tab]:p-[--tab-padding] " +
                "[&>.react-aria-Tab]:box-content " +
                "[&>.react-aria-Tab[aria-selected='true']]:!border-[--tab-border-color] " +
                "[&>.react-aria-Tab[aria-selected='true']]:!border-r-transparent " +
                "[&>.react-aria-Tab[aria-selected='true']]:!rounded-l-[--tab-radius] " +
                "[&>.react-aria-Tab[aria-selected='true']]:!bg-[--tab-bg] " +
                "[&>.react-aria-Tab[aria-selected='false']]:!border-transparent " +
                "[&>.react-aria-Tab[aria-selected='false']]:!border-r-[--tab-border-color] "
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

