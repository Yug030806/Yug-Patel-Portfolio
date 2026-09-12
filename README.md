<div align="center">

# ⚡ Yug Patel — Developer Portfolio (V2)

<p align="center">
  <strong>A premium dark, futuristic, minimalist portfolio engineered for high-impact software engineering, AI/ML, and full-stack opportunities.</strong>
</p>

<p align="center">
  <a href="https://github.com/Yug030806/Yug-Patel-Portfolio/stargazers"><img src="https://img.shields.io/github/stars/Yug030806/Yug-Patel-Portfolio?style=for-the-badge&color=b8ff4d&logo=github&labelColor=07080a" alt="Stars" /></a>
  <a href="https://github.com/Yug030806/Yug-Patel-Portfolio/network/members"><img src="https://img.shields.io/github/forks/Yug030806/Yug-Patel-Portfolio?style=for-the-badge&color=b8ff4d&logo=github&labelColor=07080a" alt="Forks" /></a>
  <a href="https://github.com/Yug030806/Yug-Patel-Portfolio/blob/main/package.json"><img src="https://img.shields.io/badge/Version-2.0.0-b8ff4d?style=for-the-badge&labelColor=07080a" alt="Version" /></a>
  <a href="#-status"><img src="https://img.shields.io/badge/Status-Open_To_Opportunities-00e599?style=for-the-badge&labelColor=07080a" alt="Status" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <a href="#-featured-projects"><strong>View Projects</strong></a> •
  <a href="#-architectural-highlights"><strong>Explore Architecture</strong></a> •
  <a href="#-getting-started"><strong>Run Locally</strong></a> •
  <a href="#-contact--connect"><strong>Get in Touch</strong></a>
</p>

---

</div>

## 📖 Table of Contents

