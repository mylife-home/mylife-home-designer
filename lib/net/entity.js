'use strict';

const EntityType      = require('./entity-type');

module.exports = class Entity {

  constructor(owner, id, host) {
    this._owner = owner;
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

  export() {
    return {
      id: this.id,
      host: this.host,
      type: this.type
    }
  }
};
