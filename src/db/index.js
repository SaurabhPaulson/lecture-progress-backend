require('dotenv').config(); // Add this line to load .env variables
const pgp = require('pg-promise')();

const db = pgp({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = db;