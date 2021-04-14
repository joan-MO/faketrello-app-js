import client from './client'
//import axios from 'axios';

let token = JSON.parse(localStorage.getItem("auth"))

const api_url = `/apiv1`;

export const getBoards = () => {
  let url = `${api_url}/boards`;
  return client.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  //console.log(data);

};