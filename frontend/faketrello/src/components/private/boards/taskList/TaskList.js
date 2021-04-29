import React from 'react';
import NewTask from '../newTasks/NewTaks'
import {createTask, assignTaksinBoard} from '../../../../api/service'
import { useParams } from 'react-router-dom';
import EmptyTask from '../../boards/taskList/EmptyTasks'



const TaskList = ({taskList}) => {

    const params = useParams();
    const _id = params._id;

    const Submit = async content => {
        
        const newTask = await createTask(content)

        const _idTask = newTask.result['_id'];
        
        await assignTaksinBoard(_id, _idTask );
    }

    return (
        <div>
        {taskList.length ? 
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
        :<EmptyTask />}
        </div>
    )
}


export default TaskList;