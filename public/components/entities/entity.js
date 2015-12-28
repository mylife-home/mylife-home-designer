'use strict';

import EntityType from './entity-type.js';

export default class Entity {
  constructor(id, host, access) {
    this._id     = id;
    this._host   = host;
    this._access = access;
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

  get access() {
    return this._access;
  }
};
