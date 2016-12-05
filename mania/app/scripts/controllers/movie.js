'use strict';

angular.module('movieManiaApp')
.controller('MovieCtrl', function($scope, $routeParams){
    console.debug($routeParams.id);
    console.debug($routeParams.slug);

    var id = parseInt($routeParams.id, 10);

    var movieList = [{
      id: 1,
      title: 'Usual Suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome',
      slug: 'usal-suspects'
    },
    {
      id: 2,
      title: 'Star Wars',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
      category: 'Epic',
      slug: 'star-wars'
    }];

    for(var index in movieList){
        var movie = movieList[index];
        if(movie.id === id){
            $scope.movie = movie;
            break;
        }
    }

});