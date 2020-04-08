const { Pool } = require('pg')

const pool = new Pool({
  user: 'bradleyzazzara',
  host: 'localhost',
  database: 'listings',
  port: 5432
})

module.exports = pool;