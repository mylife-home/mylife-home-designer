'use strict';

import 'angular';
//import 'angular-route';
import 'angular-bootstrap';
import './components/components.js';
import './components/data.js';
import './components/repository.js';
import './views/views.js';
import './views/main.js';
import './views/startup.js';

angular.module('mylife-home-designer', [
//  'ngRoute',
  'ui.bootstrap',
  'mylife-home-designer.components',
  'mylife-home-designer.views'
]);
