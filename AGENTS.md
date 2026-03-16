# AGENTS.md - Vinayak Chiluka Portfolio Website (Next.js 14)

This document provides essential information for AI coding agents working on this project.

## Project Overview

This is a **world-class Staff+ Engineer portfolio website** built with Next.js 14, featuring cinematic UI/UX with cyber-minimalist design aesthetic. The site showcases professional experience, technical skills, projects, and blog articles with advanced animations and interactive elements.

**Live URL:** https://vinayak-chiluka.me  
**Framework:** Next.js 14 (App Router)  
**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, Three.js, GSAP

## Technology Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + CSS Variables |
| **Animations** | Framer Motion, GSAP (ScrollTrigger) |
| **3D Elements** | Three.js (@react-three/fiber) |
| **Smooth Scroll** | Lenis.js |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Forms** | React Hook Form (optional) |

## Project Structure

```
/
├── app/                          # Next.js 14 App Router
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx              # Hero with kinetic typography
│   │   ├── Expertise.tsx         # Radar chart + skills
│   │   ├── Projects.tsx          # Horizontal scroll showcase
│   │   ├── Timeline.tsx          # Career timeline
│   │   ├── Blog.tsx              # Bento grid articles
│   │   ├── Recommendations.tsx   # Testimonials
│   │   └── Contact.tsx           # Contact form + calendar
│   ├── layout.tsx                # Root layout with fonts
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles + CSS variables
├── components/                   # Reusable components
│   ├── CustomCursor.tsx          # Blend-mode cursor
│   ├── MagneticButton.tsx        # Magnetic hover effect
│   ├── Typewriter.tsx            # Typewriter animation
│   ├── ShaderBackground.tsx      # WebGL gradient background
│   ├── FloatingTech.tsx          # 3D orbiting icons
│   ├── Terminal.tsx              # Interactive terminal
│   └── Navigation.tsx            # Header navigation
├── hooks/                        # Custom React hooks
│   ├── useMousePosition.ts       # Mouse tracking
│   ├── useScrollProgress.ts      # Scroll percentage
│   └── useMagneticEffect.ts      # Magnetic animation
├── lib/                          # Utilities
│   └── utils.ts                  # Helper functions
├── content/                      # Data source
│   └── data.json                 # All content (single source of truth)
├── public/                       # Static assets
│   ├── images/                   # Images
│   ├── resume.pdf                # Resume download
│   ├── manifest.json             # PWA manifest
│   ├── sitemap.xml               # SEO sitemap
│   └── robots.txt                # SEO robots
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## Design System

### Color Palette (Cyber-Minimalist)
```css
--cyber-dark: #0a0a0f        /* Primary background */
--cyber-darker: #050508      /* Deeper background */
--cyber-cyan: #00f5ff        /* Primary accent */
--cyber-purple: #b829f7      /* Secondary accent */
--cyber-pink: #ff006e        /* Tertiary accent */
--cyber-green: #00ff88       /* Success/available */
```

### Typography
- **UI Font:** Inter/Geist (via Google Fonts)
- **Code Font:** JetBrains Mono
- **Display Font:** Playfair Display (headlines)

### CSS Classes
- `.glass` - Glassmorphism effect
- `.glass-card` - Card with glass effect
- `.text-gradient` - Cyan-purple gradient text
- `.glow-cyan` - Cyan glow shadow
- `.noise-bg` - Subtle noise texture

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Static export (to dist/)
npm run export

# Linting
npm run lint
```

## Key Features

### 1. Hero Section
- Kinetic typography (name types out)
- Floating 3D tech stack icons
- Animated gradient background (WebGL shader)
- Magnetic buttons

### 2. Expertise Matrix
- Interactive radar chart
- Hover reveals tool details
- Counter animation (0 → 12+ years)
- Progress bars with gradient

### 3. Project Showcase
- Horizontal scroll carousel (GSAP)
- 3D tilt cards on hover
- Filter by category
- Impact metrics display

### 4. Career Timeline
- Alternating left/right layout
- Expandable achievements
- Color-coded tags (Leadership/Technical/Impact)

### 5. Blog Bento Grid
- Masonry-style layout
- Reading time progress bars
- Copy-to-clipboard functionality
- Toast notifications

### 6. Interactive Terminal
- Floating widget (bottom-right)
- Commands: whoami, skills, experience, projects, contact, help
- Auto-complete suggestions
- Typewriter output

### 7. Recommendation Wall
- Avatar orbs with connecting lines
- Animated pulse effects
- Card layout with relationship tags

## Content Management

All content is stored in `/content/data.json` - edit this file to update:
- Personal info (name, role, stats)
- Expertise categories & skills
- Projects (add/remove/update)
- Work experience
- Blog posts
- Recommendations
- Contact information

## Adding a New Project

1. Edit `/content/data.json`
2. Add to `projects` array:
```json
{
  "id": 7,
  "title": "New Project",
  "description": "Short description",
  "longDescription": "Detailed description",
  "category": "System Design",
  "tags": ["Tech1", "Tech2"],
  "metrics": [{ "label": "Metric", "value": "Value" }],
  "impact": ["Achievement 1", "Achievement 2"],
  "githubUrl": "https://github.com/...",
  "demoUrl": "https://...",
  "featured": true
}
```

## Performance Optimizations

- Static export for CDN deployment
- Image optimization with Next/Image
- Code splitting by section
- Reduced motion support
- Lazy loading for below-fold content

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- WCAG 2.1 AA contrast ratios
- `prefers-reduced-motion` media query support
- Semantic HTML structure

## SEO

- Schema.org Person markup (in metadata)
- Open Graph meta tags
- Twitter Card meta tags
- Sitemap.xml generation
- robots.txt configuration

## Deployment

Optimized for Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or configure GitHub Actions for automatic deployment on push.

## Customization Guide

### Change Colors
Edit `tailwind.config.ts` and `app/globals.css` color variables.

### Change Fonts
Edit `app/layout.tsx` - modify the next/font imports.

### Add New Section
1. Create component in `app/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

### Update Resume
Replace `/public/resume.pdf` with new file.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| WebGL background not showing | Check browser WebGL support |
| Scroll animations not working | Verify `useInView` hook has correct ref |
| Magnetic buttons jerky | Reduce `strength` parameter |
| Terminal commands not working | Check `data.json` for valid JSON |

---

*Last updated: March 2025*  
*For questions: vinayak@chiluka.me*
