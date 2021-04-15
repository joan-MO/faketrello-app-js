import React from 'react';
import './board.css'

const EmptyBoard = () => {
    return (
        <div className="col-6 mt-2">
            <div className="card btn bg-primary" style={{ width: "219.2px", height: "96px" }}>
                <div className="card-body">
                    <p className="card-title title-newboard p-3 text-center">add new board</p>
                </div>
            </div>
        </div>
    )
}


export default EmptyBoard;