/**
 * Created by sefasaid on 06/05/2017.
 */
var mongoose = require('mongoose');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    Movie = require('./model/films'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/imdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/movies');
routes(app);

app.listen(port);

console.log('Api Start On Port: ' + port);