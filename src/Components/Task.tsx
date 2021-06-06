import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onArchiveTasks, onPinTasks, selectCount } from '../Components/store/counterSlice';

export type Props = {
    task: {
        id: string,
        title: string,
        state: string
    },
}

export default function Task({ task: { id, title, state }}: { task: Props["task"]}) {
    console.log(id);
    const dispatch = useDispatch();
    //const archiveTasks = useSelector(selectCount);
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => dispatch(onArchiveTasks(id))} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => dispatch(onPinTasks(id))}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
            
        </div>
    );
}