'use strict';

angular.module('mylife-home-designer.directives')
.directive('enumsImageSrc', function(enumsMetadata) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      function refresh(value) {
        if(!value.type || typeof(value.value) === 'undefined') {
          element.attr('src', undefined);
          return;
        }
        element.attr('src', enumsMetadata.image(value.type, value.value));
      }

      scope.$watch(attrs.enumsImageSrc, refresh, true);
      refresh(scope.$eval(attrs.enumsImageSrc));
    }
  };
});
