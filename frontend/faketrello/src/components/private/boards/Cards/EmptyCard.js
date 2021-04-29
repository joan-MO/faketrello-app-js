import React from 'react';
import NewCards from '../newCards/NewCards'

const EmptyCard = ({_id}) => {
    return (
        <div>
            <NewCards _id={_id}/>
        </div>
    )
}


export default EmptyCard;