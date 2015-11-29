'use strict';

const EventEmitter = require('events');
const os           = require('os');
const async        = require('async');
const common       = require('mylife-home-common');
const web          = require('./web');

module.exports = class {
  constructor(config) {
    const netConfig        = config.net;
    this._netConfig        = netConfig;
    this._netAgent         = new common.net.Client(netConfig, this._adminNick(), [netConfig.admin_channel]);
    //this._netJpacketClient = new common.net.jpacket.Client(this._netAgent);
    this._webServer        = new web.Server(config.web.port);
  }

  _adminNick() {
    return 'mylife-home-designer_' + os.hostname().split('.')[0];
  }

  close(cb) {
    const array = [
      (cb) => this._webServer.close(cb),
      (cb) => this._netAgent.close(cb)
    ];

    async.parallel(array, cb);
  }
};