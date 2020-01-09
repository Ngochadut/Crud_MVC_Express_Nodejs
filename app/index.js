const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const port = 3000;
 
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 


require('dotenv').config();
const mongooes = require('./config/database');
 
const homeRoute = require('./routes/app.route.js');

//template  view engine
app.set('view engine','ejs');
app.set('views','./app/views');

app.use('/', homeRoute);
app.listen(port,() => {
    console.log("server listen on port" + port) 
});