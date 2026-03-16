'use client'

import { useRef, useCallback } from 'react'
import { lerp } from '@/lib/utils'

interface MagneticOptions {
  strength?: number
  radius?: number
}

export function useMagneticEffect<T extends HTMLElement>(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 50 } = options
  const elementRef = useRef<T>(null)
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.15)
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.15)

    if (elementRef.current) {
      elementRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      if (distance < radius) {
        const factor = (1 - distance / radius) * strength
        targetRef.current = {
          x: distanceX * factor,
          y: distanceY * factor,
        }
      } else {
        targetRef.current = { x: 0, y: 0 }
      }
    },
    [radius, strength]
  )

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { x: 0, y: 0 }
  }, [])

  const startAnimation = useCallback(() => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  const stopAnimation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
  }, [])

  return {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: startAnimation,
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave()
      stopAnimation()
      if (elementRef.current) {
        elementRef.current.style.transform = 'translate(0, 0)'
      }
    },
  }
}
