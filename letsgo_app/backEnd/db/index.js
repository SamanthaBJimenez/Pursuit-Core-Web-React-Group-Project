const pgp = require('../node_modules/pg-promise/typescript/pg-promise')({});
const db = pgp('postgress://localhost:5432/letsgo_db');

module.exports = db