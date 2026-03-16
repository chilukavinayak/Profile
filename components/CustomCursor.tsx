'use client'

import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { lerp } from '@/lib/utils'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const cursorPos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })

  // Only render on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      setIsHovering(!!isClickable)
    }

    document.addEventListener('mouseover', handleElementHover)

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
    }
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return
    
    let rafId: number

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePosition.x, 0.15)
      cursorPos.current.y = lerp(cursorPos.current.y, mousePosition.y, 0.15)
      dotPos.current.x = lerp(dotPos.current.x, mousePosition.x, 0.35)
      dotPos.current.y = lerp(dotPos.current.y, mousePosition.y, 0.35)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [mousePosition, isMounted])

  // Don't render during SSR or before mount
  if (!isMounted) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering
            ? 'scale-150 border-cyber-cyan bg-cyber-cyan/10'
            : 'border-white/50'
        }`}
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={cursorDotRef}
        className={`custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-cyber-cyan transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  )
}
