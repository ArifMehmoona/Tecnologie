// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response
app.get('/api', (req, res) => {
    var jsonData = {
        "Alfa_romeo": [{
            "modello": "GTV6 3.0",
            "colore":"rosso",
            "collezione":"Retro Racers",
            "prezzo":"2,20€",
            "img": ""
            }
        ],
        "Aston_martin":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",

            }
        ],


    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
res.send('app works!');
//res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});