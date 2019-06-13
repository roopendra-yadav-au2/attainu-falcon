var express = require('express');
var bodyParser = require('Body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/add',function(req , res){
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1) + parseFloat(req.body.num2)
    });
})
app.post('/sub',function(req , res){
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1) - parseFloat(req.body.num2)
    });
    
})
app.post('/mul',function(req , res){
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1) * parseFloat(req.body.num2)
    });
    
})
app.post('/div',function(req , res){
    res.json({
        "num1":req.body.num1,
        "num2":req.body.num2,
        "result": parseFloat(req.body.num1) / parseFloat(req.body.num2)
    });
    
})

app.listen(3000);