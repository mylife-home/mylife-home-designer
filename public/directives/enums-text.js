'use strict';

angular.module('mylife-home-designer.directives')
.directive('enumsText', function(enumsMetadata) {
  return {
    template: function(element, attrs) {
      return enumsMetadata.displayName(attrs.type, attrs.value);
    }
  };
});
