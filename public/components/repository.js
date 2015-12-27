'use strict';

const EntityType = {
  UNKNOWN   : 0,
  CORE      : 1,
  RESOURCES : 2,
  UI        : 3
};

class Entity {
  constructor(id, host) {
    this._id = id;
    this._host = host;
  }

  get owner() {
    return this._owner;
  }

  get id() {
    return this._id;
  }

  get host() {
    return this._host;
  }

  get type() {
    return EntityType.UNKNOWN;
  }
};

class EntityCore extends Entity {
  constructor(id, host) {
    super(id, host);
  }

  get type() {
    return EntityType.CORE;
  }
};

class EntityResources extends Entity {
  constructor(id, host) {
    super(id, host);
  }

  get type() {
    return EntityType.RESOURCES;
  }
};

class EntityUI extends Entity {
  constructor(id, host) {
    super(id, host);
  }

  get type() {
    return EntityType.UI;
  }
};

angular.module('mylife-home-designer.components')

.factory('repository', function(socket) {

  function createEntity(data) {
    let EType = Entity;
    switch(data.type) {
      case EntityType.CORE      : EType = EntityCore; break;
      case EntityType.RESOURCES : EType = EntityResources; break;
      case EntityType.UI        : EType = EntityUI; break;
    }
    entities.push(new EType(data.id, data.host));
  }

  function deleteEntity(data) {
    const index = entities.findIndex((entity) => entity.id === data.id);
    if(index === -1) { return; } // should not arrive ?!
    entities.splice(index, 1);
  }

  const entities = [];

  socket.on('repository:clear', () => { entities.length = 0; });
  socket.on('repository:add', createEntity);
  socket.on('repository:remove', deleteEntity);

  return {
    entities: entities
  };
});