'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Eye, ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import content from '@/content/data.json'
import Link from 'next/link'

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

interface ArticleWithPdf extends BlogPost {
  pdfUrl: string
  pdfSize: string
  pages: number
}

export default function ArticlesPage() {
  const articles = content.blog.filter((post): post is ArticleWithPdf => 
    !!post.pdfUrl && !!post.pdfSize && !!post.pages
  )
  const totalPages = articles.reduce((acc, post) => acc + post.pages, 0)

  return (
    <main className="min-h-screen bg-[#0a0f1a]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-cyber-cyan"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <span className="font-mono text-sm text-cyber-cyan">
              Technical Guides
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-400">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">PDF Collection</span>
            </div>
            
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Technical Writing
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Deep dives into system design, database optimization, and engineering best practices. 
              Comprehensive guides covering {articles.length} topics with {totalPages}+ pages of in-depth content.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyber-cyan" />
                <span>{articles.length} Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyber-cyan" />
                <span>{totalPages}+ Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-cyber-cyan" />
                <span>Updated 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-amber-500/30 hover:bg-white/[0.04]"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyber-cyan/10 px-3 py-1 text-xs text-cyber-cyan">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-400">
                      <FileText className="h-3 w-3" />
                      PDF
                    </span>
                  </div>
                  <span className="text-xs text-white/40">{article.pdfSize || ''}</span>
                </div>

                {/* Title */}
                <h2 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyber-cyan">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="mb-4 flex items-center gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    {article.pages} pages
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime} min read
                  </span>
                  <span>{article.date}</span>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-white/50"
                    >
                      <Tag className="h-2 w-2" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href={article.pdfUrl}
                    download
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500/10 px-4 py-2.5 text-sm text-amber-400 transition-colors hover:bg-amber-500/20"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Vinayak Chiluka. All technical guides are free to download and share.
          </p>
        </div>
      </footer>
    </main>
  )
}
