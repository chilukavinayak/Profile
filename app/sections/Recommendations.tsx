'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import content from '@/content/data.json'

interface Recommendation {
  name: string
  role: string
  company: string
  avatar: string
  text: string
  relationship: string
}

function RecommendationCard({
  recommendation,
  index,
}: {
  recommendation: Recommendation
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-white/[0.04]">
        {/* Quote icon */}
        <Quote className="mb-4 h-8 w-8 text-cyber-cyan/30" />

        {/* Testimonial text */}
        <p className="mb-6 text-sm leading-relaxed text-white/80">
          "{recommendation.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-purple text-sm font-bold text-cyber-dark">
            {recommendation.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-white">{recommendation.name}</div>
            <div className="text-xs text-white/50">
              {recommendation.role} at {recommendation.company}
            </div>
          </div>
        </div>

        {/* Relationship tag */}
        <div className="absolute right-4 top-4 rounded-full bg-white/5 px-2 py-1 text-xs text-white/40">
          {recommendation.relationship}
        </div>

        {/* Connecting line animation */}
        <motion.div
          className="absolute -right-6 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyber-cyan to-transparent lg:block"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  )
}

export function Recommendations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="relative px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            06 — Testimonials
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Recommendation Wall
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            What colleagues and collaborators say about working with me.
          </p>
        </motion.div>

        {/* Avatar orbs with connecting lines */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex items-center gap-4">
            {content.recommendations.map((rec, index) => (
              <motion.div
                key={rec.name}
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-purple text-lg font-bold text-cyber-dark ring-4 ring-cyber-dark">
                  {rec.name.charAt(0)}
                </div>
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyber-cyan/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
            
            {/* Connecting lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ zIndex: -1 }}
            >
              <motion.path
                d={`M 28 28 L ${content.recommendations.length * 72 - 44} 28`}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#b829f7" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {content.recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.name}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
