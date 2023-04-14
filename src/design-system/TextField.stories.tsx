import type { Meta, StoryObj } from '@storybook/react';

import { TextField, Label, Text } from './TextField';
import { Input } from "./Input";

const meta: Meta<typeof TextField> = {
    component: TextField,
};

export default meta;
type TextFieldStory = StoryObj<typeof TextField>;

export const Basic: TextFieldStory = {
    render: (args) => (
        <TextField {...args}>
            <Label>Please enter something</Label>
            <Input />
        </TextField>),
    args: {
        className: "w-64",
        isReadOnly: false,
        isDisabled: false,
        validationState: "valid"
    }
};

export const WithAltText: TextFieldStory = {
    render: (args) => (
        <TextField  {...args}>
            <Label>
                Label
                <Text slot="description">description</Text>
            </Label>
            <Input />
            <Label>
                <Text slot="description">description</Text>
                <Text slot="errorMessage"> error message</Text>
            </Label>
        </TextField>),
    args: {
        className: "w-64",
        isReadOnly: false,
        isDisabled: false,
        validationState: "valid"
    }
};



