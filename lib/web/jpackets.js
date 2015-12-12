'use strict';

const express = require('express');

module.exports = function() {

  const router = express.Router();

  router.route('/request/:target').post(function(req) {
    // TODO req.params.target
  });

  return router;
};
