import React from 'react';

const NewCards = ({_id, onSubmit}) => {
    const [isedit, setIsEdit] = React.useState(false);

    
    const [content, setContent] = React.useState({
        title: '',
    });

  
    const changeTitle = event => {
        const newContent = { ...content, title: event.target.value };
        setContent(newContent);
    }

    const submitForm = (event) => {
        event.preventDefault();
        setIsEdit(false)
        onSubmit(content, _id)
    }

    const { title } = content;

    return (
        <div>
            { !isedit ?
            <p className='btn' onClick={() => setIsEdit(true)}>+ Add other new card</p>
            :
            <form onSubmit={submitForm}>
                <div className="form-group">
                <input className="fomr-control" type="text" name="title" id="title" style={{padding:'0'}} placeholder=' Add new title task' value={title} onChange={changeTitle}/>
                </div>
            </form> 
            }
        </div>
    )
}


export default NewCards;