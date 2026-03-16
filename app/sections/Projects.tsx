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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card-premium overflow-hidden">
        {/* Header */}
        <div className="p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4 mb-6">
            <span className="text-xs font-medium text-[#c46a52] uppercase tracking-widest">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs text-slate-400 italic">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl lg:text-3xl font-serif text-[#1a2b4a] mb-4 group-hover:text-[#c46a52] transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mb-8">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl font-serif text-[#1a2b4a]">{metric.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
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
                className="px-3 py-1.5 bg-[#faf9f7] text-slate-600 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Action */}
        <div className="px-8 lg:px-10 pb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#1a2b4a] font-medium 
                     group-hover:text-[#c46a52] transition-colors"
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
      className="section-premium bg-white"
    >
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#c46a52] text-sm uppercase tracking-widest font-medium">
            Selected Work
          </span>
          <h2 className="heading-lg text-[#1a2b4a] mt-4 mb-6">
            Projects that<br />define my craft
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all ${
                filter === cat
                  ? 'bg-[#1a2b4a] text-white'
                  : 'bg-transparent text-slate-600 hover:bg-[#faf9f7]'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
