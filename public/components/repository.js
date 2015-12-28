'use strict';

import entities from './entities/index.js';

angular.module('mylife-home-designer.components')

.factory('repository', function(socket) {

  function createEntity(data) {
    let EType = entities.Entity;
    switch(data.type) {
      case entities.EntityType.CORE      : EType = entities.EntityCore; break;
      case entities.EntityType.RESOURCES : EType = entities.EntityResources; break;
      case entities.EntityType.UI        : EType = entities.EntityUI; break;
    }
    entityList.push(new EType(data.id, data.host));
  }

  function deleteEntity(data) {
    const index = entityList.findIndex((entity) => entity.id === data.id);
    if(index === -1) { return; } // should not arrive ?!
    entityList.splice(index, 1);
  }

  const entityList = [];

  socket.on('repository:clear', () => { entityList.length = 0; });
  socket.on('repository:add', createEntity);
  socket.on('repository:remove', deleteEntity);

  return {
    entities: entityList
  };
});