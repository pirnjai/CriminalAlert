const express = require('express');

const app = express();

const started = Date.now();

app.set('started', started);

require('./routes')(app);

exports = module.exports = app;
