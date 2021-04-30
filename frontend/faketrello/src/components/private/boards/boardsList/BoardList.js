import React from 'react';
import CardBoards from '../../../shared/cardBoards';
import EmptyBoards from './EmptyBoards';
import Header from '../../../shared/Header';
import { getBoards } from '../../../../api/service';
import { Redirect } from 'react-router-dom';
import { createBoard } from '../../../../api/service'


const BoardList = () => {
  const [boards, setBoards] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredBoards, setFilteredBoards] = React.useState([]);


  const [error, setError] = React.useState(null);

  React.useEffect(() => {
      getBoards().then(setBoards).catch(error => setError(error));
      
      setFilteredBoards(
        boards.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
  },[search, boards])

  /*

  const handleSubmit = async content => {
    try {

        await createBoard(content);

        handleClose();

        //history.push('/')
            
    } catch (error) {
        setError(error);
    }
    
};*/
  
  /*
  React.useEffect(() => {
    setFilteredBoards(
      boards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);
  */
  
  if (error) {
    <Redirect to='/login' />
    return;
  }

  return (
      <div>
      <Header handleChange={event => setSearch(event.target.value)}/>
      <div className="container mt-5">
            <h3>Tableros personales</h3>
            {filteredBoards.length ? <CardBoards boards={ filteredBoards } /> : <EmptyBoards/>}
        </div>
      </div>
    )
}


export default BoardList;