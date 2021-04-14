import React from 'react';
import { getBoards } from '../../../../api/service';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
let token = JSON.parse(localStorage.getItem("auth"))



const BoardList = () => {
    const [boards, setBoards] = React.useState({});

    const history = useHistory();

    //React.useEffect(() => { document.body.style.backgroundColor = 'white' }, []);
    const [error, setError] = React.useState(null);


  React.useEffect(() => {
 
    //listBoard()
      //getBoards().then(setBoards).catch(error => setError(error));
      //const data = getBoards();
      //setBoards(data);
      //return data
        //console.log(boards);
        
      
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/apiv1/boards`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        }).then(data => { console.log(data.data); })
      
         
        /*
      const execute = async () => {
        const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apiv1/boards`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(result.data);
        setBoards(result.data)
      }

      execute()*/
      
    })
  
    const listBoard = async() => {
      const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/apiv1/boards`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
      })
      //setBoards(result.data)
      //return result.data;
      console.log(result.data);
    }

    if (error) {
        history.push('/login');
    }
  
    //console.log(boards);

    return (
        <div>
           
        </div>
       
    )
}


export default BoardList;