// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors');
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response
app.get('/api', (req, res) => {
    var jsonData = {
        "Alfa_romeo": [{
            "modello": "GTV6 3.0",
            "colore":"Rosso",
            "collezione":"Retro Racers",
            "prezzo":"2,20€",
            "img": "https://a.allegroimg.com/original/112f1f/ee96ce804ce381cdfc5bb75e6043/HOT-WHEELS-ALFA-ROMEO-GTV6-3-0-GT-HW-RETRO-RACERS-2023"
            }
        ],



        "Aston_martin":[
            {
            "modello": "Vantage GTE",
            "colore":"Bianco",
            "collezione":"HW Turbo",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/original/112da5/cb35f4cf4b35a990237893db6466/HOT-WHEELS-MODEL-ASTON-MARTIN-VANTAGE-GTE-HW-TURBO"
            }
        ],



        "Bmw":[
            {
            "modello": "i8 Roadster",
            "colore":"Nero",
            "collezione":"HW Roadsters",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/11bfd9/55cb6904492f9415c4e249b417f8/HOT-WHEELS-MODEL-BMW-I8-ROADSTERS-HW-ROADSTERS"
            }
        ],



        "Chevrolet":[
            {
            "modello": "Corvette C7 Z06",
            "colore":"Nero",
            "collezione":"Then And Now",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/114c42/f08bc32d4f4ea26d508eb300fcab/Hot-Wheels-Corvette-C7-Z06-2023"
            },

            {
            "modello": "1956 Corvette",
            "colore":"Rosa",
            "collezione":"HW Screen Time",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/s512/118d80/d3a0341741bfa46908d2808025fc/HOT-WHEELS-BARBIE-1956-CORVETTE-HW-SCREEN-TIME"
            },

            {
            "modello": "'62 Corvette",
            "colore":"Nero",
            "collezione":"Then And Now",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/11842b/e04af70e4782abed1141bf043949/HOT-WHEELS-62-CORVETTE-HW-THEN-AND-NOW-2023"
            }
        ],



        "Dodge":[
            {
            "modello": "'18 Challenger SRT Demon",
            "colore":"Nero",
            "collezione":"Muscle Mania",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/113f43/664ecf3a4ef1a3387ddbd8a94ee5/HW-Hot-Wheels-18-Dodge-Challenger-SRT-Demon-2023"
            }
        ],



        "El_secundo":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":"https://a.allegroimg.com/original/110534/527c50fd4016acb7e0c4ddd1ab36/HOT-WHEELS-El-Segundo-Coupe-HKJ96-NOWY"
            },

            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":"https://a.allegroimg.com/original/1195a7/b8e06c7a496cabfc96520869c3ec/EL-SEGUNDO-COUPE-autko-HOT-WHEELS-seria-2023"
            },

            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":"https://a.allegroimg.com/original/11d46a/b9d990d649988093eb717b53eeb5/HOT-WHEELS-COUPE-CLIP-HW-EXPERIMOTORS-2023"
            },
        ],



        "Ford":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Gmc":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Mazda":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Mercedes":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Nissan":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Porsche":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],



        "Toyota":[
            {
            "modello": "",
            "colore":"",
            "collezione":"",
            "prezzo":"",
            "img":""
            }
        ],
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });


const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 3000!');});