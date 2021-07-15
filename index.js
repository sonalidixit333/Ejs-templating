'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoute = require('./routes/student-route');


const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('views'))
app.use('/api',studentRoute.routes);

app.get('/', function(req, res) {
    res.send('We are Here');
 });
 

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));