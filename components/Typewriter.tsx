'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  onComplete?: () => void
  showCursor?: boolean
}

export function Typewriter({
  text,
  className,
  speed = 50,
  delay = 0,
  onComplete,
  showCursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursorState, setShowCursorState] = useState(showCursor)

  const startTyping = useCallback(() => {
    setIsTyping(true)
    let currentIndex = 0

    const typeChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeChar, speed)
      } else {
        setIsTyping(false)
        if (onComplete) {
          onComplete()
        }
      }
    }

    setTimeout(typeChar, delay)
  }, [text, speed, delay, onComplete])

  useEffect(() => {
    startTyping()
  }, [startTyping])

  useEffect(() => {
    if (!isTyping && showCursor) {
      const interval = setInterval(() => {
        setShowCursorState((prev) => !prev)
      }, 530)
      return () => clearInterval(interval)
    }
  }, [isTyping, showCursor])

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
      {showCursor && (
        <span
          className={cn(
            'ml-0.5 inline-block h-5 w-0.5 bg-cyber-cyan transition-opacity duration-100',
            showCursorState ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </span>
  )
}

interface TypewriterSequenceProps {
  sequences: Array<{
    text: string
    className?: string
  }>
  className?: string
  speed?: number
  delayBetween?: number
}

export function TypewriterSequence({
  sequences,
  className,
  speed = 50,
  delayBetween = 500,
}: TypewriterSequenceProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completedSequences, setCompletedSequences] = useState<string[]>([])

  const handleComplete = () => {
    if (currentIndex < sequences.length - 1) {
      setCompletedSequences((prev) => [...prev, sequences[currentIndex].text])
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
      }, delayBetween)
    }
  }

  return (
    <div className={className}>
      {completedSequences.map((text, index) => (
        <div key={index} className={sequences[index]?.className}>
          {text}
        </div>
      ))}
      {currentIndex < sequences.length && (
        <Typewriter
          text={sequences[currentIndex].text}
          className={sequences[currentIndex].className}
          speed={speed}
          onComplete={handleComplete}
          showCursor={currentIndex === sequences.length - 1}
        />
      )}
    </div>
  )
}
