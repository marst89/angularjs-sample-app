'use strict';

/**
 * @ngdoc service
 * @name movieManiaApp.Movies
 * @description
 * # Movies
 * Factory in the movieManiaApp.
 */
angular.module('movieManiaApp')
  .factory('Movies', function ($q) {
    //Private area - anything defined here will NOT
    //be accessible from other components of the app
    var key = 'movieMania:movies';

    function loadMovies(){
      return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Public API here
    return {
      load: function () {
        return $q.when(loadMovies());
      },
      get: function(id) {
        var foundMovie;
        var movies = loadMovies();
        for(var i in movies) {
          var movie = movies[i];
          if(movie.id === id) {
            foundMovie = movie;
            break;
          }
        }
        return $q.when(foundMovie);
      },
      add: function(obj) {
        var movies = loadMovies();
        obj.id = movies.length;
        obj.slug = obj.title.toLowerCase().replace(/ /g, '-');
        movies.push(obj);
        localStorage.setItem(key, JSON.stringify(movies));
      }
    };
  });
