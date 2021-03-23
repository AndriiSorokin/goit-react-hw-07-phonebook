const getFilter = state => state.contacts.filter;
const getAllContact = state => state.contacts.items;

const getVisibleUser = state => {
  const contacts = getAllContact(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
};

export default {
  getFilter,
  getVisibleUser,
};
