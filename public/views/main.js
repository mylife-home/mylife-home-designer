'use strict';

angular.module('mylife-home-designer.views')

.controller('mainController', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
  $scope.loading = false;
});