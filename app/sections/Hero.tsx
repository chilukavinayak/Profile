'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Mail } from 'lucide-react'
import content from '@/content/data.json'

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/Resume_Vinayak_19_01_2026.pdf'
    link.download = 'Vinayak_Chiluka_CV.pdf'
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div className="label text-slate-500">
              Senior Principal Engineer
            </div>
            
            {/* Name - Large Display */}
            <h1 className="display-xl text-slate-900">
              Vinayak
              <br />
              Chiluka
            </h1>
            
            {/* Description */}
            <p className="body-lg text-slate-600 max-w-xl">
              Architecting resilient distributed systems at scale. 
              Building high-throughput applications, leading cloud migrations, 
              and shipping AI-powered solutions for 11+ years.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={handleDownloadCV} className="btn-primary">
                <Download className="w-4 h-4" />
                Download CV
              </button>
              <a href="#contact" className="btn-secondary">
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {content.hero.stats.map((stat, index) => (
              <div key={stat.label} className="border-t border-slate-200 pt-6">
                <div className="display-md text-slate-900">{stat.value}</div>
                <div className="body-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div 
          className="mt-20 pt-10 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="label text-slate-400 mb-4">Technologies</div>
          <div className="flex flex-wrap gap-3">
            {content.hero.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg body-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hidden lg:flex items-center gap-2 mt-20 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownRight className="w-5 h-5" />
          </motion.div>
          <span className="label">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
