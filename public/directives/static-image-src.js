'use strict';

angular.module('mylife-home-designer.directives')
.directive('staticImageSrc', function(images) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.attr('src', images[attrs.staticImageSrc]);
    }
  };
});
