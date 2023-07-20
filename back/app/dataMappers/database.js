//creation d'un pool au lieu d'un unique client afin de pouvoir traiter plusieurs requetes simultanement
const { Pool } = require('pg');

const pool = new Pool({
  database: process.env.PGDATABASE ?? 'devsconnect',
  user: process.env.PGUSER ?? 'yet',
  password: process.env.PGPASSWORD ?? 'yet',
});
pool.connect();

module.exports = pool;
