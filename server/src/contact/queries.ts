const getContacts = `SELECT * FROM contacts`;
const getContactById = `SELECT * FROM contacts WHERE id = $1`;

module.exports = {
  getContacts,
  getContactById,
};
