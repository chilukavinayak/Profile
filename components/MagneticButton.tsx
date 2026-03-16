'use client'

import { useRef, useCallback, ReactNode } from 'react'
import { lerp } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  radius?: number
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  radius = 50,
  onClick,
  variant = 'primary',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.15)
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.15)

    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
    }

    if (
      Math.abs(currentRef.current.x - targetRef.current.x) > 0.01 ||
      Math.abs(currentRef.current.y - targetRef.current.y) > 0.01
    ) {
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
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
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    } else {
      targetRef.current = { x: 0, y: 0 }
    }
  }

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0, 0)'
    }
  }

  const variants = {
    primary: 'bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-dark font-semibold glow-cyan',
    ghost: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
    outline: 'bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10',
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-full px-8 py-4 transition-all duration-300',
        variants[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 hover:translate-x-0" />
      )}
    </button>
  )
}
