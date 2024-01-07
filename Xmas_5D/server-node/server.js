var express = require('express');
var app=express();
const path=require('path');

app.get('/', function(req, res){
    var jsonData = {"results": ["Api ","Catch", "Node"]};
    res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
});

app.get('/api', function(req, res){
    res.sendFile(path.join(__dirname, 'api.html'));
});

app.get('/catch', function(req, res){
    res.sendFile(path.join(__dirname, 'catch.html'));
});

app.get('/node', function(req, res){
    res.sendFile(path.join(__dirname, 'node.html'));
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});

