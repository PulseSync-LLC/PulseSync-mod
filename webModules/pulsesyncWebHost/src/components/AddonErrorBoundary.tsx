import { Component, type ReactNode } from 'react'

type AddonErrorBoundaryProps = {
    addonId: string
    children: ReactNode
}

type AddonErrorBoundaryState = {
    error: Error | null
}

export class AddonErrorBoundary extends Component<AddonErrorBoundaryProps, AddonErrorBoundaryState> {
    state: AddonErrorBoundaryState = { error: null }

    static getDerivedStateFromError(error: Error): AddonErrorBoundaryState {
        return { error }
    }

    componentDidCatch(error: Error) {
        console.error(`[PulseSync addon: ${this.props.addonId}] React render failed`, error)
    }

    render() {
        if (this.state.error) {
            return (
                <div role="alert" data-pulsesync-addon-error={this.props.addonId}>
                    Аддон {this.props.addonId} завершился с ошибкой
                </div>
            )
        }

        return this.props.children
    }
}
