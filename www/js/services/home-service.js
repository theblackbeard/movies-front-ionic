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
        
        var changeCS = function(movieID, episode){
            var cod = episode._id;
            var status = episode.status;
            if (status) status = false; else status = true;
             return $q(function(resolve, reject){
                 $http.put(API_ENDPOINT.url + '/movies/' 
                    + movieID 
                    + '/cs/' 
                    + cod 
                    + '?status=' + status).then(function(result){
                        if (result.data.success) {
                            resolve(result.data.result);
                        } else {
                            reject(result.data.result);
                        } 
                    })
            });
          
        }
        
        return {
            allMovies: allMovies,
            one: one,
            changeCS: changeCS
           
        };
        
    })