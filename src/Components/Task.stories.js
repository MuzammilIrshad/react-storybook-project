
import React from 'react';
import { Provider } from 'react-redux';
import Task from './Task';
import { action } from '@storybook/addon-actions';


const store = {
    getState: () => {
       
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};


type arg = {
    id: string,
    title: string,
    state: string
}

export default {
    component: Task,
    title: 'Task',
    decorators: [story => <Provider store={store}> <div style={{ padding: '3rem' }}>{story()}</div></Provider>],
};

const Template = (args:arg) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
}


export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
}
