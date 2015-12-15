'use strict';

const Entity          = require('./entity');
const EntityCore      = require('./entity-core');
const EntityResources = require('./entity-resources');
const EntityUI        = require('./entity-ui');

module.exports = class EntityFactory {

  static create(owner, nick) {
    const pos = nick.indexOf('_');
    if(pos === -1 ) { return new Entity(owner, nick, nick); }
    const type = nick.substr(0, pos);
    const host = nick.substr(pos + 1);

    let EType = Entity;
    switch(type) {
      case 'mylife-home-core'      : EType = EntityCore; break;
      case 'mylife-home-resources' : EType = EntityResources; break;
      case 'mylife-home-ui'        : EType = EntityUI; break;
    }

    return new EType(owner, nick, host);
  }
};
