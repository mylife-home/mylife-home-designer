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
};
