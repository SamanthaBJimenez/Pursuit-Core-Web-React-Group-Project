const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost:5432/letsgo_db');

module.exports = db