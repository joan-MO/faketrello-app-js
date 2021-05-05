import React from 'react';
import NewTask from '../newTasks/NewTaks'
//import {createTask, assignTaksinBoard} from '../../../../api/service'
//import { useParams } from 'react-router-dom';
import EmptyTask from '../../boards/taskList/EmptyTasks'
import Cards from '../Cards/Cards';



const TaskList = ({taskList, onSubmit, submit}) => {
    //const params = useParams();
    //const _id = params._id;
    const style_emptyCard = { width: "219.2px", height: "96px", float:'left',display:'flex', marginLeft:'10px', backgroundColor:'#ebecf0'};
    const style_notEmptyCard = { width: "219.2px", height: "200px", float:'left',display:'flex', marginLeft:'10px', backgroundColor:'#ebecf0'};

    /*
    const Submit = async content => {
        
        const newTask = await createTask(content)

        const _idTask = newTask.result['_id'];
        
        await assignTaksinBoard(_id, _idTask );

    }
    */
    
    return (
        <div>
        {taskList ? 
        <div style={{marginLeft:"15px"}} className="mt-5">
           {taskList.map(task=>
            <div key={task._id}>
                <div className="card" style={!task.card_tasks.length ? style_emptyCard : style_notEmptyCard }>
                    <div className="card-body">
                        <p className="card-title title-board">{task.title}</p>
                        <Cards task={task} onSubmit={submit}/>
                    </div>
                </div>
            </div>
            )}
            <NewTask onSubmit={onSubmit} />     
        </div>
        :<EmptyTask onSubmit={onSubmit}/>}
        </div>
    )
}


export default TaskList;