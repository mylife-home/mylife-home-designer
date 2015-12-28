'use strict';

import EntityType from './entity-type.js';

export default class Entity {
  constructor(id, host, access) {
    this._id     = id;
    this._host   = host;
    this._access = access;

    this._load();
  }

  reset(done) {
    this.access.resources.reset(this.id, () => {
      this._load();
      done();
    });
  }

  _load() {
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
