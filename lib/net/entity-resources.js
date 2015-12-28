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

  reset() {
    this._keys = undefined;
  }

  keys(done) {
    if(this._keys) { return setImmediate(done, null, this._keys); }
    this.owner.jpacket.resourcesEnum((err, res) => {
      if(err) { return setImmediate(done, err); }
      this._keys = res;
      return setImmediate(done, null, this._keys);
    }, this.id);
  }

  load(key, done) {
    this.owner.jpacket.resourcesGet(key, (err, res) => {
      if(err) { return setImmediate(done, err); }
      return setImmediate(done, null, res);
    }, this.id);

  }
};
