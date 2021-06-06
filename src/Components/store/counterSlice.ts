import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { arch } from 'os';

// Define a type for the slice state
type task = {
    id: string;
    title: string;
    state: string
}

interface CounterState {
    defaultTasks: task[],
    archiveTasks: (task | null)[]
}

// Define the initial state using that type
const initialState: CounterState = {
    defaultTasks :[
        { id: '1', title: 'Something', state: 'TASK_INBOX' },
        { id: '2', title: 'Something more', state: 'TASK_INBOX' },
        { id: '3', title: 'Something else', state: 'TASK_INBOX' },
        { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    ],
    archiveTasks:[]
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        onArchiveTasks: (state, action: PayloadAction<string>) => {
            console.log(action);
            console.log(state);
            const archiveTask = state.defaultTasks.filter((task) => task.id === action.payload && { ...task, state: "TASK_ARCHIVED" });
            console.log(archiveTask);
            state.archiveTasks.push(archiveTask[0]);
            state.defaultTasks = state.defaultTasks.filter((task) => task.id != action.payload);
            
        },
        onPinTasks: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.defaultTasks = state.defaultTasks.map((task) => task.id === action.payload ? { ...task, state: "TASK_PINNED" } : task);
            console.log(state.defaultTasks)
        }
    },
})

export const { onArchiveTasks, onPinTasks } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tasks;

export default counterSlice.reducer