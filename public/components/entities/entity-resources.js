'use strict';

import EntityType from './entity-type.js';
import Entity from './entity.js';

export default class EntityResources extends Entity {
  constructor(id, host, access) {
    super(id, host, access);
  }

  get type() {
    return EntityType.RESOURCES;
  }

  _load() {
    this.loadKeys(() => {});
  }

  get keys() {
    return this._keys;
  }

  loadKeys(done) {
    if(this._keys) { return done(this._keys); }
    this.access.resources.resources.keys(this.id, (res) => {
      this._keys = res;
      done(this._keys);
    });
  }

  loadData(key, done) {
    this.access.resources.resources.load(this.id, key, done);
  }
};
