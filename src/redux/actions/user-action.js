import { ADD, DELETE, CHANGE_FILTER } from '../types/userTypes';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000';

export const addToList = ({ name, phone }) => dispatch => {
  const contact = {
    name,
    phone,
  };
  dispatch({ type: 'contact/addContact/Request' });
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch({ type: 'contact/addContactSuccess', payload: data }))
    .catch(error => dispatch({ type: 'contact/addContactError', payload: error }));
};

// export const addToList = createAction(ADD, ({ name, phone }) => ({
//   payload: {
//     name,
//     phone,
//     id: uuidv4(),
//   },
// }));
// export const addToList = ({ name, phone }) => ({
//   type: ADD,
//   payload: {
//     name,
//     phone,
//     id: uuidv4(),
//   },
// });

export const deleteUser = createAction(DELETE);
// export const deleteUser = id => ({
//   type: DELETE,
//   payload: id,
// });

export const changeFilter = createAction(CHANGE_FILTER);
// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
