import client from './client'
const api_url = `/apiv1`;

export const getBoards = () => {
  let url = `${api_url}/boards`;
  return client.get(url)
};

export const getBoardById = (_id) => {
  let url = `${api_url}/boards/${_id}`;
  return client.get(url)
};

export const createBoard = board => {
  const url = `${api_url}/boards`;
  return client.post(url, board);    
};

export const createTask = task => {
  const url = `${api_url}/list-tasks`;
  return client.post(url, task);    
};

export const assignTaksinBoard = (_id, _idTask) => {
  const url = `${api_url}/boards/assignListTask/${_id}`;
  return client.put(url, {"list_tasks":_idTask})    
};
