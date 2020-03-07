// Call in installed dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// set up express app
const app = express();
// set up port number
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, (request, respond) => {
  console.log(`Expy server is running on ${port}. Let's get started!`);
});