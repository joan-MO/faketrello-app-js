import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import NewTask from '../boards/newTasks/NewTaks'
const fakedata = 
    {
        "list_tasks": [{'title':'todo', '_id':1},{'title':'doing', '_id':2}],
        "_id": "1",
        "title": "test1",
    }


const BoardContent = () => {

    const Submit = content => {
        console.log(content);
        fakedata.list_tasks.push(content)
        console.log(fakedata.list_tasks);
    }
    return (
        <div>
            <Header />
            {fakedata.list_tasks.length ? <TaskList taskList={fakedata.list_tasks} onSubmit={Submit}/> : <NewTask />}
        </div>
    )
}


export default BoardContent;