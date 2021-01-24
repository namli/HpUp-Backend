const express = require('express');
const app = express();
const port = process.env.PORT;

const bodyparser = require('body-parser');

app.get('/', (req, res) => {
  res.send('I\'m here');
});

app.listen(port, () => {
  console.log(`Server wait you no http://localhost:${port}`);
});