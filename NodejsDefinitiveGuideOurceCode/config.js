var express = require('express');
var app = express();

app.set('title', 'My first express App.');
console.log(app.get('title'))

// app.enable, app.disable, app.enabled, app.disabled