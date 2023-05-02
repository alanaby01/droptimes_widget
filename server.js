const express = require('express');
const cors = require('cors');
const fs = require('fs');

// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var RootComponent = require('./src/App');

const app = express(); 
const port = 8000;
app.use(cors());
//embed json here
// app.get('/', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.sendFile(__dirname + '/embed.html');
// })

app.get('/', (req, res) => {
    console.log(req.query.num_rows);
    fs.readFile("./data.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        var itemstobeRendered = eval(jsonString).slice(0, req.query.num_rows);
        var props = {num_rows: req.query.num_rows, items: itemstobeRendered};
        console.log(props);
    });
    
    
    res.send(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
