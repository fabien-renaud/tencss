const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/public/index.html'));
});

app.use('/', express.static(__dirname + '/app/public'));

//Get environment port or use 3000
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on port
server.listen(port);
