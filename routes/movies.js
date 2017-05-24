/**
 * Created by sefasaid on 06/05/2017.
 */
'use strict';
module.exports = function(app) {
    var movie = require('../controllers/movie');

    app.route('/')
        .get(movie.list_movies);
    app.route('/:_id')
        .get(movie.get_one_movie);
};
