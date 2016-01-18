'use strict';

angular.module('mylife-home-designer.components')
.factory('enumsMetadata', function(images) {

  const enums = {
    EntityType: [
      { id : 'UNKNOWN',   value: 0, image: images.Network,  displayName: '<unknown>' },
      { id : 'CORE',      value: 1, image: images.NetCore,  displayName: 'Core'      },
      { id : 'RESOURCES', value: 2, image: images.NetUIRes, displayName: 'Resources' },
      { id : 'UI',        value: 3, image: images.NetUI,    displayName: 'UI'        }
    ]
  };

  function getItem(type, item) {
    const enumType = enums[type];
    if(!enumType) {
      throw new Error(`enum type '${type}' does not exists`);
    }

    if(typeof(item) === 'string') {
      let ret = enumType.find((it) => it.id === item);
      if(!ret) {
        throw new Error(`value  '${item}' does not exists in enum type '${type}'`);
      }
      return ret;
    }

    if(typeof(item) === 'number') {
      let ret = enumType.find((it) => it.value === item);
      if(!ret) {
        throw new Error(`value  '${item}' does not exists in enum type '${type}'`);
      }
      return ret;
    }

    throw new Error(`unhandled item type: '${type}'`);
  }

  return {
    image : (type, item) => {
      return getItem(type, item).image;
    },

    displayName : (type, item) => {
      return getItem(type, item).displayName;
    }
  };
});