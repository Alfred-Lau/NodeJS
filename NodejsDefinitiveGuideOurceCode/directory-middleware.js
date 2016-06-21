var express = require('express');
var app = express();
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

app.use(serveIndex(__dirname));
app.use(serveStatic(__dirname));

app.listen(1337, '127.0.0.1');