'use strict';

const EventEmitter = require('events');
const common       = require('mylife-home-common');

module.exports = class Repository extends EventEmitter {

  constructor(ircClient) {
    super();

    this._ircClient = ircClient;
    this._netJpacketClient = new common.net.jpacket.Client(this._ircClient);
    // TODO
  }

  get entities () {
    // TODO
  }

  // TODO: raise events on entities changed

};
