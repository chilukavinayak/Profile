'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '@/content/data.json'

interface SkillCategory {
  name: string
  level: number
  tools: string[]
}

function RadarChart({ categories, hoveredIndex }: { categories: SkillCategory[]; hoveredIndex: number | null }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const size = 300
  const center = size / 2
  const radius = 100
  const angleStep = (2 * Math.PI) / categories.length

  const getPoint = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2
    const r = (value / 100) * radius
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    }
  }

  const dataPoints = categories.map((cat, i) => getPoint(i, cat.level))
  const pathData = dataPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ') + ' Z'

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="overflow-visible"
    >
      {/* Background circles */}
      {[25, 50, 75, 100].map((level) => (
        <circle
          key={level}
          cx={center}
          cy={center}
          r={(level / 100) * radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
      ))}

      {/* Axis lines */}
      {categories.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2
        const x = center + radius * Math.cos(angle)
        const y = center + radius * Math.sin(angle)
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={1}
          />
        )
      })}

      {/* Data polygon */}
      <motion.path
        d={pathData}
        fill="url(#radarGradient)"
        stroke="#00f5ff"
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={hoveredIndex === i ? 8 : 5}
          fill={hoveredIndex === i ? '#b829f7' : '#00f5ff'}
          stroke="#0a0a0f"
          strokeWidth={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 + 1, duration: 0.3 }}
          style={{
            filter: hoveredIndex === i ? 'drop-shadow(0 0 10px #b829f7)' : 'none',
          }}
        />
      ))}

      {/* Gradient definition */}
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#b829f7" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Labels */}
      {categories.map((cat, i) => {
        const angle = i * angleStep - Math.PI / 2
        const labelRadius = radius + 30
        const x = center + labelRadius * Math.cos(angle)
        const y = center + labelRadius * Math.sin(angle)
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={hoveredIndex === i ? '#00f5ff' : 'rgba(255,255,255,0.6)'}
            fontSize={11}
            fontFamily="var(--font-jetbrains)"
            className="transition-all duration-300"
          >
            {cat.name}
          </text>
        )
      })}
    </svg>
  )
}

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target])

  return (
    <div ref={ref} className="text-5xl font-bold text-white">
      {count}
      {suffix}
    </div>
  )
}

export function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const expertise = content.expertise
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            02 — Expertise
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Expertise Matrix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Hover over the radar chart to explore specific skills and technologies
            across different domains.
          </p>
        </motion.div>

        {/* Years of experience counter */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Counter target={expertise.yearsOfExperience} suffix="+" />
          <p className="mt-2 text-white/50">Years of Experience</p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Radar chart */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <RadarChart
                categories={expertise.categories}
                hoveredIndex={hoveredIndex}
              />
            </div>
          </motion.div>

          {/* Skills list */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {expertise.categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'border-cyber-cyan/50 bg-cyber-cyan/5'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-white">{category.name}</span>
                  <span className="font-mono text-sm text-cyber-cyan">
                    {category.level}%
                  </span>
                </div>
                <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
                <div
                  className={`flex flex-wrap gap-2 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specialties */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Core Specialties
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.specialties.map((specialty, index) => (
              <motion.span
                key={specialty}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-sm transition-all hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
