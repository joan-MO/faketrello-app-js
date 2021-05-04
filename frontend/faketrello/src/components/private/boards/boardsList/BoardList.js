import React from 'react';
import CardBoards from '../../../shared/cardBoards';
import EmptyBoards from './EmptyBoards';
import Header from '../../../shared/Header';
import { getBoards } from '../../../../api/service';
import { Redirect } from 'react-router-dom';
import { createBoard } from '../../../../api/service';
import NewBoards from '../newBoards/NewBoards'

const BoardList = () => {
  const [boards, setBoards] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredBoards, setFilteredBoards] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const history = useHistory();


  React.useEffect(() => {
      getBoards().then(setBoards).catch(error => setError(error));
    },[]) 

  React.useEffect(() => {
    setFilteredBoards(
      boards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  const handleSubmit = async content => {
    try {

        await createBoard(content);

        handleClose();
            
    } catch (error) {
        setError(error);
    }
    
  };

  
  if (error) {
    <Redirect to='/login' />
    return;
  }


  return (
      <div>
      <Header handleChange={event => setSearch(event.target.value)}/>
      <div className="container mt-5">
            <h3>Tableros personales</h3>
            
            {filteredBoards.length ? 
            <div>
              <CardBoards boards={ filteredBoards } /> 
              <div className="col-6">
                  <div className="card btn bg-primary mt-2" style={{ width: "219.2px", height: "96px", marginLeft:'9px'}} onClick={handleShow}>
                      <div className="card-body">
                          <p className="card-title title-newboard p-3 text-center">add new board</p>
                      </div>
                  </div>
              </div>
              <NewBoards handleClose={handleClose} onSubmit={handleSubmit} show={show}/>
            </div>
            
            : <EmptyBoards/>}
          
        </div>
      </div>
    )
}


export default BoardList;