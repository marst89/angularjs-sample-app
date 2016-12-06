'use strict';

/**
 * @ngdoc service
 * @name movieManiaApp.Movies
 * @description
 * # Movies
 * Factory in the movieManiaApp.
 */
angular.module('movieManiaApp')
  .factory('Movies', function ($http) {
    //Private area - anything defined here will NOT
    //be accessible from other components of the app
    var moviesRequest = null;

    // Public API here
    return {
      load: function () {
        if(!moviesRequest) {
          moviesRequest = $http.get('/movies.json');
        }
        return moviesRequest;
      },
      find: function(id, movies) {
        for(var i in movies) {
          var movie = movies[i];
          if(id === movie.id) {
            return movie;
          }
        }
      }
    };
  });
