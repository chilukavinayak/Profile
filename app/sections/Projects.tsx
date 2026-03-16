'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import content from '@/content/data.json'

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="glass-card p-6 h-full flex flex-col hover:border-blue-500/30 transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs text-blue-400 font-mono">{project.category}</span>
            <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-2 bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
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
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const featuredProjects = content.projects.filter((p) => p.featured)
  const otherProjects = content.projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-mono text-sm">02. Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Featured Work
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in distributed systems, 
            cloud architecture, and AI/LLM integration.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="text-xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
