'use strict';

import EntityType from './entity-type.js';
import Entity from './entity.js';

export default class EntityCore extends Entity {
  constructor(id, host, access) {
    super(id, host, access);
  }

  get type() {
    return EntityType.CORE;
  }

  _load() {
    this.loadPlugins(() => {});
    this.loadComponents(() => {});
  }

  get plugins() {
    return this._plugins;
  }

  loadPlugins(done) {
    if(this._keys) { return done(this._plugins); }
    this.access.resources.core.plugins(this.id, (res) => {
      this._plugins = res;
      done(this._plugins);
    });
  }

  get components() {
    return this._components;
  }

  loadComponents(done) {
    if(this._keys) { return done(this._components); }
    this.access.resources.core.components(this.id, (res) => {
      this._components = res;
      done(this._components);
    });
  }
};
