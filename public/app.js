'use strict';

import 'angular';
//import 'angular-route';
import 'angular-bootstrap';

import './components/components.js';
import './components/data.js';
import './components/repository.js';
import './components/images.js';
import './components/enums-metadata.js';

import './directives/directives.js';
import './directives/enums-image-src.js';

import './views/views.js';
import './views/main.js';
import './views/startup.js';
import './views/online.js';


angular.module('mylife-home-designer', [
//  'ngRoute',
  'ui.bootstrap',
  'mylife-home-designer.components',
  'mylife-home-designer.views',
  'mylife-home-designer.directives'
]);
