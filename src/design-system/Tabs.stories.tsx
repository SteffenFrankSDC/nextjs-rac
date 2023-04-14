import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
};

export default meta;
type TabsStory = StoryObj<typeof Tabs>;

export const Basic: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList>
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};

export const Boxed: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList variant="boxed">
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};

export const Lifted: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList variant="lifted">
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};

export const ExtraSmallBordered: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList variant="bordered" scale="xs">
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};

export const SmallLifted: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList variant="lifted" scale="sm">
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};

export const LargeBoxed: TabsStory = {
    render: (args) => (
        <Tabs {...args} >
            <TabList variant="boxed" scale="lg">
                <Tab id="p">Paris</Tab>
                <Tab id="b">Berlin</Tab>
                <Tab id="h">Hanoi</Tab>
            </TabList>
            <TabPanels>
                <TabPanel id="p" className="mt-2">Bonjour!</TabPanel>
                <TabPanel id="b" className="mt-2">Guten Tag!</TabPanel>
                <TabPanel id="h" className="mt-2">Xin chào!</TabPanel>
            </TabPanels>
        </Tabs>),
    args: {
        className: "",
    }
};


