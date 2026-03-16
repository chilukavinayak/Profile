'use client'

import { useEffect, useState } from 'react'
import { ShaderBackground } from '@/components/ShaderBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { Navigation } from '@/components/Navigation'
import { Terminal } from '@/components/Terminal'
import { Footer } from '@/components/Footer'

import { Hero } from './sections/Hero'
import { Expertise } from './sections/Expertise'
import { Projects } from './sections/Projects'
import { Timeline } from './sections/Timeline'
import { Blog } from './sections/Blog'
import { Recommendations } from './sections/Recommendations'
import { Contact } from './sections/Contact'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  // Prevent hydration mismatch by not rendering client-only components until mounted
  return (
    <>
      {/* Background - safe to render */}
      <ShaderBackground />
      
      {/* Custom cursor - client only */}
      {mounted && <CustomCursor />}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        <Hero />
        <Expertise />
        <Projects />
        <Timeline />
        <Blog />
        <Recommendations />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Interactive terminal - client only */}
      {mounted && <Terminal />}
    </>
  )
}
