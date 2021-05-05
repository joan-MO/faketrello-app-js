import React from 'react';
import NewCards from '../newCards/NewCards'

const EmptyCard = ({_id, onSubmit}) => {
    return (
        <div>
            <NewCards _id={_id} onSubmit={onSubmit}/>
        </div>
    )
}


export default EmptyCard;