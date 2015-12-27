'use strict';

import io from 'socket.io-client';

angular.module('mylife-home-designer.components')

.factory('resources', function($http) {
  return {
    load: function(name, cb) {
      $http.get('/resources/get/' + name, { cache : true })
        .then(function(res) {
          cb(res.data);
        }, function(error) {
          console.log(error);
        });
    }
  };
})

.factory('socket', function($rootScope) {

  const socket = io();

  return {
    // wrap for $apply
    on: function(name, cb) {
      socket.on(name, (data) => {
        $rootScope.$apply(() => {
          cb(data);
        });
      });
    },

    emit: socket.emit.bind(socket)
  };
});