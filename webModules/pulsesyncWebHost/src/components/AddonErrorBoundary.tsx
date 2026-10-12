import { Component, type ReactNode } from 'react'
import { AddonErrorFallback } from './AddonErrorFallback'

type AddonErrorBoundaryProps = {
    addonId: string
    children: ReactNode
    onError?: (error: Error) => void
}

type AddonErrorBoundaryState = {
    error: Error | null
    dismissed: boolean
    retryVersion: number
}

export class AddonErrorBoundary extends Component<AddonErrorBoundaryProps, AddonErrorBoundaryState> {
    state: AddonErrorBoundaryState = { error: null, dismissed: false, retryVersion: 0 }

    static getDerivedStateFromError(error: Error) {
        return { error, dismissed: false }
    }

    componentDidCatch(error: Error) {
        if (this.props.onError) {
            this.props.onError(error)
        } else {
            console.error(`[PulseSync addon: ${this.props.addonId}] React render failed`, error)
        }
    }

    private readonly retry = () =>
        this.setState(state => ({ error: null, dismissed: false, retryVersion: state.retryVersion + 1 }))
    private readonly dismiss = () => this.setState({ dismissed: true })

    render() {
        if (this.state.error && !this.state.dismissed) {
            return (
                <AddonErrorFallback
                    key={this.state.retryVersion}
                    addonId={this.props.addonId}
                    error={this.state.error}
                    onRetry={this.retry}
                    onDismiss={this.dismiss}
                />
            )
        }

        if (this.state.error) {
            return null
        }

        return this.props.children
    }
}
