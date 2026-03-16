'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        className="max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <AlertCircle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        
        <h2 className="mb-2 text-xl font-semibold text-white">
          Something went wrong
        </h2>
        
        <p className="mb-6 text-sm text-white/60">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-cyber-cyan px-6 py-3 font-medium text-cyber-dark transition-colors hover:bg-cyber-cyan/90"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </motion.div>
    </div>
  )
}
