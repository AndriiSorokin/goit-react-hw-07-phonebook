import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/user-action';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const addToList = ({ name, phone }) => dispatch => {
  const contact = {
    name,
    phone,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
