const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001

app.get('/', (req, res) => res.send('Hello from across the table!!'));
app.get('/hello', (req, res) => {
    
    console.log(req.query);
    res.send('Hello ' + req.query.name + '!');
});


app.get('/add', (req, res) => res.send(0));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((res) => {
        res.send(networkResponse.data);
    })
    .catch(() => {
        res.send(':( did not work.');
    });
});