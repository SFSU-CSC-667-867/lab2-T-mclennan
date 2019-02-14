const express = require('express');

const app = express();
const port = 3001;

app.get('/world', (req, res) => res.send('Hello from across the network'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));