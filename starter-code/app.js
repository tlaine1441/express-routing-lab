//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?
var candyRouter = require("./candyRouter");

app.use(bodyParser.json());

//How do we redirect the /candies path
app.use('/candies', candyRouter);
//through our candyRouter?
//Hint: you need app.use

app.listen(3000);