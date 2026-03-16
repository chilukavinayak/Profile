'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const techIcons = [
  { name: 'AWS', color: '#FF9900', delay: 0 },
  { name: 'K8s', color: '#326CE5', delay: 0.5 },
  { name: 'Java', color: '#007396', delay: 1 },
  { name: 'Python', color: '#3776AB', delay: 1.5 },
  { name: 'AI', color: '#00A67E', delay: 2 },
  { name: 'CDK', color: '#7B42BC', delay: 2.5 },
]

function TechIcon({ name, color, delay, index }: { name: string; color: string; delay: number; index: number }) {
  const orbitRadius = 140 + (index % 2) * 40
  const orbitDuration = 20 + index * 5
  const orbitDirection = index % 2 === 0 ? 1 : -1

  return (
    <motion.div
      className="absolute"
      style={{
        width: 50,
        height: 50,
      }}
      animate={{
        rotate: orbitDirection * 360,
      }}
      transition={{
        duration: orbitDuration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    >
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-xl glass-card"
        style={{
          boxShadow: `0 0 20px ${color}30`,
          transform: `translateX(${orbitRadius}px)`,
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: `0 0 40px ${color}60`,
        }}
      >
        <span className="text-[10px] font-bold" style={{ color }}>
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export function FloatingTech() {
  const [isClient, setIsClient] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (!isClient) {
    return (
      <div className="relative flex h-[400px] w-[400px] items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl glass-strong">
          <span className="text-2xl font-bold text-gradient">VC</span>
        </div>
      </div>
    )
  }

  if (prefersReducedMotion) {
    return (
      <div className="relative flex h-[400px] w-[400px] items-center justify-center">
        <div className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 blur-3xl" />
        
        {/* Static icons in a circle */}
        {techIcons.map((tech, index) => {
          const angle = (index * 60 * Math.PI) / 180
          const radius = 140
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          
          return (
            <div
              key={tech.name}
              className="absolute flex h-12 w-12 items-center justify-center rounded-xl glass-card"
              style={{
                boxShadow: `0 0 20px ${tech.color}30`,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <span className="text-[10px] font-bold" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </div>
          )
        })}
        
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl glass-strong">
          <span className="text-2xl font-bold text-gradient">VC</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-[400px] w-[400px] items-center justify-center">
      {/* Central glow */}
      <div className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 blur-3xl" />
      
      {/* Orbiting icons */}
      {techIcons.map((tech, index) => (
        <TechIcon
          key={tech.name}
          name={tech.name}
          color={tech.color}
          delay={tech.delay}
          index={index}
        />
      ))}
      
      {/* Center element */}
      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl glass-strong"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-2xl font-bold text-gradient">VC</span>
      </motion.div>
    </div>
  )
}
