const express = require('express');
const pingHandler = require('./backend/ping-handler');

// Constants
const PORT = 8080;

// App
const app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.get('/ping', pingHandler);

app.use(express.static('build'));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
