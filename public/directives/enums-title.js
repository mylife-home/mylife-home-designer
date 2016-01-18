'use strict';

angular.module('mylife-home-designer.directives')
.directive('enumsTitle', function(enumsMetadata) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      function refresh(value) {
        if(!value.type || typeof(value.value) === 'undefined') {
          element.attr('title', undefined);
          return;
        }
        element.attr('title', enumsMetadata.displayName(value.type, value.value));
      }

      scope.$watch(attrs.enumsTitle, refresh, true);
      refresh(scope.$eval(attrs.enumsTitle));
    }
  };
});
