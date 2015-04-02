#!/usr/bin/env node

var express = require('express');
var app = express();

/*
 * Serve static content.
 */
app.use('/', express.static(__dirname + '/static')); 

app.get('/compass/', function (req, res) {
    
    function getBisection(x, y) {
        var _x = parseFloat(x)
        var _y = parseFloat(y);
        var n;
        if (Math.abs(_x - _y) >= 180) {
            n = Math.min(_x, _y) - ((360 - Math.abs(_x - _y)) / 2);
            return (n < 0) ? 360 + n : n;
        }
        else {
            return (_x + _y) / 2;
        }
    }
    res.json({ bisection: getBisection(req.query.x, req.query.y) });
    
});

var server = app.listen(3000, function () {
  console.log('Listening on localhost:3000');
});
