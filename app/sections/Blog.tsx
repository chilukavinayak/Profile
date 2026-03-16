'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Clock, ArrowUpRight, Copy, Check, FileText, Download, Eye } from 'lucide-react'
import content from '@/content/data.json'
import { cn } from '@/lib/utils'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readTime: number
  date: string
  featured: boolean
  pdfUrl?: string
  pdfSize?: string
  pages?: number
}

function BlogCard({
  post,
  index,
  size = 'normal',
}: {
  post: BlogPost
  index: number
  size?: 'normal' | 'large' | 'tall'
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })
  const isPdf = !!post.pdfUrl

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${post.title}\n\n${post.excerpt}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sizeClasses = {
    normal: 'col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
  }

  return (
    <motion.article
      ref={cardRef}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-white/[0.04]',
        sizeClasses[size],
        isPdf && 'border-amber-500/20'
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn('flex h-full flex-col p-6', size === 'tall' && 'justify-between')}>
        {/* Header */}
        <div>
          {/* Category & PDF Badge */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyber-cyan">
                {post.category}
              </span>
              {isPdf && (
                <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-400">
                  <FileText className="h-3 w-3" />
                  PDF
                </span>
              )}
            </div>
            <button
              onClick={handleCopy}
              className="rounded-full p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <Check className="h-4 w-4 text-cyber-green" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Title */}
          <h3
            className={cn(
              'mb-3 font-semibold text-white transition-colors group-hover:text-cyber-cyan',
              size === 'large' ? 'text-2xl' : 'text-lg'
            )}
          >
            {post.title}
          </h3>

          {/* PDF Metadata */}
          {isPdf && (
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {post.pages} pages
              </span>
              <span>{post.pdfSize}</span>
              <span className="rounded-full bg-white/5 px-2 py-0.5">
                {post.readTime} min read
              </span>
            </div>
          )}

          {/* Excerpt */}
          <p
            className={cn(
              'leading-relaxed text-white/60',
              size === 'tall' ? 'line-clamp-6' : 'line-clamp-3'
            )}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6">
          {/* Reading time progress - only for non-PDF */}
          {!isPdf && (
            <>
              <div className="mb-3 flex items-center gap-2 text-xs text-white/40">
                <Clock className="h-3 w-3" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="mb-4 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: post.readTime * 0.5 }}
                />
              </div>
            </>
          )}

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Date & Actions */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/40">{post.date}</span>
            
            {isPdf ? (
              <div className="flex items-center gap-2">
                <a
                  href={post.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Eye className="h-3 w-3" />
                  View
                </a>
                <a
                  href={post.pdfUrl}
                  download
                  className="flex items-center gap-1 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs text-amber-400 transition-colors hover:bg-amber-500/20"
                >
                  <Download className="h-3 w-3" />
                  Download
                </a>
              </div>
            ) : (
              <motion.a
                href="#"
                className="flex items-center gap-1 text-sm text-cyber-cyan transition-colors hover:text-cyber-cyan/80"
                animate={{ x: isHovered ? 5 : 0 }}
              >
                Read
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-purple/5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function Blog() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<'all' | 'pdf'>('all')

  const featuredPosts = content.blog.filter((post) => post.featured && (filter === 'all' || post.pdfUrl))
  const regularPosts = content.blog.filter((post) => !post.featured && (filter === 'all' || post.pdfUrl))
  const pdfCount = content.blog.filter((post) => post.pdfUrl).length

  return (
    <section
      id="blog"
      ref={containerRef}
      className="relative px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block font-mono text-sm text-cyber-cyan">
            05 — Writing
          </span>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Technical Writing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Deep dives into system design, architecture patterns, and engineering best practices. 
            Including {pdfCount} published PDF guides.
          </p>

          {/* Filter buttons */}
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                'rounded-full px-5 py-2 text-sm transition-all',
                filter === 'all'
                  ? 'bg-cyber-cyan text-cyber-dark font-medium'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              )}
            >
              All Posts ({content.blog.length})
            </button>
            <button
              onClick={() => setFilter('pdf')}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-all',
                filter === 'pdf'
                  ? 'bg-amber-500 text-cyber-dark font-medium'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              )}
            >
              <FileText className="h-4 w-4" />
              PDF Guides ({pdfCount})
            </button>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured posts */}
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post as BlogPost}
              index={index}
              size={index === 0 ? 'large' : 'normal'}
            />
          ))}
          
          {/* Regular posts */}
          {regularPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post as BlogPost}
              index={index + featuredPosts.length}
              size="normal"
            />
          ))}
        </div>

        {/* PDF Download All Section */}
        {filter === 'all' && pdfCount > 0 && (
          <motion.div
            className="mt-16 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Download Published PDF Guides
                </h3>
                <p className="text-white/60">
                  Get all {pdfCount} comprehensive technical guides covering Kafka, MySQL, ProxySQL, 
                  SSL/TLS, System Design, and more. {content.blog.reduce((acc, post) => acc + (post.pages || 0), 0)}+ pages of in-depth content.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/articles"
                  target="_blank"
                  className="rounded-xl bg-amber-500 px-6 py-3 font-medium text-cyber-dark transition-colors hover:bg-amber-400"
                >
                  Browse All PDFs
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
