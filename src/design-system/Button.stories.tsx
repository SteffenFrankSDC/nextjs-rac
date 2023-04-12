import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-primary" }
};

export const Secondary: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-secondary" }
};

export const Accent: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-accent" }
};

export const Info: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-info" }
};

export const Success: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-success" }
};

export const Warning: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-warning" }
};

export const Error: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-error" }
};

export const Ghost: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-ghost" }
};

export const Link: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-link" }
};

export const Outline: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-outline" }
};

export const Active: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-active" }
};

export const Disabled: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-disabled" }
};

export const Glass: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "glass" }
};

export const Loading: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "loading" }
};

export const NoAnimation: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "no-animation" }
};

export const Large: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-lg" }
};

export const Small: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-sm" }
};

export const ExtraSmall: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-xs" }
};

export const Wide: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-wide" }
};

export const Block: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-block" }
};

export const Circle: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-circle" }
};

export const Square: Story = {
    render: (args) => <Button {...args}>Label</Button>,
    args: { className: "btn-square" }
};