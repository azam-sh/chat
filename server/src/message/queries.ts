const getMessages = `SELECT * FROM messages`;
const addMessage = `INSERT INTO "messages" ("recieverId", "senderId", "content") VALUES ($1, $2, $3)`

module.exports = {
  getMessages,
  addMessage
}