import React from 'react';
import  { Modal, Button } from 'react-bootstrap'

const NewBoards = ({show, handleClose, onSubmit}) => {
    const [content, setContent] = React.useState({
        list_tasks: [],
        _id: 4 ,
        title: ''
    });

  
    const changeTitle = event => {
        const newContent = { ...content, title: event.target.value };
        setContent(newContent);
    }

    const submitNewBoard = event => {
        event.preventDefault();
        onSubmit(content)
    }

    const { title } = content;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <form onSubmit={submitNewBoard} id="myform" >
                    <label htmlFor="name">Title: </label>
                        <input type="text" name="title" id="title" className="form-control" value={title} onChange={changeTitle}/>
                </form>
            </Modal.Body>
            <Modal.Footer>
              <input className="btn btn-success" type="submit" form="myform" value="SEND"/>
              <Button variant="secondary" onClick={handleClose}>
                CANCELAR
              </Button>
            </Modal.Footer>
        </Modal>
            
    )
}


export default NewBoards;