'use strict';

angular.module('mylife-home-designer.directives')
.directive('dynamicImageSrc', function(images) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      function refresh(value) {
        element.attr('src', images[value]);
      }

      scope.$watch(attrs.dynamicImageSrc, refresh, true);
      refresh(scope.$eval(attrs.dynamicImageSrc));
    }
  };
});
