var myApp = angular.module('myApp', []);

myApp.controller('myAppController', function myAppController($scope, $http) {
  $scope.info = [
    {
      name : 'Manish Joy',
      address  : 'Barauni'
    }, {
      name : 'Satish Joy',
      address : 'Barauni'
    }
  ];
  $http.get('data/test.php')
  .then(function(response){
    $scope.fileData = response.data;
  }, function(response){
    $scope.appError = 'Something went wrong';
  });

  $http({
    method : 'POST',
    data: {
      name : 'Manish',
      address : 'Barauni'
    },
    url: 'data/datapost.php'
  }).then(function(response){
    $scope.fileData2 = response.data;
  }, function(response){
    $scope.appError2 = 'Something went wrong';
  });

  $scope.Login = function() {
    alert('test');
  }
});
