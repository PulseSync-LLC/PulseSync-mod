import { bootstrapWebHost } from './bootstrap'

void bootstrapWebHost().catch(error => console.error('PulseSync WebHost failed to start', error))
