const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "asxz132",
  database: "telegram",
  port: 5432,
});

module.exports = pool;
