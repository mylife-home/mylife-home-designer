'use strict';

/*
function buildClazz(metadata) {
  const attributes = metadata.attributes;
  const actions    = metadata.actions;
  return Object.keys(actions).map((act) => {
    const params = actions[act].map((type) => type.toString()).join(',');
    return '.' + act + (params ? ',' + params : '');
  }).concat(Object.keys(attributes).map((attr) => {
    return '=' + attr + ',' + attributes[attr].toString();
  })).join('|');
}
*/

function parseClass(str) {
  const ret = {
    attributes: [],
    actions: []
  }
  const items = str.split('|');
  for(let item of items) {
    const type = item.charAt(0);
    const parts = item.substring(1).split(',');
    const name = parts[0];
    parts.shift();
    const types = parts;

    switch(type) {
    case '.':
      // action
      ret.actions.push({ name, args: types });
      break;

    case '=':
      // attribute
      ret.attributes.push({ name, type: types[0] });
      break;
    }
  }
  return ret;
}

/*
function buildConfig(metadata) {
  const configuration = metadata.configuration;
  return Object.keys(configuration).map((name) => {
    let type;
    switch(configuration[name]) {
      case 'string': type = 's'; break;
      case 'integer': type = 'i'; break;
      default: throw new Error('Unknown type');
    }
    return type + ':' + name;
  }).join('|');
}
*/

function parseConfig(str) {
  const ret = [];
  const items = str.split('|');
  for(let item of items) {
    const parts = item.split(':');
    const type = parts[0];
    const name = parts[1];
    switch(type) {
    case 's':
      ret.push({name, type: 'string' });
      break;
    case 'i':
      ret.push({name, type: 'integer' });
      break;
    case 'n':
      ret.push({name, type: 'integer' });
      break;
    case 'b':
      ret.push({name, type: 'boolean' });
      break;
    }
  }
  return ret;
}

angular.module('mylife-home-designer.components')
.factory('pluginManip', function() {

  return {
    parseClass,
    parseConfig
  };
});