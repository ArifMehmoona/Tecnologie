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
            "modello": "Coupe",
            "colore":"Nero",
            "collezione":"HW Dream Garage",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/original/110534/527c50fd4016acb7e0c4ddd1ab36/HOT-WHEELS-El-Segundo-Coupe-HKJ96-NOWY"
            },

            {
            "modello": "Coupe",
            "colore":"Grigio",
            "collezione":"HW Dream Garage",
            "prezzo":"1,79€",
            "img":"https://a.allegroimg.com/original/1195a7/b8e06c7a496cabfc96520869c3ec/EL-SEGUNDO-COUPE-autko-HOT-WHEELS-seria-2023"
            },

            {
            "modello": "Coupe Clip",
            "colore":"Blu",
            "collezione":"HW Dream Garage",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/original/11d46a/b9d990d649988093eb717b53eeb5/HOT-WHEELS-COUPE-CLIP-HW-EXPERIMOTORS-2023"
            },
        ],



        "Ford":[
            {
            "modello": "'87 Sierra Cosworth",
            "colore":"Grigio",
            "collezione":"The 80's",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/s400/113c2c/d8b2fe3449fe8630e3ec63c9fb62/HOT-WHEELS-FORD-SIERRA-COSWORTH-1987"
            },

            {
                "modello": "Mustang Mach-E 1400",
                "colore":"Blu",
                "collezione":"HW Drag Strip",
                "prezzo":"2,20€",
                "img":"https://a.allegroimg.com/original/110979/a3b599c442c087472f65db0e66f8/HOT-WHEELS-FORD-MUSTANG-MACH-E-1400-HW-DRAG-STRIP-2023"
            }
        ],



        "Gmc":[
            {
            "modello": "2024 Hummer EV",
            "colore":"Grigio",
            "collezione":"HW Screen Time",
            "prezzo":"2,50€",
            "img":"https://a.allegroimg.com/original/11bf43/63d0bae749d591ca288556f42560/HOT-WHEELS-BARBIE-2024-GMC-HUMMER-EV-HW-SCREEN"
            }
        ],



        "Mazda":[
            {
            "modello": "'89 Savanna RX-7 FC3S",
            "colore":"Nero",
            "collezione":"The 80's",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/114a9e/dacf5e264e9791de14ba75b81515/HOT-WHEELS-MODEL-89-MAZDA-SAVANNA-RX-7-FC3S-HW"
            }
        ],



        "Mercedes":[
            {
            "modello": "'89 560 SEC AMG",
            "colore":"Grigio",
            "collezione":"HW Turbo",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/s512/11f397/28f7d3f04ff1bb912beaa217e5e6/HOT-WHEELS-89-Mercedes-Benz-560-SEC-AMG-HKK85-N"
            }
        ],



        "Nissan":[
            {
            "modello": "Leaf Nismo RC_02",
            "colore":"Bianco",
            "collezione":"HW Modified",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/s400/11ab7d/628089dd412ab5bcefa28c9ce4bf/HOT-WHEELS-Nissan-Leaf-Nismo-RC_02"
            }
        ],



        "Porsche":[
            {
            "modello": "911 Carrera RS 2.7",
            "colore":"Arancione",
            "collezione":"Retro Racers",
            "prezzo":"2,20€",
            "img":""
            },

            {
            "modello": "911 GT3",
            "colore":"Rosso",
            "collezione":"HW Exotics",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/s400/114663/c40855e84bef980ba5ffc8b1e3c1/HOT-WHEELS-PORSCHE-911-GT3-HKH97-HW-EXOTICS"
            },

            {
            "modello": "'71 911",
            "colore":"Bianco",
            "collezione":"Retro Racers",
            "prezzo":"1,79€",
            "img":"https://a.allegroimg.com/original/115975/a0a1b4dc499e9328caacfda57965/Samochodzik-Hot-Wheels-HKH06-71-Porsche-911"
            },

            {
            "modello": "911 Carrera RS 2.7",
            "colore":"Bianco",
            "collezione":"Retro Racers",
            "prezzo":"1,79€",
            "img":"https://a.allegroimg.com/original/11b5d7/943fd04249a5813df0922efab7d8/HW-PORSCHE-911-CARRERA-RS-2-7-Hot-Wheels"
            },

            {
            "modello": "928s Safari",
            "colore":"Grigio",
            "collezione":"Baja Blazers",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/11d07d/33dfe15d45f1a554abc3742600e9/HOT-WHEELS-PORSCHE-928S-SAFARI-BAJA-BLAZERS-2023"
            },

            {
            "modello": "935",
            "colore":"Blu",
            "collezione":"HW Exotics",
            "prezzo":"2,99€",
            "img":"https://a.allegroimg.com/original/11ba9e/87e8223b4a4a96aa1fc185e65e37/HOT-WHEELS-MODEL-METALOWY-PORSCHE-935-HW-EXOTICS-7-10"
            }
        ],



        "Toyota":[
            {
            "modello": "'82 Supra",
            "colore":"Rosso",
            "collezione":"The 80's",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/original/113be0/5f7dc8a54ee39c7378c689cbef34/Hot-Wheels-82-Toyota-Supra-HW-THE-80-S-10-10"
            },

            {
            "modello": "Land Cruiser 80",
            "colore":"Crema",
            "collezione":"Then And Now",
            "prezzo":"2,20€",
            "img":"https://a.allegroimg.com/original/11f553/6173f9854dfebd879dd9351d1f51/HOT-WHEELS-TOYOTA-LAND-CRUISER-80-HW-THEN-AND-NOW"
            }
        ],
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });


const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 3000!');});