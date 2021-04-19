import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import { Link } from 'react-router-dom';

const CardBoards = ({boards}) => {
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
                <div className="card btn bg-primary mt-4" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-newboard p-3 text-center">add new board</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default CardBoards;