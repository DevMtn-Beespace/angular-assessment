angular.module('assessment')
.service('mainService', ['$http', function($http){

  this.getProducts = function(){
        return $http(
            { method: 'GET',
              url: 'http://practiceapi.devmounta.in/products'
            }).then(function(response){
        console.log(response);
        return response.data;
      })
    };

}]);
