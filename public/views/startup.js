'use strict';

angular.module('mylife-home-designer.views')

.controller('startupController', function (socket) {
  socket.on('repository:clear', function() {
    console.log('repository:clear');
  });
  socket.on('repository:add', function(entity) {
    console.log('repository:add', entity);
  });
  socket.on('repository:remove', function(id) {
    console.log('repository:remove', id);
  });

  this.text = 'TODO';
});