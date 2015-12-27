'use strict';

angular.module('mylife-home-designer.views')

.controller('startupController', function (repository) {

  this.entities = repository.entities;
});