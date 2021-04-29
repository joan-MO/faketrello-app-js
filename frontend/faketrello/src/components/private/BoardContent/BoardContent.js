import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import EmptyTask from '../boards/taskList/EmptyTasks'
import { useParams } from 'react-router-dom';
import { getBoardById } from '../../../api/service';import { Redirect } from 'react-router';


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
            <h1 style={{marginLeft: '20px'}}>{boardContent.title}</h1>
    
            {Object.keys(boardContent).length? <TaskList taskList={ boardContent.list_tasks} /> : <EmptyTask/>}
        </div>
    )
}


export default BoardContent;