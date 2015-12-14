'use strict';

const express = require('express');

module.exports = function(netRepository) {

  const router = express.Router();

  router.route('/get/:serverId:key').get(function(/*req, res*/) {
    // TODO
//    netJPacketClient.resourcesGet(req.params.key, (err, list) => {
//      if(err) { return res.status(500).json(err); }
//      res.json(list);
//    });
  });

  return router;
};
