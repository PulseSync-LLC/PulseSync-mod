import { bootstrapWebHost } from './bootstrap'

void bootstrapWebHost().catch(error => {
    window.musicDesktop?.pulsesync.webHost.reportHealth?.({
        status: 'failed',
        message: error instanceof Error ? error.message : String(error),
    })
    console.error('PulseSync WebHost failed to start', error)
})
