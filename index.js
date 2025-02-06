const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = 3010;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error(`Error connecting to database: ${error}`);
  });

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Welcome to the Customer Management System');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});