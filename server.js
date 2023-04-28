const express = require('express');
const cors = require('cors');

const app = express(); 
const port = 8000;
app.use(cors());

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.sendFile(__dirname + '/index.html');
    console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})