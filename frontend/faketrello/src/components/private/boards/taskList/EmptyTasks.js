import React from 'react';
import NewTasks from '../newTasks/NewTaks'
import {createTask, assignTaksinBoard} from '../../../../api/service'
import { useParams } from 'react-router-dom';

const EmptyTask = () => {
    const params = useParams();
    const _id = params._id;

    const Submit = async content => {
        
        console.log(content);
        const newTask = await createTask(content)

        const _idTask = newTask.result['_id'];
        
        await assignTaksinBoard(_id, _idTask );
    }
    return (
       <NewTasks onSubmit={Submit}/>
    )
}


export default EmptyTask;