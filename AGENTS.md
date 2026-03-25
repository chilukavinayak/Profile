# AGENTS.md - Vinayak Chiluka Portfolio Website

This document provides essential information for AI coding agents working on this project.

## Project Overview

This is a **personal portfolio website** for Vinayak Chiluka, a Senior Principal Engineer specializing in distributed systems and cloud architecture. The site is a static, single-page application showcasing professional experience, technical skills, projects, and blog articles.

**Live URL:** https://vinayak-chiluka.me  
**Domain:** Configured via `CNAME` file (vinayak-chiluka.me)

## Technology Stack

| Component | Technology |
|-----------|------------|
| **Structure** | Vanilla HTML5 (semantic markup) |
| **Styling** | CSS3 with CSS Variables, Flexbox, Grid |
| **Interactivity** | Vanilla JavaScript (ES6+ modules) |
| **Fonts** | Google Fonts (Poppins) |
| **Icons** | Boxicons (via CDN) |
| **Animations** | CSS animations + Intersection Observer API |
| **Forms** | EmailJS API for contact form submission |

**No Build Tools Required:** This is a static website that runs directly in the browser without bundlers or compilers.

## Project Structure

```
/
├── index.html              # Main HTML file (single-page application)
├── CNAME                   # GitHub Pages custom domain configuration
├── package.json            # Minimal npm config for build/deploy scripts
├── RAG_README.md           # Reference design for RAG (AI) projects
│
├── css/
│   └── styles.css          # Main stylesheet (CSS variables, responsive design)
│
├── js/
│   ├── main.js             # Core functionality: navigation, animations, contact form, blog toggles
│   ├── projectsData.js     # Comprehensive project data (12 projects across 6 categories)
│   ├── renderAIProjects.js # Dynamic renderer for AI/RAG category projects
│   ├── detials.js          # Legacy/unused file
│   └── script.js           # Legacy filter and animation functions
│
├── constants/
│   ├── constants.json      # Legacy project data (JSON format)
│   ├── profile.js          # Empty placeholder
│   ├── profileData.js      # Additional profile constants
│   ├── projects.js         # Legacy project exports
│   └── resumeData.js       # Structured resume/CV data with helper functions
│
├── projects/               # RAG/AI project documentation folders
│   ├── medical-diagnosis-rag/
│   ├── realtime-voice-rag/
│   ├── text-to-sql-rag/
│   └── airline-rag-chatbot/
│
├── assets/
│   ├── profile.png         # Profile photo
│   ├── glue.png            # Project illustration
│   ├── files/
│   │   └── Resume.pdf      # Downloadable CV
│   ├── cv/                 # CV-related files
│   └── projects/           # Project assets
│
└── dist/                   # Build output directory (deployment ready)
```

## Build and Deploy Commands

```bash
# Build (copies all files to dist/ directory for deployment)
npm run build

# The build script simply copies files:
# rm -rf dist && mkdir -p dist && cp -R * dist/

# Deployment
# The site is deployed via GitHub Actions or gh-pages
# Do NOT manually push to gh-pages branch
```

## Code Organization

### HTML Structure (`index.html`)

The site is organized as semantic sections:
1. **Header/Nav** - Fixed navigation with mobile hamburger menu
2. **Home/Hero** - Introduction, key stats (10K+ RPS, 99.99% uptime)
3. **About** - Professional summary with achievements
4. **Skills** - Expandable skill categories (6 categories)
5. **Projects** - Filterable project grid (6 filter categories)
6. **Blog** - Expandable article previews
7. **Contact** - Contact cards + EmailJS-powered form
8. **Footer** - Social links and copyright

### JavaScript Modules

| File | Purpose |
|------|---------|
| `main.js` | Navigation toggle, scroll spy, animations, contact form handler, blog expand/collapse, resume download |
| `projectsData.js` | Exports `PROJECTS_DATA` array with 12 projects; includes filter helper functions |
| `renderAIProjects.js` | Dynamically injects AI/RAG projects into the DOM on page load |

### CSS Architecture (`css/styles.css`)

Uses CSS custom properties (variables) for theming:
```css
:root {
  --first-color: #0a66c2;        /* Primary brand color */
  --text-color: #333333;         /* Body text */
  --body-color: #f6f6f6;         /* Page background */
  --container-color: #ffffff;    /* Card backgrounds */
}
```

**Responsive breakpoints:** Mobile-first with `@media (max-width: 768px)` for tablets/mobiles.

## Key Features

### 1. Project Filtering
- Projects have category classes: `cloud`, `backend`, `devops`, `fintech`, `systems`, `ai`
- Filter buttons in `#project__filters` toggle visibility
- AI projects are dynamically rendered from `projectsData.js`

### 2. Skill Accordion
- Click skill headers to expand/collapse
- Controlled by `skills__open` CSS class
- Located in `main.js` event listeners

