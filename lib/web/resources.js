'use strict';

const express = require('express');

module.exports = function(netRepository) {

  const router = express.Router();

  router.route('/resources/keys/:entityId').get(function(req, res) {
    const entity = netRepository.getEntity(req.params.entityId);
    entity.keys((err, list) => {
      if(err) { return res.status(500).json(err); }
      res.json(list);
    });
  });

  router.route('/resources/load/:entityId/:key').get(function(req, res) {
    const entity = netRepository.getEntity(req.params.entityId);
    entity.load(req.params.key, (err, data) => {
      if(err) { return res.status(500).json(err); }
      res.json(data);
    });
  });

  return router;
};
