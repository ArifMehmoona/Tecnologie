var express = require('express');
var app=express();
const path=require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/auto', function(req, res){
    res.sendFile(path.join(__dirname, 'auto.html'));
});

app.get('/porsche', function(req, res){
    res.sendFile(path.join(__dirname, 'porsche.html'));
});

app.get('/schedatecnica', function(req, res){
    res.sendFile(path.join(__dirname, 'schedatecnica.html'));
});






app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'porsche.html'));
});


app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});
