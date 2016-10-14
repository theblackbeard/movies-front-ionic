angular.module('movies')
    .service('MovieService', function($q, $http, API_ENDPOINT){
        
        var allMovies = function(){
            return $q(function(resolve, reject){
                $http.get(API_ENDPOINT.url + '/movies').then(function(result){
                    if (result.data.success) {
                        resolve(result.data.movies);
                    } else {
                        reject(result.data.movies);
                    } 
                });
            })
        }
        
         var one = function(id){
            return $q(function(resolve, reject){
                $http.get(API_ENDPOINT.url + '/movies/' + id).then(function(result){
                    if (result.data.success) {
                        resolve(result.data.movies);
                    } else {
                        reject(result.data.movies);
                    } 
                });
            })
        }
        
        
        return {
            allMovies: allMovies,
            one: one
           
        };
        
    })