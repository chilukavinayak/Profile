'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import content from '@/content/data.json'

interface Project {
  id: number
  title: string
  description: string
  category: string
  featured: boolean
  tags: string[]
  metrics: { label: string; value: string }[]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <div className="card card-hover h-full flex flex-col">
        {/* Header */}
        <div className="p-8 flex-1">
          <div className="flex items-start justify-between gap-4 mb-6">
            <span className="label text-slate-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="label text-blue-600">
                Featured
              </span>
            )}
          </div>

          <h3 className="display-md text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
            {project.title}
          </h3>

          <p className="body-lg text-slate-600 mb-8">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-['Space_Grotesk'] font-semibold text-slate-900">
                  {metric.value}
                </div>
                <div className="body-sm text-slate-500 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md body-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-slate-900 font-['Space_Grotesk'] font-medium 
                     group-hover:text-blue-600 transition-colors"
          >
            View project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
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
      className="section bg-slate-50/50"
    >
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label text-slate-400 mb-4">Selected Work</div>
          <h2 className="display-lg text-slate-900 mb-6">
            Projects that define<br />my expertise
          </h2>
          <p className="body-lg text-slate-600 max-w-2xl">
            A collection of work spanning distributed systems, AI/LLM integration, 
            and cloud architecture at scale.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-['Space_Grotesk'] font-medium transition-all ${
                filter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
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
