import React from 'react';
import Header from '../../shared/Header'
import TaskList from '../boards/taskList/TaskList';
import { useParams } from 'react-router-dom';
import { getBoardById } from '../../../api/service';import { Redirect } from 'react-router';
import {createTask, assignTaksinBoard} from '../../../api/service'


const BoardContent = () => {
    const [boardContent, setBoardContent] = React.useState([]);
    const [error, setError] = React.useState(null);
    const params = useParams();
    const _id = params._id;

    React.useEffect(()=>{
        getBoardById(_id).then(setBoardContent).catch(error => setError(error));
     
    },[_id])

    
    const Submit = async content => {
        
        const newTask = await createTask(content)

        const _idTask = newTask.result['_id'];
        
        await assignTaksinBoard(_id, _idTask );

        window.location.reload();

    }


    if (error && error.status === 404) {
        return <Redirect to="/404" />;
    }
 
    return (
        <div>
            <Header />
            <h1 style={{marginLeft: '20px'}}>{boardContent.title}</h1>
    
            <TaskList taskList={ boardContent.list_tasks} onSubmit={Submit}/>
        </div>
    )
}


export default BoardContent;