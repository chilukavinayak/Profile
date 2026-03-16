'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-cyber-dark px-4">
        <div className="max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Something went wrong!</h2>
          <p className="mb-6 text-white/60">
            {error.message || 'A critical error occurred. Please refresh the page.'}
          </p>
          <button
            onClick={() => reset()}
            className="rounded-xl bg-cyber-cyan px-6 py-3 font-medium text-cyber-dark transition-colors hover:bg-cyber-cyan/90"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
