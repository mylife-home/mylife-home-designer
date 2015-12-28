'use strict';

const EntityType = require('./entity-type');
const Entity     = require('./entity');

module.exports = class EntityUI extends Entity {

  constructor(owner, id, host) {
    super(owner, id, host);
  }

  get type() {
    return EntityType.UI;
  }

  reset() {
  }
};
