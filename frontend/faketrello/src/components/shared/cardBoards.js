import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import NewBoards from '../private/boards/newBoards/NewBoards'
import { Link } from 'react-router-dom';
import { createBoard } from '../../api/service'
import { Redirect } from 'react-router-dom';


const CardBoards = ({ boards }) => {
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
        <div className="row">
            {boards.map(board =>
            <div className="col-6" key={board._id}>
                <div>
                <Link to={"/content-board/"+board._id} className="card mt-2 clean" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-board">{board.title}</p>
                    </div>
                </Link>
                </div>
            </div>
            )}
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


export default CardBoards;