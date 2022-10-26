require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes/index.router');

app.use(express.urlencoded({
    limit: '50mb', // receiving the image as a base64 string
    extended: true,
}));

app.use(express.json({limit: '50mb'}));

app.get('/', function (req, res) { // default route to check if the server is running
    res.send("Hello World");
});

app.use('/api', router);

module.exports = app;
