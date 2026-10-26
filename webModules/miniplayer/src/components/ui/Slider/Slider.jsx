import { useState, useEffect, useRef, useCallback } from 'react'
import './Slider.css'

export default function Slider({
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal', // 'horizontal' | 'vertical'
    onChange,
    className = '',
    style = {},
    disabled = false,
    ...rest
}) {
    const isControlled = value !== undefined
    const [internal, setInternal] = useState(defaultValue ?? 0)
    const [previousInput, setPreviousInput] = useState({ defaultValue, isControlled })
    const ref = useRef(null)

    const currentValue = isControlled ? value : internal

    // dev warning: controlled vs uncontrolled
    useEffect(() => {
        if (import.meta.env.DEV) {
            if (value !== undefined && defaultValue !== undefined) {
                console.warn(
                    'Slider: используйте либо value (controlled), либо defaultValue (uncontrolled), но не оба.',
                )
            }
        }
    }, [value, defaultValue])

    // sync defaultValue for uncontrolled mode
    if (!Object.is(previousInput.defaultValue, defaultValue) || previousInput.isControlled !== isControlled) {
        setPreviousInput({ defaultValue, isControlled })

        if (!isControlled) {
            setInternal(defaultValue ?? 0)
        }
    }

    const calcPercent = useCallback(
        val => {
            const range = Number(max) - Number(min)

            if (range <= 0) {
                return 0
            }

            return ((Number(val) - Number(min)) / range) * 100
        },
        [min, max],
    )

    // update CSS custom property
    useEffect(() => {
        if (!ref.current) {
            return
        }

        const percent = calcPercent(currentValue)

        ref.current.style.setProperty('--value', String(percent))
    }, [currentValue, calcPercent])

    const handleChange = useCallback(
        e => {
            const next = Number.isFinite(e.target.valueAsNumber) ? e.target.valueAsNumber : Number(e.target.value)

            if (!isControlled) {
                setInternal(next)
            }

            if (typeof onChange === 'function') {
                onChange(next, e)
            }
        },
        [isControlled, onChange],
    )

    const baseClass = `slider ${orientation} ${disabled ? 'disabled' : ''} ${className}`.trim()

    return (
        <div
            ref={ref}
            className={baseClass}
            style={style}
            role="slider"
            aria-orientation={orientation}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-disabled={disabled}
        >
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={handleChange}
                disabled={disabled}
                {...rest}
            />
        </div>
    )
}
