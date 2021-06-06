import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { TaskList } from './Components/TaskList';
import { selectCount } from './Components/store/counterSlice';
import { useSelector } from 'react-redux';
import  TaskList  from './Components/TaskList';
import ArchiveTasks from './Components/store/ArchiveTasks';

function App() {

    const count = useSelector(selectCount);
    console.log(count.archiveTasks);

    return (
        <h1>
            {count.defaultTasks && (
           <div>
                    <h2>TASK BOX</h2>
                    <TaskList loading={false} tasks={count.defaultTasks} />
            </div>
                    )}
            {count.archiveTasks ? (
                <div>
                    <h2>Archived Tasks</h2>
                    <ArchiveTasks loading={false} tasks={count.archiveTasks} />
                </div>
             ) : ""}
        </h1>
     );
}

export default App;
