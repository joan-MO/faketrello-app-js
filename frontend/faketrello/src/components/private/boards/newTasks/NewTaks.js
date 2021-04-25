import React from 'react';


const NewTasks = ({onSubmit}) => {
    const [isedit, setIsEdit] = React.useState(false);

    const [content, setContent] = React.useState({
        title: '',
        _id: 3 ,
    });

  
    const changeTitle = event => {
        const newContent = { ...content, title: event.target.value };
        setContent(newContent);
    }

    const submitForm = event => {
        event.preventDefault();
        setIsEdit(false)
        onSubmit(content)
    }

    const { title } = content;
    
    return (
        <div style={{display:'flex'}}>
        <div className="card card-add" style={{ width: "219.2px", height: "50px",marginLeft:'10px', cursor:'pointer'}} onClick={() => setIsEdit(true)}>
            <div className="card-body">
                {!isedit? 
                <p className="card-title text-center" style={{marginTop:"-5px", fontWeight: 'bold'}}>+ Add new task list</p>
                :
                <form onSubmit={submitForm}>
                    <div className="form-group">
                    <input className="fomr-control" type="text" name="title" id="title" style={{padding:'0'}} placeholder=' Add new title task' value={title} onChange={changeTitle}/>
                    </div>
                </form>
                }
            </div>
        </div>
    </div>
    )
}


export default NewTasks;