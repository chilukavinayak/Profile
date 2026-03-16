'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Download, Mail } from 'lucide-react'
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
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Greeting */}
            <div className="space-y-4">
              <motion.p
                className="text-[#c46a52] font-medium tracking-wide uppercase text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              
              <h1 className="heading-xl text-[#1a2b4a]">
                Vinayak
                <br />
                <span className="italic font-normal">Chiluka</span>
              </h1>
            </div>

            {/* Role & Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl lg:text-2xl text-[#1a2b4a] font-light">
                Senior Principal Engineer
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Architecting resilient distributed systems at scale. 
                11+ years crafting high-throughput applications, 
                leading cloud migrations, and shipping AI-powered solutions.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in India • Available worldwide</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button onClick={handleDownloadCV} className="btn-warm">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
              </button>
              
              <a href="#contact" className="btn-outline-warm">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
            className="lg:justify-self-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-premium p-8 lg:p-10 space-y-8">
              <div className="divider !mx-0" />
              
              {content.hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-serif text-[#1a2b4a] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
              
              <div className="divider !mx-0" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
