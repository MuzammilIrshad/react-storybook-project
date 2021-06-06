import React from 'react';


export type Props = {
    task: {
        id: string,
        title: string,
        state: string
    },
}

export default function ArchiveTask({ task: { id, title, state } }: { task: Props["task"] }) {
    console.log(title);
   // const dispatch = useDispatch();
    //const archiveTasks = useSelector(selectCount);
    return (
        <div className={`list-item "TASK_ARCHIVED"`}>
            
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" style={{textDecorationLine: "line-through"}} />
            </div>

          </div>
    );
}