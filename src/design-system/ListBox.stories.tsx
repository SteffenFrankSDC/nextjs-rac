import type { Meta, StoryObj } from '@storybook/react';

import { ListBox, Section, Item, Text, Header } from './ListBox';
import { useListData } from 'react-stately';
import { useDragAndDrop } from 'react-aria-components';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
};

export default meta;
type ListBoxStory = StoryObj<typeof ListBox>;

export const Basic: ListBoxStory = {
    render: (args) => (
        <ListBox {...args} >
            <Item>London</Item>
            <Item>Paris</Item>
            <Item>Berlin</Item>
            <Item>Hanoi</Item>
        </ListBox>),
    args: {
        className: "w-64",
        selectionMode: "single",
    }
};

export const Sections: ListBoxStory = {
    render: (args) => (
        <ListBox {...args} >
            <Section>
                <Header>Nice cities</Header>
                <Item>Hamburg</Item>
                <Item>Berlin</Item>
                <Item>Da Nang</Item>
            </Section>
            <Section>
                <Header>Other cities</Header>
                <Item>Dortmund</Item>
                <Item>Rome</Item>
            </Section>
        </ListBox>),
    args: {
        className: "w-64",
        selectionMode: "multiple",
    }
};

export const DisabledItems: ListBoxStory = {
    render: (args) => (
        <ListBox {...args} >
            <Section>
                <Header>Nice cities</Header>
                <Item id="hh">Hamburg</Item>
                <Item id="b">Berlin</Item>
                <Item id="dn">Da Nang</Item>
            </Section>
            <Section>
                <Header>Other cities</Header>
                <Item id="do">Dortmund</Item>
                <Item id="ro">Rome</Item>
            </Section>
        </ListBox>),
    args: {
        className: "w-64",
        selectionMode: "multiple",
        disabledKeys: ["do", "b"]
    }
};

export const ComplexItems: ListBoxStory = {
    render: (args) => (
        <ListBox {...args} >
            <Section>
                <Header>Nice cities</Header>
                <Item id="hh">
                    <Text slot="label">Hamburg</Text>
                    <Text slot="description">Germany</Text>
                </Item>
                <Item id="b">
                    <Text slot="label">Berlin</Text>
                    <Text slot="description">Germany</Text>
                </Item>
                <Item id="dn">
                    <Text slot="label">Da Nang</Text>
                    <Text slot="description">Vietnam</Text>
                </Item>
            </Section>
            <Section>
                <Header>Other cities</Header>
                <Item id="do">
                    <Text slot="label">Dortmund</Text>
                    <Text slot="description">Germany</Text>
                </Item>
                <Item id="ro">
                    <Text slot="label">Rome</Text>
                    <Text slot="description">Italy</Text>
                </Item>
            </Section>
        </ListBox>),
    args: {
        className: "w-64",
        selectionMode: "multiple",
        disabledKeys: ["do", "b"]
    }
};

export const Empty: ListBoxStory = {
    render: (args) => (
        <ListBox {...args} >
        </ListBox>),
    args: {
        className: "w-64",
        renderEmptyState: () => <div className='text-xs italic text-center m-2'>there is nothing here</div>
    }
};

function ReorderableListBox() {

    const list = useListData({
        initialItems: [
            { id: 1, name: 'Hamburg' },
            { id: 2, name: 'Berlin' },
            { id: 3, name: 'Da Nang' },
            { id: 4, name: 'Dortmund' },
            { id: 5, name: 'Rome' }
        ]
    });

    const { dragAndDropHooks } = useDragAndDrop({
        getItems: (keys) =>
            [...keys].map((key) => ({ 'text/plain': list.getItem(key).name })),
        onReorder(e) {
            if (e.target.dropPosition === 'before') {
                list.moveBefore(e.target.key, e.keys);
            } else if (e.target.dropPosition === 'after') {
                list.moveAfter(e.target.key, e.keys);
            }
        }
    });

    return (
        <ListBox
            aria-label="Reorderable list"
            selectionMode="multiple"
            items={list.items}
            dragAndDropHooks={dragAndDropHooks}
            className="w-64"
        >
            {(item) => <Item>{item.name}</Item>}
        </ListBox>
    );
}

export const Reorderable: ListBoxStory = {
    render: () => <ReorderableListBox />,
    args: {}
};


