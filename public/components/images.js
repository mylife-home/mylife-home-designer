'use strict';

import entities from './entities/index.js';


angular.module('mylife-home-designer.components')
.factory('images', function() {
  return Object.freeze({
    Development             : 'images/open-icon-library/emblems/emblem-development.png',
    Busy                    : 'images/open-icon-library/apps/clock-2.png',

    VPanelProject           : 'images/open-icon-library/apps/knetconfig.png',
    UIProject               : 'images/open-icon-library/apps/knetworkmanager.png',
    ProjectToolbox          : 'images/open-icon-library/devices/audio-card-3.png',
    ProjectExplorer         : 'images/open-icon-library/devices/network-globe2.png',
    ProjectProperties       : 'images/open-icon-library/categories/preferences.png',

    CommandCancel           : 'images/open-icon-library/actions/dialog-cancel-2.png',
    CommandClose            : 'images/open-icon-library/actions/dialog-close-2.png',
    CommandOk               : 'images/open-icon-library/actions/dialog-ok-2.png',
    CommandRefresh          : 'images/open-icon-library/actions/view-refresh-4.png',
    CommandShow             : 'images/open-icon-library/actions/zoom.png',
    CommandNew              : 'images/open-icon-library/actions/document-new-4.png',
    CommandOpenFile         : 'images/open-icon-library/actions/document-open-7.png',
    CommandOpenRemote       : 'images/open-icon-library/actions/document-open-remote.png',
    CommandSave             : 'images/open-icon-library/actions/document-save-5.png',
    CommandSaveAs           : 'images/open-icon-library/actions/document-save-as-5.png',
    CommandSaveAll          : 'images/open-icon-library/actions/document-save-all.png',

    ProjectNew              : 'images/open-icon-library/actions/document-new-7.png',
    ProjectImport           : 'images/open-icon-library/actions/document-import-2.png',
    ProjectDeploy           : 'images/open-icon-library/actions/webexport.png',

    Network                 : 'images/open-icon-library/devices/network-wireless-4.png',
    NetUI                   : 'images/open-icon-library/places/user-desktop-2.png',
    NetUIRes                : 'images/open-icon-library/places/oxygen-style/network-server-database.png',
    NetUIHttp               : 'images/open-icon-library/places/oxygen-style/network-server-database.png',
    NetCore                 : 'images/open-icon-library/places/oxygen-style/network-workgroup.png',

    Entity                  : 'images/open-icon-library/places/oxygen-style/network-server.png',
    Component               : 'images/open-icon-library/devices/blockdevice-2.png',
    Plugin                  : 'images/open-icon-library/devices/audio-card-3.png',
    Resource                : 'images/open-icon-library/apps/development-database.png',

    Version                 : 'images/open-icon-library/mimetypes/crystal-style/application-octet-stream.png',

    CompAttribute           : 'images/open-icon-library/actions/zoom.png',
    CompAction              : 'images/open-icon-library/actions/system-run-6.png',
    CompMember              : 'images/Custom/run-zoom-merge.png',
    CompConfig              : 'images/open-icon-library/actions/preferences-system-3.png',
    CompBinding             : 'images/open-icon-library/actions/network-connect.png',
    CompClass               : 'images/open-icon-library/devices/network-globe2.png',

    PluginUsage             : 'images/open-icon-library/apps/knetconfig.png',
    PluginUsageUI           : 'images/open-icon-library/places/user-desktop-2.png',
    PluginUsageVPanel       : 'images/open-icon-library/places/oxygen-style/network-workgroup.png',
    PluginUsageDriver       : 'images/open-icon-library/devices/audio-card-3.png',

    PluginConfigTypeInteger : 'images/open-icon-library/mimetypes/crystal-style/application-octet-stream.png',
    PluginConfigTypeNumber  : 'images/open-icon-library/mimetypes/crystal-style/application-octet-stream.png',
    PluginConfigTypeBoolean : 'images/open-icon-library/mimetypes/crystal-style/application-octet-stream.png',
    PluginConfigTypeString  : 'images/open-icon-library/mimetypes/crystal-style/application-x-applix-word.png',

    UIWindow                : 'images/open-icon-library/places/crystal_clear-style/user-desktop.png',
    UIImage                 : 'images/open-icon-library/actions/insert-image-2.png',
    UIControlDisplay        : 'images/open-icon-library/devices/video-display.png',
    UIControlText           : 'images/open-icon-library/actions/format-font-2.png',

    DialogIconInfo          : 'images/open-icon-library/status/dialog-declare.png',
    DialogIconQuestion      : 'images/open-icon-library/status/dialog-question-2.png',
    DialogIconWarning       : 'images/open-icon-library/status/dialog-error.png',
    DialogIconError         : 'images/open-icon-library/status/dialog-error-5.png',

    ArrowDownBlue           : 'images/open-icon-library/actions/arrow-down.png',
    ArrowDownGreen          : 'images/open-icon-library/actions/arrow-down-3.png',
    ArrowDownDoubleBlue     : 'images/open-icon-library/actions/arrow-down-double.png',
    ArrowDownDoubleGreen    : 'images/open-icon-library/actions/arrow-down-double-3.png',
    ArrowUpBlue             : 'images/open-icon-library/actions/arrow-up.png',
    ArrowUpGreen            : 'images/open-icon-library/actions/arrow-up-3.png',
    ArrowUpDoubleBlue       : 'images/open-icon-library/actions/arrow-up-double.png',
    ArrowUpDoubleGreen      : 'images/open-icon-library/actions/arrow-up-double-3.png',
    ArrowLeftBlue           : 'images/open-icon-library/actions/arrow-left.png',
    ArrowLeftGreen          : 'images/open-icon-library/actions/arrow-left-3.png',
    ArrowLeftDoubleBlue     : 'images/open-icon-library/actions/arrow-left-double.png',
    ArrowLeftDoubleGreen    : 'images/open-icon-library/actions/arrow-left-double-3.png',
    ArrowRightBlue          : 'images/open-icon-library/actions/arrow-right.png',
    ArrowRightGreen         : 'images/open-icon-library/actions/arrow-right-3.png',
    ArrowRightDoubleBlue    : 'images/open-icon-library/actions/arrow-right-double.png',
    ArrowRightDoubleGreen   : 'images/open-icon-library/actions/arrow-right-double-3.png'
  });
});