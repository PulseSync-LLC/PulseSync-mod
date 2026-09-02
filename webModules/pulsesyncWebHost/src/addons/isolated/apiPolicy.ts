import { PULSESYNC_WEB_HOST_API_V1_RPC_METHODS } from '@pulsesync/yamusic-types'

export const ISOLATED_API_METHODS = PULSESYNC_WEB_HOST_API_V1_RPC_METHODS

export const ISOLATED_API_METHOD_SET: ReadonlySet<string> = new Set(ISOLATED_API_METHODS)

export const ISOLATED_ADDON_SCOPED_API_METHOD_SET: ReadonlySet<string> = new Set([
    'setTrackReplacement',
    'setTrackReplacements',
    'removeTrackReplacement',
    'clearTrackReplacements',
    'showToast',
])
