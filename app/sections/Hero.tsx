'use client'

import { motion } from 'framer-motion'
import { Typewriter } from '@/components/Typewriter'
import { FloatingTech } from '@/components/FloatingTech'
import { MagneticButton } from '@/components/MagneticButton'
import { FileText, ArrowRight } from 'lucide-react'
import content from '@/content/data.json'

export function Hero() {
  const hero = content.hero

  const handleDownloadResume = () => {
    // Try multiple resume files in order of preference
    const resumeFiles = [
      '/cv/Resume_Vinayak_19_01_2026.pdf',
      '/cv/Resume_Lead_AI_Engineer_Trilogy.pdf',
      '/cv/Resume.pdf',
    ]
    
    // Try to fetch each file and download the first available one
    const tryDownload = async (index: number) => {
      if (index >= resumeFiles.length) {
        // Fallback: open LinkedIn
        window.open(content.contact.social.linkedin, '_blank')
        return
      }
      
      try {
        const response = await fetch(resumeFiles[index])
        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'Vinayak_Chiluka_CV.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
        } else {
          tryDownload(index + 1)
        }
      } catch {
        tryDownload(index + 1)
      }
    }
    
    tryDownload(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Availability badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-4 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-green opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-green"></span>
              </span>
              <span className="text-sm font-medium text-cyber-green">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Typewriter
                  text={hero.name}
                  className="block text-gradient"
                  speed={80}
                  delay={500}
                />
              </motion.h1>
              
              <motion.p
                className="font-mono text-lg text-white/70 sm:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                {hero.role}
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p
              className="max-w-lg text-lg text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {hero.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              {hero.stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <MagneticButton
                variant="primary"
                onClick={handleDownloadResume}
              >
                <FileText className="h-5 w-5" />
                Download CV
              </MagneticButton>
              
              <MagneticButton
                variant="ghost"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="h-5 w-5" />
              </MagneticButton>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <span className="text-xs text-white/40">Certified:</span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                AWS Solutions Architect - Associate
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                AWS Solutions Architect - Professional
              </span>
            </motion.div>
          </motion.div>

          {/* Right content - Floating tech */}
          <motion.div
            className="hidden lg:flex lg:justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <FloatingTech />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-white/40">Scroll to explore</span>
          <div className="h-12 w-px bg-gradient-to-b from-cyber-cyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
