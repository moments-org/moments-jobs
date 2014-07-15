angular.module('project', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
})

.controller('ListCtrl', function($scope, $http) {
        $http({
            method: "get",
            url: "photos.json",
            params: {
                action: "get"
            }
        }).then(function(results) {
            $scope.photos = results.data.photos;
        });
});
