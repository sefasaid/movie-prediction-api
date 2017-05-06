/**
 * Created by sefasaid on 06/05/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
   name : {type:String},
    movie_imdb_link : {type:String}
}, { strict: false });

module.exports = mongoose.model('movie', MovieSchema);