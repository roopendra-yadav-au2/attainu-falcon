var express = require('express');
var app = express();

app.get('/:operation',function(req, res){

    var a = parseInt(req.query.a);
    var b =  parseInt(req.query.b);
    var result;
    switch(req.params.operation)
    {
        case 'add': result = a + b;
        break;
        case 'subtract': result = a - b;
        break;
        case 'multiply': result = a * b;
        break;
        case 'subtract': result = a / b;
        break;
        default: result = 'Operation is not defined';
    }
    res.json({'a': a, 'b': b, 'result': result});
});
app.listen(3000);