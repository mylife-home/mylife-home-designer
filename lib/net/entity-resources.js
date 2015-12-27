'use strict';

const EntityType = require('./entity-type');
const Entity     = require('./entity');

module.exports = class EntityResources extends Entity {

  constructor(owner, id, host) {
    super(owner, id, host);
  }

  get type() {
    return EntityType.RESOURCES;
  }
};
