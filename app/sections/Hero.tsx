'use client'

import { motion } from 'framer-motion'
import { FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import content from '@/content/data.json'

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/Resume_Vinayak_19_01_2026.pdf'
    link.download = 'Vinayak_Chiluka_CV.pdf'
    link.click()
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1425] to-[#0a0f1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,211,238,0.1),_transparent_50%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm text-blue-300">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Vinayak</span>
                <br />
                <span className="text-gradient">Chiluka</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-400 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Senior Principal Engineer
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              11+ years building scalable distributed systems on AWS. 
              Expert in high-throughput microservices (10K+ RPS), 
              cloud infrastructure, and AI/LLM integration.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: '11+', label: 'Years' },
                { value: '10K+', label: 'RPS' },
                { value: '60+', label: 'Apps' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, href: content.contact.social.github },
                { icon: Linkedin, href: content.contact.social.linkedin },
                { icon: Mail, href: `mailto:${content.contact.email}` },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Code snippet */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="glass-card p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-500 ml-2">about-me.json</span>
              </div>
              <pre className="text-gray-300 leading-relaxed">
                <span className="text-purple-400">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">"name"</span>: <span className="text-green-400">"Vinayak Chiluka"</span>,{'\n'}
                {'  '}<span className="text-blue-400">"role"</span>: <span className="text-green-400">"Senior Principal Engineer"</span>,{'\n'}
                {'  '}<span className="text-blue-400">"experience"</span>: <span className="text-yellow-400">"11+ years"</span>,{'\n'}
                {'  '}<span className="text-blue-400">"specialties"</span>: [<span className="text-green-400">"AWS"</span>, <span className="text-green-400">"Kubernetes"</span>,{'\n'}
                {'            '}<span className="text-green-400">"Java"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"AI/LLM"</span>],{'\n'}
                {'  '}<span className="text-blue-400">"certifications"</span>: [<span className="text-green-400">"AWS SA - Pro"</span>],{'\n'}
                {'  '}<span className="text-blue-400">"available"</span>: <span className="text-orange-400">true</span>{'\n'}
                <span className="text-purple-400">{'}'}</span>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
