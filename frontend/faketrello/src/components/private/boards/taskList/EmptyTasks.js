import React from 'react';
import NewTasks from '../newTasks/NewTaks'
//import {createTask, assignTaksinBoard} from '../../../../api/service'
//import { useParams } from 'react-router-dom';

const EmptyTask = ({onSubmit}) => {/*
    const params = useParams();
    const _id = params._id;

    const Submit = async content => {
        
        const newTask = await createTask(content)

        const _idTask = newTask.result['_id'];
        
        await assignTaksinBoard(_id, _idTask );
        
    }*/
    return (
       <NewTasks onSubmit={onSubmit}/>
    )
}


export default EmptyTask;