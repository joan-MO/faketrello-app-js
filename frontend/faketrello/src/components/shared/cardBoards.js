import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import NewBoards from '../private/boards/newBoards/NewBoards'
import { Link } from 'react-router-dom';

const CardBoards = ({ boards }) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleSubmit = content => {
        boards.push(content);
        handleClose();
    };

   
    return (
        <div className="row">
            {boards.map(board =>
            <div className="col-6" key={board._id}>
                <Link to={"/content-board/"+board._id} className="clean">
                <div className="card" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-board">{board.title}</p>
                    </div>
                </div>
                </Link>
            </div>
            )}
            <div className="col-6">
                <div className="card btn bg-primary mt-4" style={{ width: "219.2px", height: "96px" }} onClick={handleShow}>
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