'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple"
        style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
      />

      {/* Navigation */}
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-40 transition-all duration-300',
          isScrolled
            ? 'border-b border-white/10 bg-cyber-dark/80 backdrop-blur-xl'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold text-gradient">VC</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="group relative text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              className="rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Toggle theme"
            >
              <Moon className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="relative h-10 w-10 rounded-full p-2 text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
              >
                <motion.span
                  className="absolute left-1/2 top-3 h-0.5 w-5 -translate-x-1/2 bg-current"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-1/2 bottom-3 h-0.5 w-5 -translate-x-1/2 bg-current"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-cyber-dark/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-2xl font-semibold text-white transition-colors hover:text-cyber-cyan"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
