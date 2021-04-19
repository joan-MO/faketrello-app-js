import React from 'react';
import '../../components/private/boards/boardsList/board.css'
import { Link } from 'react-router-dom';
import  { Modal, Button } from 'react-bootstrap'


const CardBoards = ({ boards }) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [content, setContent] = React.useState({
        list_tasks: [],
        _id: 4 ,
        title: ''
    });

  
    const changeTitle = event => {
        const newContent = { ...content, title: event.target.value };
        setContent(newContent);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(content);
        boards.push(content);
        handleClose();

    };

    const { title } = content;
    return (
        <div className="row">
            {boards.map(board =>
            <div className="col-6" key={board._id}>
                <Link to={"/content-board/"+board._id} className="clean">
                <div className="card" style={{ width: "219.2px", height: "96px" }}>
                    <div className="card-body">
                        <p className="card-title title-board">{board.title}</p>
                    </div>
                </div>
                </Link>
            </div>
            )}
            <div className="col-6">
                <div className="card btn bg-primary mt-4" style={{ width: "219.2px", height: "96px" }} onClick={handleShow}>
                    <div className="card-body">
                        <p className="card-title title-newboard p-3 text-center">add new board</p>
                    </div>
                </div>
            </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <form onSubmit={handleSubmit} id="myform">
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
            
        </div>
    )
}


export default CardBoards;