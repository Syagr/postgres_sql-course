const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: 'syagr1911',
host: "localhost",
port: 5432,
database: ""
})

module.exports = pool