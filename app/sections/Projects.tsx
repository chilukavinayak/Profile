'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import content from '@/content/data.json'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: string
  featured: boolean
  tags: string[]
  metrics: { label: string; value: string }[]
  impact: string[]
  githubUrl: string | null
  demoUrl: string | null
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      className="group bg-white border border-slate-200 rounded-lg overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
              {project.category}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-lg font-semibold text-slate-900">{metric.value}</div>
              <div className="text-xs text-slate-500">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2.5 py-1 text-slate-400 text-xs">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          View details
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<string>('all')

  const projects = content.projects as unknown as Project[]
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section
      id="projects"
      ref={containerRef}
      className="section bg-slate-50"
    >
      <div className="container-tight">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A collection of projects showcasing my expertise in distributed systems, 
            AI/LLM integration, and cloud architecture.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
