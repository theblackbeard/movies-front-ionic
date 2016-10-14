angular.module('movies')
    .controller('HomeCtrl', function($scope, MovieService, $state){
        MovieService.allMovies().then(function(movies){
            return $scope.movies = movies;
        }, function(errMsg){})
    }) 
    
    .controller('DetailCtrl', function($scope, MovieService, $state, $stateParams){
        MovieService.one($stateParams.id).then(function(movie){
            console.log(movie)
            return $scope.movie = movie;
        }, function(errMsg){}); 
        
        
        $scope.read = function(){
            console.log("ok")
        }
        
        
    })
       
    
    
