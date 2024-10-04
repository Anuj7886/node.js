const sql = require('mssql');
const config = require('./dbconfig');

async function connectToDatabase() {
  try {
    // Create a connection pool to the database
    const pool = await sql.connect(config);
    console.log('Connected to the SQL Server successfully!');

    // Run a sample query
    const result = await pool.request().query('SELECT name FROM sys.databases');
    console.log('Databases:', result.recordset);

    // Close the connection pool
    await pool.close();
  } catch (err) {
    console.error('SQL Server connection error:', err);
  }
}

connectToDatabase();
