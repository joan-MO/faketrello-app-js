import React from 'react';
import '../../components/private/boards/boardsList/board.css'


const CardBoards = ({boards}) => {
    return (
        <div className="row">
            {boards.map(board =>
            <div className="col-6" key={board._id}>
                <div className="card" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-board">{board.title}</p>
                    </div>
                </div>
            </div>
            )}
            <div className="col-6 mt-2">
                <div className="card btn bg-primary" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-newboard p-3 text-center">add new board</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default CardBoards;