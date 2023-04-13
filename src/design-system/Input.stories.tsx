import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;
type InputStory = StoryObj<typeof Input>;

export const Basic: InputStory = {
    render: (args) => (<Input {...args} />),
    args: { className: "" }
};
