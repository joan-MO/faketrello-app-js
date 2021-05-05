import React from 'react';
import NewCards from '../newCards/NewCards';
import EmptyCard from './EmptyCard'
const Cards = ({task, onSubmit}) => {
    const edit = (id) => {
        alert('edit' + id)
    }
    return (
        <div>
        {task.card_tasks.length ? 
        <div>
            {task.card_tasks.map(card=>
                <div>
                <p key={card._id}>{card.title}</p><p className="btn" onClick={() => edit(card._id)}>Edit</p>
                </div>
            )}
           <NewCards _id={task._id} onSubmit={onSubmit}/>
        </div>
        : <EmptyCard _id={task._id} onSubmit={onSubmit}/>}
        </div>
    )
}


export default Cards;