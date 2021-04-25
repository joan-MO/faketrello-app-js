import React from 'react';
import NewTask from '../newTasks/NewTaks'


const TaskList = ({taskList}) => {

    const Submit = content => {
        taskList.push(content);
    }

    return (
        <div style={{marginLeft:"15px"}} className="mt-5">
            {taskList.map(task =>
            <div key={task._id}>
                <div className="card" style={{ width: "219.2px", height: "96px", float:'left',display:'flex', marginLeft:'10px'}}>
                    <div className="card-body">
                        <p className="card-title title-board">{task.title}</p>
                    </div>
                </div>
            </div>
            )}
            <NewTask onSubmit={Submit} />
        </div>
    )
}


export default TaskList;