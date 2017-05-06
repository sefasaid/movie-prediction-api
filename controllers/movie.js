/**
 * Created by sefasaid on 06/05/2017.
 */
'use strict';


var mongoose = require('mongoose'),
    Movie = mongoose.model('movie');

exports.list_movies = function(req, res) {
    var skip = 0, limit = 20, sort = "-_id";
    if(req.query.skip)
        skip = parseInt(req.query.skip)
    if(req.query.limit)
        limit = parseInt(req.query.limit)
    if(req.query.sort)
        sort = req.query.sort
    Movie.find({}).skip(skip).limit(limit).sort(sort).exec(
        function (err,movies) {
            if (err) res.send(err);
            res.json(movies);
        })
};



