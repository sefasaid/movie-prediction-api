/**
 * Created by sefasaid on 06/05/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
   name : {type:String}
});

module.exports = mongoose.model('movie', MovieSchema);