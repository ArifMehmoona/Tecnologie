var express = require('express');
var app=express();
const path=require('path'); 
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/auto', function(req, res){
    res.sendFile(path.join(__dirname, 'auto.html'));
});

app.get('/alfa_romeo', function (req, res) {
    res.sendFile(path.join(__dirname, 'alfa_romeo.html'));

});

app.get('/aston_martin', function (req, res) {
    res.sendFile(path.join(__dirname, 'aston_martin.html'));
});

app.get('/bmw', function(req, res){
    res.sendFile(path.join(__dirname, 'bmw.html'));
});

app.get('/chevrolet', function(req, res){
    res.sendFile(path.join(__dirname, 'chevrolet.html'));
});

app.get('/dodge', function(req, res){
    res.sendFile(path.join(__dirname, 'dodge.html'));
});

app.get('/el_secundo', function(req, res){
    res.sendFile(path.join(__dirname, 'el_secundo.html'));
});

app.get('/ford', function(req, res){
    res.sendFile(path.join(__dirname, 'ford.html'));
});

app.get('/gmc', function(req, res){
    res.sendFile(path.join(__dirname, 'gmc.html'));
});

app.get('/mazda', function(req, res){
    res.sendFile(path.join(__dirname, 'mazda.html'));
});

app.get('/mercedes', function(req, res){
    res.sendFile(path.join(__dirname, 'mercedes.html'));
});

app.get('/nissan', function(req, res){
    res.sendFile(path.join(__dirname, 'nissan.html'));
});

app.get('/porsche', function(req, res){
    res.sendFile(path.join(__dirname, '/porsche.html'));
});

app.get('/toyota', function(req, res){
    res.sendFile(path.join(__dirname, 'toyota.html'));
});




app.get('/schedatecnica', function(req, res){
    res.sendFile(path.join(__dirname, 'schedatecnica.html'));
});





app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
