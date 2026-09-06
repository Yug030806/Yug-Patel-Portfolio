# Yug Patel — Portfolio (Version 2)

> Premium dark, futuristic, minimal developer portfolio engineered for software engineering internships, AI/ML opportunities, placements, and open-source collaborations.

Built with **Next.js 15 (App Router)**, **React 19**, and **Framer Motion**.

---

## ⚡ Architecture & Highlights

- **Aesthetic**: Dark minimalist palette (`#07080a`), acid-lime accent (`#b8ff4d`), fine borders, subtle glassmorphism, and responsive typography.
- **Hero Section**:
  - Live availability beacon: `OPEN TO INTERNSHIPS & OPPORTUNITIES`.
  - 3D interactive particle & algorithmic node graph on HTML5 Canvas reacting subtly to cursor movement, with mobile & reduced-motion fallbacks.
  - Magnetic CTA buttons: `[ VIEW PROJECTS ]` and `[ DOWNLOAD RESUME ]`.
- **Custom Desktop Cursor**:
  - Central dot with smooth lerping outer ring follower.
  - Interactive element hover scaling and `VIEW` badge state over case studies.
  - Automatically disabled on touch/mobile devices and when `prefers-reduced-motion` is active.
- **Magnetic Buttons**:
  - Restrained, spring-physics-based attraction toward cursor for all primary CTAs.
- **Navigation**:
  - Floating glass navigation with scroll-compacting, active section detection, smooth scrolling, and an animated mobile drawer.
- **Featured Projects**:
  1. **Smart Warehouse Automation System** (`/projects/smart-warehouse`):
     - Multi-floor A* pathfinding, elevator transitions, AMR cart simulation, QR verification, Supabase audit trails.
     - Role: Development, algorithm implementation & system integration.
  2. **AI News Summarizer** (`/projects/ai-news-summarizer`):
     - NLP processing pipeline, TF-IDF salience scoring, spaCy NER, and sentiment polarity analysis.
     - Role: Researcher & Speaker.
  3. **The BeingStrong Fitness** (`/projects/beingstrong-fitness`):
     - Athletic dark UI, responsive component geometry, Framer Motion momentum animations.
     - Role: Frontend development, UI/UX implementation & deployment.
- **Dedicated Project Detail Routes**:
  - Full-length technical case study pages (`/projects/[slug]`) complete with problem statements, architectural pipelines, exact contributions, engineering challenges, and sequential navigation.
- **GitHub Open Source Section**:
  - Direct integration with GitHub's public API (`/api/github`) with offline/rate-limit fallback data, public repo counts, and repository language breakdowns.
- **Interactive Skills Toolkit**:
  - Category-filtered technology cards without fake percentages (Programming, Web & Frontend, AI & ML, Backend & Data, Tools).
- **Verified Achievement**:
  - 🥉 3rd Prize in NLP Ignite Bootcamp (SVIT ACM Student Chapter, 3–6 Aug 2026) with interactive certificate inspection and lightbox modal.
- **Contact & Conversion**:
  - One-click "Copy Email" with instant clipboard feedback, direct email link, and verified GitHub & LinkedIn profiles.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.js              # Cached GitHub stats API route with fallback
│   ├── projects/
│   │   ├── smart-warehouse/
│   │   │   └── page.js               # Case study route
│   │   ├── ai-news-summarizer/
│   │   │   └── page.js               # Case study route
│   │   └── beingstrong-fitness/
│   │       └── page.js               # Case study route
│   ├── globals.css                   # Design tokens, futuristic styling & responsive queries
│   ├── layout.js                     # Root layout with SEO metadata, cursor, navbar, footer
│   └── page.js                       # Main landing page
├── components/
│   ├── About.jsx                     # Factual bio & 4 focus area cards
│   ├── Achievement.jsx               # 3rd Prize showcase & certificate lightbox
│   ├── Contact.jsx                   # High-impact CTA with copy email & social links
│   ├── CustomCursor.jsx              # Smooth desktop cursor follower with "VIEW" states
│   ├── Footer.jsx                    # Clean developer footer with back-to-top
│   ├── GithubStats.jsx               # GitHub profile & repository metrics
│   ├── Hero.jsx                      # Hero section with headline & magnetic buttons
│   ├── InteractiveScene.jsx          # 3D canvas particle graph with telemetry HUD
│   ├── MagneticButton.jsx            # Framer Motion spring magnetic CTA wrapper
│   ├── Navbar.jsx                    # Floating glass navbar with mobile drawer
│   ├── ProjectCard.jsx               # Project card with role pill & case study link
│   ├── ProjectDetail.jsx             # Reusable case study page layout
│   ├── Projects.jsx                  # Selected work container
│   ├── ProjectVisuals.jsx            # Custom SVG/telemetry graphics for all 3 projects
│   └── Skills.jsx                    # Filterable skill categories
├── data/
│   ├── projectsData.js               # Case study technical documentation & metadata
│   └── skillsData.js                 # Categorized skills matrix
└── public/
    ├── certificate.jpg               # NLP Ignite Bootcamp certificate
    └── Yug_Patel_Resume.pdf          # Resume PDF
```

---

## 🌐 Deployment

Push the repository to GitHub and connect it to [Vercel](https://vercel.com) for automatic zero-configuration edge deployment.
