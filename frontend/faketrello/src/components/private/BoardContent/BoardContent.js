import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import EmptyTask from '../boards/taskList/EmptyTasks'
import { useParams } from 'react-router-dom';
import { getBoardById } from '../../../api/service';import { Redirect } from 'react-router';


const fakedata = 
    {
        "list_tasks": [{'title':'todo', '_id':1},{'title':'doing', '_id':2}],
        "_id": "1",
        "title": "test1",
    }


const BoardContent = () => {
    const [boardContent, setBoardContent] = React.useState([]);
    const [error, setError] = React.useState(null);
    const params = useParams();
    const _id = params._id;

    React.useEffect(()=>{
        getBoardById(_id).then(setBoardContent).catch(error => setError(error));
     
    },[_id])


    if (error && error.status === 404) {
        return <Redirect to="/404" />;
    }

    return (
        <div>
            <Header />
            <h1>{boardContent.title}</h1>
            { boardContent.list_tasks ? <TaskList taskList={ boardContent.list_tasks} /> : <EmptyTask taskList={fakedata.list_tasks}/>}
        </div>
    )
}


export default BoardContent;