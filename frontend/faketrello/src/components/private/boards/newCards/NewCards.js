import React from 'react';

const NewCards = ({_id}) => {
    const getID = (_id) => {
        console.log(_id);
        alert(_id)
    }
    return (
        <div
        >
            <p className='btn' onClick={() => getID(_id)}>+ Add other new card</p>
        </div>
    )
}


export default NewCards;