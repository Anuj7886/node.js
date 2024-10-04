const config = {
    user: 'sports', // Replace with your SQL Server username
    password: 'sports@123', // Replace with your SQL Server password
    server: '192.168.1.15', // Use 'localhost' if running on the same machine
    database: 'SPORTS', // Replace with your database name, e.g., 'testdb'
    port: 1433, // Default port for SQL Server
    options: {
      encrypt: false, // Set to true for Azure SQL, false for local development
      trustServerCertificate: true, // Use this if you don't have a valid certificate
    },
  };
  
  module.exports = config;
