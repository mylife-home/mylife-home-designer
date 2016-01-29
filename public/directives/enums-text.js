'use strict';

angular.module('mylife-home-designer.directives')
.directive('enumsText', function(enumsMetadata) {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {

      function refresh(value) {
        if(!value.type || typeof(value.value) === 'undefined') {
          element.html(undefined);
          return;
        }
        element.html(enumsMetadata.displayName(value.type, value.value));
      }

      scope.$watch(attrs.spec, refresh, true);
      refresh(scope.$eval(attrs.spec));
    }
  };
});
