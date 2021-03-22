import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/contactOperations/contactOperations';
import style from '../PhoneBook/PhoneBook.module.css';

const Contacts = ({ contacts, deleteNumber }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contacts.id}>
            <span>
              {contact.name} : {contact.phone}
            </span>
            <button
              className={style.btnDelete}
              onClick={() => deleteNumber(contact.id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteNumber: PropTypes.func.isRequired,
};

const getVisibleUser = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
};

const mapStatetoProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleUser(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteNumber: id => dispatch(deleteContact(id)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Contacts);
