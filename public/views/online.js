'use strict';

angular.module('mylife-home-designer.views')

.controller('onlineController', function (repository, images, pluginManip) {

  this.entities = repository.entities;
  this.types    = repository.types;
  this.detail   = null;

  this.refresh = function(entity) {
    entity.reset();
    this.detail = null;
  }

  this.showEntityDetail = function(entity) {
    this.detail = {
      type: 'entity',
      entity
    };
  };

  this.showResourceDetail = function(entity, key) {
    this.detail = {
      type: 'resource',
      entity,
      key
    };
  };

  this.showPluginDetail = function(entity, plugin) {
    this.detail = {
      type: 'plugin',
      entity,
      plugin,
      pluginClass: pluginManip.parseClass(plugin.clazz),
      pluginConfig: pluginManip.parseConfig(plugin.config),
    };
  };

  this.showComponentDetail = function(entity, component) {
    this.detail = {
      type: 'component',
      entity,
      component,
      plugin: findComponentPlugin(entity, component)
    };
  };

  function findComponentPlugin(entity, component) {
    for(let plugin of entity.plugins) {
      if(plugin.library === component.library &&
         plugin.type === component.type) {
        return plugin;
      }
    }
  }

});