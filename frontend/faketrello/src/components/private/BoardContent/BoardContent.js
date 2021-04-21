import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import NewTask from '../boards/newTasks/NewTaks'
const fakedata = 
    {
        "list_tasks": [],
        "_id": "1",
        "title": "test1",
    }


const BoardContent = () => {

    return (
        <div>
            <Header />
            {fakedata.list_tasks.length ? <TaskList /> : <NewTask />}
        </div>
    )
}


export default BoardContent;