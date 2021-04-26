import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import NewBoards from '../private/boards/newBoards/NewBoards'
import { Link } from 'react-router-dom';
import { createBoard } from '../../api/service'
import { useHistory } from 'react-router-dom';


const CardBoards = ({ boards }) => {
    const [show, setShow] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [createdBoard, setCreatedBoard] = React.useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();

    
    const handleSubmit = async content => {
        try {
            const newBoard = await createBoard(content);
            setCreatedBoard(newBoard);
            handleClose();
        } catch (error) {
            setError(error);
        }
        //boards.push(content);
        
    };

    if (error && error.status === 401) {
        history.push('/404');
    }

    if (createdBoard) {
        history.push('/boards');
    }
   
    return (
        <div className="row">
            {boards.map(board =>
            <div className="col-6" key={board._id}>
                <Link to={"/content-board/"+board._id} className="clean">
                <div className="card mt-2" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-board">{board.title}</p>
                    </div>
                </div>
                </Link>
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