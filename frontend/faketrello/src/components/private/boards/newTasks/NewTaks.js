import React from 'react';


const NewTasks = () => {

    const handleSubmit = () => {
        alert('ey')
    }
    return (
        <div style={{marginLeft:"10px"}}>
            <div>
                <div className="card btn mt-4" style={{ width: "219.2px", height: "50px" }} onClick={handleSubmit}>
                    <div className="card-body">
                        <p className="card-title text-center" style={{marginTop:"-10px", fontWeight: 'bold'}}>+ Add new task list</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewTasks;