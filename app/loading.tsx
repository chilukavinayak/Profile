export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyber-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyber-cyan/20 border-t-cyber-cyan" />
        <span className="text-sm text-white/60">Loading...</span>
      </div>
    </div>
  )
}
