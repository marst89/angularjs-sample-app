'use strict';

angular.module('movieManiaApp')
.controller('MovieCtrl', function($scope, $routeParams, Movies){
    console.debug($routeParams.id);
    console.debug($routeParams.slug);

    //routeParams.id is a string...
    var id = parseInt($routeParams.id, 10);
    Movies.get(id).then(function(movie){
        $scope.movie = movie;
    });
});