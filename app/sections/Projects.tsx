'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import content from '@/content/data.json'
import { cn } from '@/lib/utils'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  metrics: Array<{ label: string; value: string }>
  impact: string[]
  githubUrl: string | null
  demoUrl: string | null
  featured: boolean
}

const categories = ['All', 'System Design', 'Cloud Native', 'Full Stack', 'Open Source']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 10, y: -x * 10 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-[500px] w-[400px] flex-shrink-0"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyber-cyan/30 group-hover:bg-white/[0.04]">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-cyber-purple/20 px-3 py-1 text-xs font-medium text-cyber-purple">
            <Star className="h-3 w-3" />
            Featured
          </div>
        )}

        {/* Category */}
        <div className="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
          {project.category}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-6 grid grid-cols-3 gap-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg bg-white/5 p-3 text-center"
            >
              <div className="text-lg font-bold text-cyber-cyan">{metric.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Impact */}
        <div className="mb-6 space-y-2">
          {project.impact.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cyber-green" />
              {item}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-purple py-2.5 text-sm font-medium text-cyber-dark transition-all hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>

        {/* Glow effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-cyber-purple/10" />
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-50%'])

  const filteredProjects = content.projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  )

  const featuredProjects = content.projects.filter((p) => p.featured)

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            03 — Projects
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Project Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Selected works demonstrating expertise in distributed systems, cloud architecture, and high-performance backends.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                'rounded-full px-5 py-2 text-sm transition-all duration-300',
                activeFilter === category
                  ? 'bg-cyber-cyan text-cyber-dark font-medium'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured projects (always visible) */}
        {activeFilter === 'All' && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-white/80">Featured Projects</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Horizontal scroll section */}
        <motion.div
          ref={scrollRef}
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="mb-6 text-lg font-semibold text-white/80">
            {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
          </h3>
          
          {/* Desktop: Horizontal scroll with GSAP */}
          <div className="hidden lg:block">
            <motion.div
              className="flex gap-6 py-8"
              style={{ x }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Mobile: Vertical grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="mt-12 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>
          <p className="mt-2 text-center text-xs text-white/40">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}
