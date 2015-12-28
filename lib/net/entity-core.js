'use strict';

const EntityType = require('./entity-type');
const Entity     = require('./entity');

module.exports = class EntityCore extends Entity {

  constructor(owner, id, host) {
    super(owner, id, host);
  }

  get type() {
    return EntityType.CORE;
  }

  reset() {
    this._plugins = undefined;
    this._components = undefined;
  }

  plugins(done) {
    if(this._plugins) { return setImmediate(done, null, this._plugins); }
    this.owner.jpacket.corePlugins((err, res) => {
      if(err) { return setImmediate(done, err); }
      this._plugins = res;
      return setImmediate(done, null, this._plugins);
    }, this.id);
  }

  components(done) {
    if(this._components) { return setImmediate(done, null, this._components); }
    this.owner.jpacket.coreComponents((err, res) => {
      if(err) { return setImmediate(done, err); }
      this._components = res;
      return setImmediate(done, null, this._components);
    }, this.id);
  }
};
