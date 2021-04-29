import React from 'react';
import NewCards from '../newCards/NewCards';
import EmptyCard from './EmptyCard'
const Cards = ({task}) => {

    return (
        <div>
        {task.card_tasks.length ? 
        <div>
            {task.card_tasks.map(card=>
                <p key={card._id}>{card.title}</p>
            )}
           <NewCards _id={task._id}/>
        </div>
        : <EmptyCard _id={task._id}/>}
        </div>
    )
}


export default Cards;