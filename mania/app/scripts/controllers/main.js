'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location) {
    var movieList = [{
      id: 1,
      title: 'Usual Suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome',
      slug: 'usual-suspects'
    },
    {
      id: 2,
      title: 'Star Wars',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
      category: 'Epic',
      slug: 'star-wars'
    }];


    $scope.movies = movieList;

    $scope.movie = {
        title: '',
        description:'',
        image:'https://ringothecat.files.wordpress.com/2011/02/thehelp.jpg'
    };

    $scope.closed = false;

    $scope.goToRandomMovie = function(){
        var index = Math.floor(Math.random() * $scope.movies.length);
        var movie = $scope.movies[index];
        var url = 'movie/'+movie.id+'/'+movie.slug;
        $location.url(url);
    }

    $scope.validateTitle = function(){
        if($scope.movie.title.length > 0) {
            console.debug($scope.movie.title);
        } else {
            window.alert('Title is required');
        }
    };

    $scope.checkCategorySelected = function() {
        if($scope.movie.category === ''){
            window.alert('Category cannot be empty');
        }
    };

    $scope.checkDescription = function(){
        console.debug($scope.movie.description);
    };

    $scope.addMovie = function(){
        $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.isValid = function(){
        if($scope.movie.title === ''){
            return false;
        }
        if($scope.movie.description === ''){
            return false;
        }
        if($scope.movie.category === ''){
            return false;
        }
        return true;
    };

  })
  .controller('SubCtrl', function($scope){
    $scope.title = 'Available to watch ' + $scope.movies.length + ' movies';
  });