- [Overview](#-overview)
- [Architectural Highlights](#-architectural-highlights)
- [Featured Projects](#-featured-projects)
- [Interactive Features & UX Polish](#-interactive-features--ux-polish)
- [Tech Stack & Tooling](#-tech-stack--tooling)
- [Honors & Achievements](#-honors--achievements)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contact & Connect](#-contact--connect)

---

## 🌌 Overview

This repository houses the personal portfolio of **Yug Patel**, a Computer Engineering undergraduate focused on **Artificial Intelligence**, **Intelligent Systems**, and **Modern Full-Stack Engineering**.

Designed from the ground up with a bespoke futuristic design language:
- **Obsidian Dark Palette** (`#07080a`) paired with an electric **Acid-Lime Accent** (`#b8ff4d`).
- **Kinetic Physics**: Magnetic CTA buttons, dynamic spring-inertia animations, and a smooth dual-ring desktop cursor.
- **Data Density without Clutter**: Deep-dive technical case studies with architecture diagrams, challenge retrospectives, and live system telemetry.
- **Zero Fake Metrics**: Transparent skills matrix rooted in real project applications rather than arbitrary percentage bars.

---

## ⚡ Architectural Highlights

| Feature | Implementation Details |
| :--- | :--- |
| **Framework** | **Next.js 15** with modern **App Router** architecture, optimized SSR/SSG, and fast edge navigation |
| **Animation Engine** | **Framer Motion 12** powering staggered scroll reveals, layout projections, and physics-driven spring mechanics |
| **Canvas Particle Graph** | HTML5 3D particle node network reacting to cursor coordinates with responsive reduced-motion fallback |
| **Magnetic Attraction** | Mathematical vector calculation pulling interactive CTA buttons toward cursor position with spring release |
| **Dynamic GitHub Stats** | Server API route (`/api/github`) fetching live metrics with revalidation caching and offline fallbacks |
| **Modular Case Studies** | Dedicated nested routing (`/projects/[slug]`) complete with architecture breakdowns, problem statements, and key engineering challenges |

---

## 🚀 Featured Projects

A curated selection of technical solutions spanning algorithm design, natural language processing, and high-performance web development.

| Project | Domain / Stack | Key Highlights | Links |
| :--- | :--- | :--- | :---: |
| **Smart Warehouse Automation System** | `Next.js` `TypeScript` `A* Pathfinding` `Supabase` `PostgreSQL` | • Multi-floor A* pathfinding algorithm with elevator node transitions<br>• Interactive AMR autonomous vehicle dispatch simulation<br>• Tokenized QR code checkpoint custody verification<br>• Real-time fleet metrics and audit trail logging in Supabase | [🌐 Live Demo](https://smart-warehouse-automation-system.vercel.app) • [💻 Repo](https://github.com/Yug030806/Smart-Warehouse-Automation-System) |
| **AI News Summarizer** | `Python` `Flask` `spaCy` `NLTK` `Scikit-learn` `NLP` | • Classical NLP & text summarization pipeline (extractive & abstractive)<br>• spaCy Named Entity Recognition (NER) for actors and organizations<br>• Sentiment polarity & subjectivity classification scoring<br>• 🥉 **3rd Prize Winner** at NLP Ignite Bootcamp (SVIT ACM) | [🌐 Live Demo](https://ai-news-summarizer-sigma.vercel.app) • [💻 Repo](https://github.com/mayank018-tech/AI-News-summarizer) |
| **The BeingStrong Fitness** | `Next.js` `React` `Tailwind CSS` `Framer Motion` `Vercel` | • Modern athletic digital experience with fluid clamp typography<br>• GPU-accelerated Framer Motion scroll choreographies<br>• Highly composable, accessible component architecture<br>• Deployed on Vercel with near-instant Lighthouse loading speeds | [🌐 Live Demo](https://the-being-strong-fitness.vercel.app/) • [💻 Repo](https://github.com/Yug030806/The-BeingStrong-Fitness) |

---

## 🎯 Interactive Features & UX Polish

<details open>
<summary><b>1. 3D Interactive Algorithmic Node Graph</b></summary>
<br>

A custom HTML5 Canvas canvas scene situated directly inside the Hero viewport. Mathematical nodes connect dynamically based on proximity heuristics, undulating gently and warping toward cursor movements to symbolize algorithmic network flow. Includes an active telemetry HUD and automatic pausing on low-power devices.
</details>

<details>
<summary><b>2. Smart Desktop Cursor Follower</b></summary>
<br>

A custom dual-element cursor utilizing smooth linear interpolation (`lerp`). The inner dot matches exact pointer coordinates while the outer ring lags organically with spring dampening. Hovering over case studies morphs the cursor into a dedicated `VIEW` badge indicator. Automatically disabled on mobile/touch interfaces and accessibility `prefers-reduced-motion` settings.
</details>

<details>
<summary><b>3. Restrained Magnetic Physics Buttons</b></summary>
<br>

Buttons are wrapped in a physics spring calculation that pulls the CTA toward the cursor as it hovers within a defined perimeter (`stiffness: 150, damping: 15`), creating a tactile, physical feel.
</details>

<details>
<summary><b>4. Live GitHub API Telemetry</b></summary>
<br>

Real-time integration via Next.js Route Handlers (`/api/github`) tracking public repository counts, recent active repositories, primary language tags, and profile metadata with 1-hour ISR revalidation.
</details>

---

## 🛠️ Tech Stack & Tooling

<div align="center">

### Core & Programming
![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Data Structures](https://img.shields.io/badge/DSA-A*_Pathfinding-b8ff4d?style=for-the-badge&logoColor=black&labelColor=07080a)

### Frontend & UI Architecture
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### AI, Machine Learning & NLP
![spaCy](https://img.shields.io/badge/spaCy-09A3D5?style=for-the-badge&logo=spacy&logoColor=white)
![NLTK](https://img.shields.io/badge/NLTK-NLP_Pipeline-3776AB?style=for-the-badge&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![TF-IDF](https://img.shields.io/badge/Feature_Extraction-TF--IDF-green?style=for-the-badge)

### Backend, Database & Cloud
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![REST APIs](https://img.shields.io/badge/REST_APIs-Endpoints-purple?style=for-the-badge)

### Developer Tools & Workflow
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🏆 Honors & Achievements

### 🥉 3rd Prize — NLP Ignite Bootcamp
- **Organizers**: SVIT ACM Student Chapter
- **Timeline**: August 3 – 6, 2026
- **Project**: *AI News Summarizer & NLP Pipeline*
- **Scope**: Awarded for designing and delivering an end-to-end NLP news summarization, sentiment extraction, and named entity classification platform.

---

## 📁 Project Directory Structure

```text
Yug-Patel-Portfolio/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.js              # Cached GitHub stats endpoint with fallback
│   ├── projects/
│   │   ├── smart-warehouse/
│   │   │   └── page.js               # Smart Warehouse deep-dive case study
│   │   ├── ai-news-summarizer/
│   │   │   └── page.js               # AI News Summarizer technical case study
│   │   └── beingstrong-fitness/
│   │       └── page.js               # BeingStrong Fitness case study route
│   ├── globals.css                   # Custom design system tokens, typography & animations
│   ├── layout.js                     # Root layout, SEO metadata, cursor & navigation
│   └── page.js                       # Primary landing page
├── components/
│   ├── About.jsx                     # Bio, education facts & 4 core focus area cards
│   ├── Achievement.jsx               # NLP Ignite Bootcamp award & certificate modal
│   ├── Contact.jsx                   # High-conversion CTA with instant email copy & socials
│   ├── CustomCursor.jsx              # Lerping dual-ring pointer with dynamic 'VIEW' state
│   ├── Footer.jsx                    # Minimalist developer footer with smooth back-to-top
│   ├── GithubStats.jsx               # Live telemetry & public repository showcase
│   ├── Hero.jsx                      # Hero section with headline & magnetic action triggers
│   ├── InteractiveScene.jsx          # HTML5 Canvas 3D particle graph & HUD telemetry
│   ├── MagneticButton.jsx            # Framer Motion spring magnetic CTA wrapper
│   ├── Navbar.jsx                    # Floating glassmorphism navbar with mobile drawer
│   ├── ProjectCard.jsx               # Project card component with category pill & links
│   ├── ProjectDetail.jsx             # Reusable case study page layout template
│   ├── Projects.jsx                  # Selected work grid container
│   ├── ProjectVisuals.jsx            # Bespoke SVG diagrams & telemetry visuals
│   └── Skills.jsx                    # Filterable skill category matrix
├── data/
│   ├── projectsData.js               # Complete case study documentation & architecture data
│   └── skillsData.js                 # Categorized skills matrix with contextual tags
└── public/
    ├── certificate.jpg               # NLP Ignite Bootcamp award certificate
    ├── profile.jpg                   # Developer profile avatar
    └── Yug_Patel_Resume.pdf          # Professional Resume PDF
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

- **Node.js**: `v18.18.0` or later ([Download Node.js](https://nodejs.org/))
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yug030806/Yug-Patel-Portfolio.git
   cd Yug-Patel-Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

### Production Build

To inspect performance and verify the optimized production bundle:

```bash
# Generate optimized production build
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment

This application is tailored for seamless zero-configuration edge deployment on **[Vercel](https://vercel.com)**:

1. Fork or push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `Yug-Patel-Portfolio` repository.
4. Next.js App Router defaults will automatically configure the build settings (`next build`).
5. Click **Deploy** to establish continuous edge integration on every push.

---

## 📬 Contact & Connect

I am actively seeking software engineering internships, AI/ML opportunities, open-source collaborations, and hackathons. Feel free to reach out!

<div align="center">

[![Email](https://img.shields.io/badge/Email-yug6600%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yug6600@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yug_Patel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yug-patel-632a58381)
[![GitHub](https://img.shields.io/badge/GitHub-Yug030806-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yug030806)

📍 **Location:** Gujarat, India &nbsp;•&nbsp; 🕒 **Timezone:** IST (UTC +5:30)

</div>

---

<div align="center">
  <sub>Engineered with precision by <strong>Yug Patel</strong>. Crafted for performance, responsiveness, and clean aesthetics.</sub>
</div>
