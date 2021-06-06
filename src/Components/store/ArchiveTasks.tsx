import React from 'react';


import ArchiveTask from './ArchiveTask';
//import { Props } from './Task';
//import { Props } from './Task';

type Props = {
    tasks: {
        id: string,
        title: string,
        state: string
    }[],
    loading: boolean
}

const ArchiveTasks: React.FC<Props> = ({ loading, tasks }) => {
    console.log(tasks);

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }
   
    return (
        <div className="list-items">
            {tasks.map(task => (
                <ArchiveTask key={task.id} task={task} />
            ))}

        </div>
    );
}
export default ArchiveTasks;