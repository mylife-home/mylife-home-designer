'use strict';

import EntityType from './entity-type.js';

export default class Entity {
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
