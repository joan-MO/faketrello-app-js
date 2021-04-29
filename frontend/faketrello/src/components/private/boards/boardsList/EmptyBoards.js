import React from 'react';
import './board.css'
import NewBoards from '../newBoards/NewBoards'
import { createBoard } from '../../../../api/service'
import { Redirect } from 'react-router-dom';

const EmptyBoard = () => {
    const [show, setShow] = React.useState(false);
    const [error, setError] = React.useState(null);
    //const [createdBoard, setCreatedBoard] = React.useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const history = useHistory();

    const handleSubmit = async content => {
        try {

            await createBoard(content);

            handleClose();
            
        } catch (error) {
            setError(error);
        }
        
    };

    
    if (error && error.status === 401) {
       <Redirect to='/login' />
    }
    
    return (
    <div>
    <div className="col-6">
        <div className="card btn bg-primary mt-2" style={{ width: "219.2px", height: "96px" }} onClick={handleShow}>
            <div className="card-body">
                <p className="card-title title-newboard p-3 text-center">add new board</p>
            </div>
        </div>
    </div>
    <NewBoards handleClose={handleClose} onSubmit={handleSubmit} show={show}/>
    </div>
    )
}


export default EmptyBoard;