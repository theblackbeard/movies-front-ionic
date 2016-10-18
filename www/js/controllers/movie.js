angular.module('movies')
    .controller('HomeCtrl', function($scope, MovieService, $state){
        MovieService.allMovies().then(function(movies){
            return $scope.movies = movies;
        }, function(errMsg){})
    }) 
    
    .controller('DetailCtrl', function($scope, MovieService, $state, $stateParams){
       
       var one = function(id){
        MovieService.one(id).then(function(movie){
            console.log(movie)
            return $scope.movie = movie;
        }, function(errMsg){}); 
       }
       
        one($stateParams.id);
        
        
        $scope.read = function(movieID, episode){
         
         MovieService.changeCS(movieID, episode).then(function(result){
             one($stateParams.id);
             console.log(result);
         });
         
        }
        
        
    })
       
    
    
