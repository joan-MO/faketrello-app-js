import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import { Link } from 'react-router-dom';
const CardBoards = ({ boards }) => {
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
        </div>
    )
}


export default CardBoards;