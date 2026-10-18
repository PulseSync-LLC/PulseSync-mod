import {
    diagnosticError,
    diagnosticValue,
    shouldReportDiagnostic,
    type DiagnosticEvent,
} from '../../runtime/addonDiagnostics'
import type { WebHostAddonAsset } from '../contracts'

export function createAddonDiagnosticConsole(addon: WebHostAddonAsset) {
    const id = crypto.randomUUID()
    const prefix = `[PulseSync addon: ${addon.name} (${addon.id})]`
    const reportedErrors = new Set<string>()
    let resetErrors = 0
    let enabled = false

    const record = (event: DiagnosticEvent) => {
        if (!shouldReportDiagnostic(event, enabled)) {
            return
        }

        if (event.operation.startsWith('logger.')) {
            return
        }

        const operation = event.error?.operation ?? event.operation
        const stage = event.error?.stage ?? event.stage
        const requestId = event.error?.requestId ?? event.requestId
        const context = {
            addonId: addon.id,
            addonVersion: addon.version,
            sessionId: id,
            operation,
            stage,
            status: event.status,
            requestId,
            operationId: event.operationId,
            parentId: event.parentId,
            durationMs: event.durationMs,
        }
        const duration = event.durationMs === undefined ? '' : ` (${event.durationMs.toFixed(1)} ms)`
        const request = requestId === undefined ? '' : ` #${requestId}`

        if (event.error) {
            const error = diagnosticError(event.error, context)
            const errorId = event.error.errorId

            if (errorId && reportedErrors.has(errorId)) {
                return
            }

            if (errorId) {
                reportedErrors.add(errorId)

                if (reportedErrors.size > 32) {
                    reportedErrors.delete(reportedErrors.values().next().value!)
                }

                if (!resetErrors) {
                    resetErrors = window.setTimeout(() => {
                        reportedErrors.clear()
                        resetErrors = 0
                    }, 0)
                }
            }

            const level = event.status === 'cancelled' ? 'debug' : event.status === 'timed-out' ? 'warn' : 'error'

            console[level](
                `${prefix} ${operation}${request} [${stage}] ${event.error.code ?? event.status}: ${error.message}`,
                error,
                context,
            )

            return
        }

        const level = event.status === 'failed' ? 'error' : event.status === 'timed-out' ? 'warn' : 'debug'

        console[level](
            `${prefix} ${operation}${request} [${stage}] ${event.status}${duration}`,
            context,
            ...(event.data === undefined ? [] : [diagnosticValue(event.data)]),
        )
    }

    return {
        id,
        get enabled() {
            return enabled
        },
        setEnabled(value: boolean) {
            enabled = value
        },
        record,
        receive: (event: DiagnosticEvent) => {
            if (event && typeof event.operation === 'string' && typeof event.status === 'string') {
                record(event)
            }
        },
    }
}
