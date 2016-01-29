'use strict';

angular.module('mylife-home-designer.views')

.controller('onlineController', function (repository, images) {

  this.entities = repository.entities;
  this.types    = repository.types;
  this.detail   = null;

  this.refresh = function(entity) {
    entity.reset();
    this.detail = null;
  }

  this.showEntityDetail    = function(entity)            { this.detail = { type: 'entity',    entity }; };
  this.showResourceDetail  = function(entity, key)       { this.detail = { type: 'resource',  entity, key }; };
  this.showPluginDetail    = function(entity, plugin)    { this.detail = { type: 'plugin',    entity, plugin }; };
  this.showComponentDetail = function(entity, component) { this.detail = { type: 'component', entity, component }; };

});