### 3. Blog Expand/Collapse
- "Read More" buttons toggle `.blog__content--expanded` class
- Excerpts shown by default; full details on expand

### 4. Contact Form
Uses EmailJS for serverless form submission:
- Service ID: `service_pdpcyn4`
- Template ID: `template_0e5pdgr`
- User ID: `hSJAXiSH4M8XZaN87`

### 5. Animations
- Scroll reveal for sections (Intersection Observer)
- Typing animation on hero title
- Counter animations for stats
- Parallax background effect

## Adding New Content

### Adding a New Project

Edit `js/projectsData.js` and add to `PROJECTS_DATA` array:

```javascript
{
  id: 13,
  title: "New Project Name",
  description: "Short description for cards",
  longDescription: "Detailed description for expanded view",
  category: "cloud", // one of: cloud, backend, devops, fintech, systems, ai
  featured: true,    // show in featured section
  technologies: ["Tech1", "Tech2", "Tech3"],
  metrics: {
    key1: "value1",
    key2: "value2"
  },
  achievements: ["Achievement 1", "Achievement 2"],
  architecture: {
    component: "Technology"
  },
  githubUrl: "https://github.com/...",
  liveUrl: "https://..." // optional
}
```

### Adding a New Blog Post

In `index.html`, within `.blog__container`, add:

```html
<article class="blog__content">
  <div class="blog__img-box">
    <div class="blog__placeholder">📊</div>
  </div>
  <h3 class="blog__title">Article Title</h3>
  <p class="blog__description">
    <span class="blog__excerpt">Short excerpt...</span>
    <span class="blog__details">
      <br><br>
      <strong>Key Topics Covered:</strong><br>
      • Point 1<br>
      • Point 2
    </span>
  </p>
  <a href="#" class="blog__button">
    <span class="blog__button-text">Read More</span> 
    <i class="bx bx-right-arrow-alt blog__icon"></i>
  </a>
</article>
```

### Adding New Skills

In `index.html`, within `.skills__container`, duplicate existing `.skills__content` blocks and update:
- Header icon (`bx` classes from Boxicons)
- Title and subtitle
- Skill items with proficiency levels

## External Dependencies

All loaded via CDN (no local dependencies to manage):

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

<!-- Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />

<!-- Form API -->
EmailJS: https://api.emailjs.com/api/v1.0/email/send
```

## Development Guidelines

### Code Style
- **HTML:** Semantic tags, BEM-like naming (`block__element--modifier`)
- **CSS:** Mobile-first, CSS variables for colors, rem units for sizing
- **JS:** ES6+ features, module exports/imports, event delegation

### File Naming Conventions
- CSS classes: `kebab-case` or `snake__case` (BEM style)
- JavaScript: `camelCase.js`
- Constants: `SCREAMING_SNAKE_CASE` for exports

### Color Reference
- Primary: `#0a66c2` (LinkedIn blue - professional theme)
- Text: `#333333`
- Light text: `#777777`
- Background: `#f6f6f6`

### Testing Changes
1. Run `npm run build` to update `dist/`
2. Open `dist/index.html` in browser or serve with local server
3. Test responsive behavior at 768px breakpoint
4. Verify form submission with EmailJS (check spam folders)

## Security Considerations

- EmailJS credentials are **public** (client-side only)
- No sensitive data stored in repository
- Form has basic validation (required fields)
- No authentication or session management

## RAG Projects Documentation

The `projects/` directory contains documentation for AI/RAG (Retrieval-Augmented Generation) projects:

- `medical-diagnosis-rag/` - Clinical RAG assistant with FAISS
- `realtime-voice-rag/` - Voice AI with WebRTC and Weaviate
- `text-to-sql-rag/` - SQL generation with pgvector
- `airline-rag-chatbot/` - Airline support with OpenSearch

See `RAG_README.md` for the reference design pattern common to all RAG projects.

## Common Tasks

### Update Resume PDF
Replace `assets/files/Resume.pdf` with new version. The download link in `main.js` points to this file.

### Update Profile Photo
Replace `assets/profile.png` (recommended: 280x280px or larger).

### Change Domain
Edit `CNAME` file with new domain name.

### Update EmailJS Configuration
In `js/main.js`, find `sendMail()` function and update:
- `service_id`
- `template_id`  
- `user_id`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Contact form not working | Check EmailJS credentials; verify template params match |
| Projects not filtering | Ensure `data-filter` attribute matches category class |
| Mobile menu not opening | Check `nav-toggle` and `nav-menu` IDs exist |
| Blog expand not working | Verify `blog__content--expanded` CSS class exists |
| CSS not loading | Confirm `css/styles.css` path is correct |

---

*Last updated: March 2025*  
*For questions about this project, refer to the live site at https://vinayak-chiluka.me*
