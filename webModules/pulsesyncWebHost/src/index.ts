import { bootstrapWebHost } from './bootstrap'
import { WEB_HOST_HEALTH_EVENT } from './constants'

void bootstrapWebHost().catch(error => {
    window.desktopEvents?.send?.(WEB_HOST_HEALTH_EVENT, {
        status: 'failed',
        message: error instanceof Error ? error.message : String(error),
    })
    console.error('PulseSync WebHost failed to start', error)
})
