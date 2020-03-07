// Call in installed dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// set up express app
const app = express();
// set up port number
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Expy Server',
  });
});

app.listen(port, (request, respond) => {
  console.log(`Expy server is running on ${port}. Let's get started!`);
});