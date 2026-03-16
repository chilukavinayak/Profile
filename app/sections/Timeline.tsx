'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, Users, Zap } from 'lucide-react'
import content from '@/content/data.json'
import { cn } from '@/lib/utils'

const tagIcons = {
  Leadership: Users,
  Technical: Zap,
  Impact: Briefcase,
}

const tagColors = {
  Leadership: 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30',
  Technical: 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30',
  Impact: 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
}

interface Experience {
  company: string
  logo: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  tags: string[]
  technologies: string[]
}

function TimelineItem({
  experience,
  index,
  isLeft,
}: {
  experience: Experience
  index: number
  isLeft: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={itemRef}
      className={cn('relative flex w-full', isLeft ? 'justify-start' : 'justify-end')}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content */}
      <div
        className={cn(
          'relative w-full md:w-[calc(50%-40px)]',
          isLeft ? 'md:pr-0' : 'md:pl-0'
        )}
      >
        <motion.div
          className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Company logo placeholder */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg font-bold text-white/80">
                {experience.company.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-white">{experience.company}</h3>
                <p className="text-sm text-white/60">{experience.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-cyber-cyan">{experience.period}</p>
              <p className="text-xs text-white/40">{experience.location}</p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            {experience.description}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {experience.tags.map((tag) => {
              const Icon = tagIcons[tag as keyof typeof tagIcons]
              return (
                <span
                  key={tag}
                  className={cn(
                    'flex items-center gap-1 rounded-full border px-2 py-1 text-xs',
                    tagColors[tag as keyof typeof tagColors]
                  )}
                >
                  {Icon && <Icon className="h-3 w-3" />}
                  {tag}
                </span>
              )
            })}
          </div>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expand button */}
          <div className="flex items-center justify-center">
            <motion.button
              className="flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-cyber-cyan"
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              <ChevronDown className="h-4 w-4" />
              {isExpanded ? 'Show less' : 'Show achievements'}
            </motion.button>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 border-t border-white/10 pt-4">
                  <h4 className="mb-3 text-sm font-semibold text-white/80">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-cyan" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div
        className={cn(
          'absolute top-8 hidden h-4 w-4 rounded-full border-2 border-cyber-dark bg-cyber-cyan md:block',
          isLeft ? 'right-[calc(50%-8px)]' : 'left-[calc(50%-8px)]'
        )}
        style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}
      />
    </motion.div>
  )
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            04 — Experience
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Career Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            A decade of building world-class systems at leading technology companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyber-cyan/50 via-cyber-purple/50 to-transparent md:block" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {content.experience.map((experience, index) => (
              <TimelineItem
                key={experience.company}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
