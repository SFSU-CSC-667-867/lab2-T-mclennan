const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello from across the table!!'));
app.get('/hello', (req, res) => {
    
    console.log(req.query);
    res.send('World!')
    
});


app.get('/add', (req, res) => res.send(0));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));