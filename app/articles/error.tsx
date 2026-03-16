'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Articles page error:', error)
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0f1a] px-4">
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
          Failed to load articles
        </h2>
        
        <p className="mb-6 text-sm text-white/60">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        
        <div className="flex gap-3">
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Home
          </Link>
          <button
            onClick={reset}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyber-cyan px-4 py-3 text-sm font-medium text-cyber-dark transition-colors hover:bg-cyber-cyan/90"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </motion.div>
    </main>
  )
}
