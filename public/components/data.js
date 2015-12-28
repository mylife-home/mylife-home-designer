'use strict';

import io from 'socket.io-client';

angular.module('mylife-home-designer.components')

.factory('resources', function($http) {
  return {
    resources: {
      keys: function(entityId, cb) {
        $http.get(`/resources/resources/keys/${entityId}`)
          .then(function(res) {
            cb(res.data);
          }, function(error) {
            console.log(error);
          });
      },
      load: function(entityId, key, cb) {
        $http.get(`/resources/resources/load/${entityId}/${key}`)
          .then(function(res) {
            cb(res.data);
          }, function(error) {
            console.log(error);
          });
      }
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
