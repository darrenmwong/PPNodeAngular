var app = angular.module('clientApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

app.controller('DropdownCtrl', function($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});