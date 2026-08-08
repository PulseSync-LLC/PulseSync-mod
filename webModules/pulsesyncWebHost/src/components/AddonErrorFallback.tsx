import { createPortal } from 'react-dom'

type AddonErrorFallbackProps = {
    addonId: string
    error: Error
    onRetry: () => void
    onDismiss: () => void
}

const styles = `
    .pulsesync-addon-error-backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--ym-z-index-overlay, 700);
        display: grid;
        place-items: center;
        box-sizing: border-box;
        padding: var(--ym-spacer-size-xxl, 1.5rem);
        background: var(--ym-background-color-primary-enabled-overlay, rgba(0, 0, 0, 0.5));
        color: var(--ym-controls-color-primary-text-enabled_variant, #e6e6e6);
        font-family: var(--ym-font-text, "YS Text", Arial, sans-serif);
        animation: pulsesync-addon-error-fade-in 0.18s ease-out both;
    }

    .pulsesync-addon-error-card {
        position: relative;
        width: min(26.875rem, 100%);
        box-sizing: border-box;
        padding: var(--ym-spacer-size-xxl, 1.5rem);
        overflow: hidden;
        background: var(--ym-background-color-primary-enabled-popover, #1a1a1a);
        border-radius: var(--ym-radius-size-xl, 1rem);
        box-shadow:
            0 0.0625rem 1.5rem var(--ym-shadow-xl, rgba(0, 0, 0, 0.48)),
            0 -0.0625rem 1.5rem var(--ym-shadow-s, rgba(0, 0, 0, 0.24));
        animation: pulsesync-addon-error-card-in 0.24s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }

    .pulsesync-addon-error-close {
        position: absolute;
        inset-block-start: var(--ym-spacer-size-l, 1rem);
        inset-inline-end: var(--ym-spacer-size-l, 1rem);
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
        color: var(--ym-controls-color-secondary-text-enabled, rgba(255, 255, 255, 0.5));
        background: transparent;
        border: 0;
        border-radius: var(--ym-radius-size-round, 50%);
        cursor: pointer;
        transition:
            color var(--ym-duration-transition, 0.3s),
            background-color var(--ym-duration-transition, 0.3s);
    }

    .pulsesync-addon-error-close:hover {
        color: var(--ym-controls-color-secondary-text-hovered, #e6e6e6);
        background: var(--ym-controls-color-secondary-default-hovered, rgba(255, 255, 255, 0.12));
    }

    .pulsesync-addon-error-close:focus-visible,
    .pulsesync-addon-error-button:focus-visible,
    .pulsesync-addon-error-details summary:focus-visible {
        outline: 0.125rem solid var(--ym-controls-color-primary-default-focused_stroke, rgba(255, 255, 0, 0.5));
        outline-offset: 0.125rem;
    }

    .pulsesync-addon-error-title {
        margin: 0;
        padding-inline-end: 2.5rem;
        color: var(--ym-controls-color-primary-text-enabled_variant, #e6e6e6);
        font-family: var(--ym-font-heading, "YSMusic Headline", Arial, sans-serif);
        font-size: var(--ym-font-size-headline-s, 1.5rem);
        font-weight: var(--ym-font-weight-bold, 700);
        line-height: var(--ym-font-line-height-headline-s, 1.75rem);
    }

    .pulsesync-addon-error-description {
        margin: var(--ym-spacer-size-m, 0.75rem) 0 0;
        color: var(--ym-controls-color-secondary-text-enabled, rgba(255, 255, 255, 0.5));
        font-size: var(--ym-font-size-label-m, 0.875rem);
        line-height: var(--ym-font-line-height-label-m, 1.25rem);
    }

    .pulsesync-addon-error-description code {
        color: var(--ym-controls-color-primary-text-enabled_variant, #e6e6e6);
        font: inherit;
        font-weight: var(--ym-font-weight-medium, 500);
    }

    .pulsesync-addon-error-details {
        margin-block-start: var(--ym-spacer-size-xl, 1.25rem);
        color: var(--ym-controls-color-secondary-text-enabled, rgba(255, 255, 255, 0.5));
        font-size: var(--ym-font-size-label-s, 0.8125rem);
    }

    .pulsesync-addon-error-details summary {
        display: inline-flex;
        align-items: center;
        gap: var(--ym-spacer-size-xxs, 0.375rem);
        border-radius: var(--ym-radius-size-xs, 0.25rem);
        cursor: pointer;
        list-style: none;
        user-select: none;
    }

    .pulsesync-addon-error-details summary::-webkit-details-marker {
        display: none;
    }

    .pulsesync-addon-error-details summary::before {
        content: "›";
        font-size: 1rem;
        transform: rotate(0deg);
        transition: transform var(--ym-duration-transition, 0.3s);
    }

    .pulsesync-addon-error-details summary:hover,
    .pulsesync-addon-error-details[open] summary {
        color: var(--ym-controls-color-secondary-text-hovered, #e6e6e6);
    }

    .pulsesync-addon-error-details[open] summary::before {
        transform: rotate(90deg);
    }

    .pulsesync-addon-error-details pre {
        max-height: 8rem;
        margin: var(--ym-spacer-size-m, 0.75rem) 0 0;
        padding: var(--ym-spacer-size-m, 0.75rem);
        overflow: auto;
        overscroll-behavior: contain;
        color: var(--ym-controls-color-secondary-on_default-enabled, #e6e6e6);
        background: var(--ym-background-color-primary-enabled-content, #121212);
        border-radius: var(--ym-radius-size-m, 0.5rem);
        font: 0.75rem/1.45 "SFMono-Regular", Consolas, monospace;
        scrollbar-color: var(--ym-controls-color-secondary-on_outline-enabled_variant, grey) transparent;
        scrollbar-width: thin;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }

    .pulsesync-addon-error-details pre::-webkit-scrollbar {
        width: 0.625rem;
        height: 0.625rem;
    }

    .pulsesync-addon-error-details pre::-webkit-scrollbar-track,
    .pulsesync-addon-error-details pre::-webkit-scrollbar-corner {
        background: transparent;
    }

    .pulsesync-addon-error-details pre::-webkit-scrollbar-thumb {
        min-height: 2rem;
        background: var(--ym-controls-color-secondary-on_outline-enabled_variant, grey);
        background-clip: content-box;
        border: 0.1875rem solid transparent;
        border-radius: var(--ym-radius-size-round, 50%);
    }

    .pulsesync-addon-error-button {
        width: 100%;
        min-height: 3rem;
        margin-block-start: var(--ym-spacer-size-xxl, 1.5rem);
        padding-inline: var(--ym-spacer-size-xl, 1.25rem);
        color: var(--ym-controls-color-primary-on_default-enabled, #000);
        background: var(--ym-controls-color-primary-default-enabled, #ff0);
        border: 0;
        border-radius: var(--ym-radius-size-xxxl, 6.25rem);
        font: inherit;
        font-size: var(--ym-font-size-label-m, 0.875rem);
        font-weight: var(--ym-font-weight-medium, 500);
        cursor: pointer;
        transition:
            background-color var(--ym-duration-transition, 0.3s),
            transform 0.1s ease;
    }

    .pulsesync-addon-error-button:hover {
        background: var(--ym-controls-color-primary-default-hovered, #dada0b);
    }

    .pulsesync-addon-error-button:active {
        background: var(--ym-controls-color-primary-default-pressed, #ffff80);
        transform: scale(0.99);
    }

    @keyframes pulsesync-addon-error-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes pulsesync-addon-error-card-in {
        from {
            opacity: 0;
            transform: translateY(0.5rem) scale(0.98);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media (max-width: 480px) {
        .pulsesync-addon-error-backdrop {
            padding: var(--ym-spacer-size-l, 1rem);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .pulsesync-addon-error-backdrop,
        .pulsesync-addon-error-card {
            animation: none;
        }
    }
`

export function AddonErrorFallback({ addonId, error, onRetry, onDismiss }: AddonErrorFallbackProps) {
    const portalTarget = document.body || document.documentElement
    const technicalDetails = error.stack || error.message

    return createPortal(
        <>
            <style>{styles}</style>
            <div
                className="pulsesync-addon-error-backdrop"
                role="dialog"
                aria-modal="true"
                aria-label={`Ошибка аддона ${addonId}`}
                data-pulsesync-addon-error={addonId}
            >
                <section className="pulsesync-addon-error-card">
                    <button className="pulsesync-addon-error-close" type="button" aria-label="Закрыть" onClick={onDismiss}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    <h2 className="pulsesync-addon-error-title">Аддон не запустился</h2>
                    <p className="pulsesync-addon-error-description">
                        В аддоне <code>{addonId}</code> произошла ошибка. Попробуйте запустить его ещё раз.
                    </p>

                    <details className="pulsesync-addon-error-details">
                        <summary>Подробности ошибки</summary>
                        <pre>{technicalDetails}</pre>
                    </details>

                    <button className="pulsesync-addon-error-button" type="button" onClick={onRetry}>
                        Попробовать снова
                    </button>
                </section>
            </div>
        </>,
        portalTarget,
    )
}
