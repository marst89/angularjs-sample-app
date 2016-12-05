'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    $http.get('/movies.json').success(function(data){
      console.debug(data);
      $scope.movies = data;
    });

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

  });