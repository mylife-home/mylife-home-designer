'use strict';

angular.module('mylife-home-designer.views')

.controller('onlineController', function (repository, images) {

  this.entities = repository.entities;
  this.types    = repository.types;
});