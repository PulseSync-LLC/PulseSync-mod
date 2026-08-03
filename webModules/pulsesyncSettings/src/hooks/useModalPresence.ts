import { useCallback, useEffect, useRef, useState } from 'react'

const MODAL_TRANSITION_MS = 300

export function useModalPresence(initiallyOpen = false) {
  const [isMounted, setIsMounted] = useState(initiallyOpen)
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const closeTimerRef = useRef<number | undefined>(undefined)

  const clearPending = useCallback(() => {
    if (animationFrameRef.current !== undefined) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = undefined
    }

    if (closeTimerRef.current !== undefined) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = undefined
    }
  }, [])

  const open = useCallback(() => {
    clearPending()
    setIsMounted(true)
    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = undefined
        setIsVisible(true)
      })
    })
  }, [clearPending])

  const close = useCallback(() => {
    clearPending()
    setIsVisible(false)

    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    closeTimerRef.current = window.setTimeout(
      () => {
        closeTimerRef.current = undefined
        setIsMounted(false)
      },
      reducedMotion ? 0 : MODAL_TRANSITION_MS,
    )
  }, [clearPending])

  useEffect(() => {
    if (initiallyOpen) open()
    return clearPending
  }, [clearPending, initiallyOpen, open])

  return { close, isMounted, isVisible, open }
}
