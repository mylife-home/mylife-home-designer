'use strict';

angular.module('mylife-home-designer.views')

.controller('onlineController', function (repository) {

  this.entities = repository.entities;
  this.types    = repository.types;
});