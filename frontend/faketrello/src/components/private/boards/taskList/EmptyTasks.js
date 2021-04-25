import React from 'react';
import NewTasks from '../newTasks/NewTaks'

const EmptyTask = ({taskList}) => {

    const Submit = content => {
        taskList.push(content);
    }

    return (
       <NewTasks onSubmit={Submit}/>
    )
}


export default EmptyTask;