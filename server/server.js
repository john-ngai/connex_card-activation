const express = require('express');
const server = express();
const port = 3001;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.get('/api', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/`);
});