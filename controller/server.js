// server.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'locateASocketDB'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.get('/api/stations', (req, res) => {
    connection.query('SELECT * FROM stations', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });
  
  app.post('/api/stations', (req, res) => {
    const newStation = req.body;
    connection.query('INSERT INTO stations SET ?', newStation, (error, results) => {
      if (error) throw error;
      res.status(201).send(`Station added with ID: ${results.insertId}`);
    });
  });
  