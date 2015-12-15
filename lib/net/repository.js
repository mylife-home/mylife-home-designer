'use strict';

const EventEmitter  = require('events');
const common        = require('mylife-home-common');
const EntityFactory = require('./entity-factory');

module.exports = class Repository extends EventEmitter {

  constructor(ircClient) {
    super();

    this._ircClient = ircClient;
    this._netJpacketClient = new common.net.jpacket.Client(this._ircClient);

    this._entities = new Map();

    this._ircClient.on('names',(c, u) => { this._reset(Object.keys(u)); });
    this._ircClient.on('join', (c, n) => { this._add(n); });
    this._ircClient.on('nick', this._change.bind(this));
    this._ircClient.on('part', (c, n) => { this._remove(n); });
    this._ircClient.on('kick', (c, n) => { this._remove(n); });
    this._ircClient.on('kill', this._remove.bind(this));
    this._ircClient.on('quit', this._remove.bind(this));
  }

  get entities () {
    return Array.from(this._entities.values());
  }

  _reset(nicks) {
    this._clear();
    for(let nick of nicks) {
      this._add(nick);
    }
  }

  _clear() {
    this._entities.clear();
    this.emit('clear');
  }

  _add(nick) {
    if(nick === this._irc.nick) { return; }
    const entity = EntityFactory.create(this, nick);
    this._entities.set(entity.id, entity);
    this.emit('add', entity.id, entity);
  }

  _remove(nick) {
    if(nick === this._irc.nick) { return; }
    const entity = this._entities.get(nick);
    if(!entity) { return; }
    this._objects.delete(entity.id);
    this.emit('remove', entity.id, entity);
  }

  _change(oldNick, newNick) {
    if(oldNick === this._irc.nick) { return; }
    if(newNick === this._irc.nick) { return; }

    this._remove(oldNick);
    this._add(newNick);
  }
};
