import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import EmptyTask from '../boards/taskList/EmptyTasks'
const fakedata = 
    {
        "list_tasks": [{'title':'todo', '_id':1},{'title':'doing', '_id':2}],
        "_id": "1",
        "title": "test1",
    }


const BoardContent = () => {
    return (
        <div>
            <Header />
            {fakedata.list_tasks.length ? <TaskList taskList={fakedata.list_tasks} /> : <EmptyTask taskList={fakedata.list_tasks}/>}
        </div>
    )
}


export default BoardContent;