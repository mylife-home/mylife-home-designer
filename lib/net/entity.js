'use strict';

const EntityType = require('./entity-type');
const accesses   = require('./accesses');

module.exports = class Entity {

  constructor(owner, nick) {
    this._owner = owner;
    this._id = nick;

    this._type = EntityType.UNKNOWN;
    const parts = this._id.split('_');
    if(parts.length !== 2) { return; }
    switch(parts[0]) {
      case 'mylife-home-core':
        this._type = EntityType.CORE;
        this._access = new accesses.Core(this._owner, this);
        break;

      case 'mylife-home-resources':
        this._type = EntityType.RESOURCES;
        this._access = new accesses.Resources(this._owner, this);
        break;

      case 'mylife-home-ui':
        this._type = EntityType.UI;
        this._access = new accesses.UI(this._owner, this);
        break;
    }
    this._host = parts[1];
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  get access() {
    return this._access;
  }
};
