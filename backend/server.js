const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000; // Choose any port you prefer

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'kama',
//   password: 'kama',
//   database: 'location'
// });

// Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
//   console.log('MySQL connected...');
// });

// Routes
app.get('/', (req, res) => {
  res.send('Backend Service is running!');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  console.log(username);
  console.log(email);
  console.log(password);

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
