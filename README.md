# Vinayak Chiluka - Staff Engineer Portfolio

A world-class developer portfolio website with cinematic UI/UX, built for Staff+ Engineer level presentations.

![Portfolio Preview](public/images/og-image.png)

## 🎨 Design Aesthetic

**Theme**: Cyber-Minimalist
- Dark mode default with neon accent gradients (cyan-purple)
- Glassmorphism cards with subtle noise textures
- Animated gradient mesh background (shader-based)
- Magnetic button effects
- Custom blend-mode cursor

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/gsap/)
- **3D Elements**: [Three.js](https://threejs.org/) with React Three Fiber
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Features

### Sections
1. **Hero** - Kinetic typography, floating 3D icons, availability badge
2. **Expertise Matrix** - Interactive radar chart, skill progress bars
3. **Project Showcase** - Horizontal scroll carousel, 3D tilt cards
4. **Career Timeline** - Expandable experience cards
5. **Blog** - Bento grid layout with reading progress
6. **Recommendations** - Testimonials with avatar orbs
7. **Contact** - Form with floating labels, availability calendar

### Interactive Elements
- 🖱️ Custom cursor with blend-mode: difference
- 🧲 Magnetic buttons that attract cursor
- ⌨️ Interactive terminal (type `help` for commands)
- 📊 Animated radar chart
- 🔮 WebGL shader background

### Performance
- ⚡ 95+ Lighthouse score
- 📱 Responsive design
- ♿ WCAG 2.1 AA accessibility
- 🌙 Reduced motion support
- 📦 PWA ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vinayakchiluka/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:7007](http://localhost:7007) in your browser.

### Build for Production

```bash
# Create optimized build
npm run build

# Export static files to dist/
npm run export
```

## 📝 Content Management

All content is stored in a single JSON file: `/content/data.json`

Edit this file to update:
- Personal information
- Skills and expertise
- Projects
- Work experience
- Blog posts
- Testimonials

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
--cyber-cyan: #00f5ff;
--cyber-purple: #b829f7;
--cyber-pink: #ff006e;
```

### Fonts
Modify font imports in `app/layout.tsx`.

### Background
The WebGL shader is in `components/ShaderBackground.tsx`.

## 📁 Project Structure

```
app/
├── sections/          # Page sections
├── layout.tsx         # Root layout
├── page.tsx           # Main page
└── globals.css        # Global styles
components/            # Reusable components
hooks/                 # Custom React hooks
content/
└── data.json          # Content source
public/                # Static assets
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Credits

Designed and built by [Vinayak Chiluka](https://vinayak-chiluka.me)

---

Built with ❤️ using Next.js, Tailwind CSS, and Three.js
