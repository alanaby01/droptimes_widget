const express = require('express');
const cors = require('cors');

const app = express(); 
const port = 8000;
app.use(cors());
//embed json here
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.sendFile(__dirname + '/index.html');
})

app.get('/json-fetch', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
