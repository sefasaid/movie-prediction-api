/**
 * Created by sefasaid on 06/05/2017.
 */

var mongoose = require('mongoose'),
    Movie = require('./model/films');
var request = require('request');
var rp = require('request-promise');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/imdb');
var skip = 0;
function getDatas(id,imdb_id) {
    rp('http://localhost/imdbapi/example.php?id='+imdb_id).then(function (body) {

        var data = JSON.parse(body);
        console.log(data.trailer);
        Movie.findOneAndUpdate({_id: id}, {$set:{other:data}}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
            skip += 1;
            console.log(skip);
            getImdbId(skip);
        });
    });


}
getImdbId(skip);
function getImdbId(skip) {
    Movie.findOne().skip(skip).limit(1).exec(function (err,data) {
        if(err) throw err;
        var link = data.movie_imdb_link;
        var id = link.split("/");
        console.log(data._id);
        getDatas(data._id,id[4]);
    })
}
