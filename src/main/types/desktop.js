'use strict';
var IpcChannel = ((IpcChannel2) => {
    IpcChannel2['BOOTSTRAP'] = 'desktop:bootstrap';
    IpcChannel2['WINDOW_MINIMIZE'] = 'desktop:window:minimize';
    IpcChannel2['WINDOW_MAXIMIZE'] = 'desktop:window:maximize';
    IpcChannel2['WINDOW_CLOSE'] = 'desktop:window:close';
    IpcChannel2['COMMON_WINDOW_CLOSE'] = 'desktop:common:window:close';
    IpcChannel2['INSTALL_UPDATE'] = 'desktop:application:install-update';
    IpcChannel2['APPLICATION_READY'] = 'desktop:application:ready';
    IpcChannel2['APPLICATION_THEME'] = 'desktop:application:theme';
    IpcChannel2['AUTH_DIAGNOSTIC'] = 'desktop:authorization:diagnostic';
    IpcChannel2['GET_PASSPORT_LOGIN'] = 'desktop:authorization:get-passport-login';
    IpcChannel2['GET_YANDEX_UID'] = 'desktop:authorization:get-yandex-uid';
    IpcChannel2['UPDATE_AVAILABLE'] = 'desktop:application:update-available';
    IpcChannel2['REFRESH_APPLICATION_DATA'] = 'desktop:application:refresh-data';
    IpcChannel2['FIRST_LAUNCH'] = 'desktop:application:first-launch';
    IpcChannel2['PROBABILITY_BUCKET'] = 'desktop:application:probability-bucket';
    IpcChannel2['LOAD_RELEASE_NOTES'] = 'desktop:application:load-release-notes';
    IpcChannel2['PLAYER_STATE'] = 'desktop:player:state';
    IpcChannel2['PLAYER_ACTION'] = 'desktop:player:action';
    IpcChannel2['OPEN_DEEPLINK'] = 'desktop:navigation:open-deeplink';
    IpcChannel2['TRACKS_AVAILABILITY_UPDATED'] = 'desktop:offline:tracks-availability-updated';
    IpcChannel2['REPOSITORY_META_UPDATED'] = 'desktop:offline:repository-meta-updated';
    IpcChannel2['REFRESH_TRACKS_AVAILABILITY'] = 'desktop:offline:refresh-tracks-availability';
    IpcChannel2['REFRESH_REPOSITORY_META'] = 'desktop:offline:refresh-repository-meta';
    IpcChannel2['SAVE_PNG_IMAGE_TO_LOCAL_DISK'] = 'desktop:files:save-png';
    return IpcChannel2;
})(IpcChannel || {});
var RendererTrustProfile = ((RendererTrustProfile2) => {
    RendererTrustProfile2['APPLICATION'] = 'application';
    RendererTrustProfile2['AUTH'] = 'auth';
    RendererTrustProfile2['UNTRUSTED'] = 'untrusted';
    return RendererTrustProfile2;
})(RendererTrustProfile || {});

module.exports = { IpcChannel, RendererTrustProfile };
