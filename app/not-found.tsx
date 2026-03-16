'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        className="max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-8xl font-bold text-transparent">
            404
          </span>
        </div>
        
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Page not found
        </h2>
        
        <p className="mb-8 text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyber-cyan px-6 py-3 font-medium text-cyber-dark transition-colors hover:bg-cyber-cyan/90"
          >
            <Home className="h-4 w-4" />
            Go home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
