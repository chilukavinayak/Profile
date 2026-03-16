'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import content from '@/content/data.json'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: content.contact.social.github, label: 'GitHub' },
    { icon: Linkedin, href: content.contact.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: content.contact.social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${content.contact.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-cyber-darker/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="mb-4 block text-2xl font-bold text-gradient">VC</span>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60">
              Building resilient systems at scale. Staff Engineer specializing in distributed systems,
              cloud architecture, and high-performance backends.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-cyber-cyan/30 hover:bg-white/[0.04] hover:text-cyber-cyan"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-3">
              {['Expertise', 'Projects', 'Experience', 'Writing', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-cyber-cyan"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-cyber-cyan"
                >
                  {content.contact.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60">Seattle, WA (Remote)</span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 rounded-full bg-cyber-green/10 px-3 py-1 text-xs text-cyber-green">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyber-green" />
                  </span>
                  Available for opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {currentYear} Vinayak Chiluka. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-white/40">
            Built with <Heart className="h-3 w-3 text-cyber-pink" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
