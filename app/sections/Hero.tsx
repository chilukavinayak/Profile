'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, MapPin, Briefcase } from 'lucide-react'
import content from '@/content/data.json'

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/Resume_Vinayak_19_01_2026.pdf'
    link.download = 'Vinayak_Chiluka_CV.pdf'
    link.click()
  }

  const hero = content.hero

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Name */}
            <div className="space-y-2">
              <motion.p
                className="text-slate-500 text-sm font-medium tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Vinayak Chiluka
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-blue-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Senior Principal Engineer
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {hero.tagline}
            </motion.p>

            {/* Location & Availability */}
            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                India
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                11+ Years Experience
              </span>
              {hero.available && (
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for opportunities
                </span>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/chilukavinayak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vinayak-chiluka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vinayak.chiluka@gmail.com"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-4">
              {hero.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-right"
                >
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-slate-500 mb-4">Technologies I work with</p>
          <div className="flex flex-wrap gap-2">
            {hero.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
