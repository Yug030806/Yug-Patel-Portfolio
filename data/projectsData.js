export const projects = [
  {
    id: "packsmart-ai",
    slug: "packsmart-ai",
    number: "01",
    title: "PackSmart AI — Food Packaging & Barrier Physics Platform",
    category: "AI • Thermodynamic Physics • Multi-Objective ML",
    shortDescription:
      "An enterprise AI SaaS platform combining food biochemistry, ASTM barrier permeation physics, and multi-objective Pareto optimization to specify optimal food packaging substrates and shelf life.",
    fullDescription:
      "An enterprise AI SaaS & ASTM barrier physics platform engineered for commercial food manufacturing and sustainable FMCG packaging. PackSmart AI replaces trial-and-error material selection with thermodynamic transport physics, coupled Arrhenius degradation kinetics, and multi-objective constrained Pareto optimization to calculate exact permissible OTR/WVTR barrier thresholds, predict multi-pathway shelf life, and optimize unit packaging economics.",
    role: "Full-stack architecture, biophysical & kinetic modeling, ML pipeline, and ASTM barrier physics implementation",
    roleType: "Lead Full-Stack & AI Systems Developer",
    status: "Live in Production",
    featured: true,
    github: "https://github.com/Yug030806/PackSmart-AI",
    live: "https://pack-smart-ai-three.vercel.app",
    tech: [
      "Python 3.13",
      "FastAPI",
      "React 18",
      "Vite",
      "Scikit-learn",
      "ASTM D3985 / F1249",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion"
    ],
    overview:
      "In commercial food manufacturing and FMCG packaging, material selection has historically relied on trial-and-error, qualitative supplier terms ('High Barrier'), or static spreadsheets. PackSmart AI integrates food biochemistry, thermodynamic transport physics, and multi-objective machine learning into an interactive platform that computes exact gas/vapor barrier thresholds, models coupled degradation kinetics, and outputs verified Pareto-optimal packaging specifications.",
    problem:
      "Traditional packaging specification suffers from two costly failure modes: under-packaging (trimming $0.01 from barrier film triggers moisture gain or rancidity, causing over $0.25/pack in spoilage write-offs and brand erosion) and over-packaging (over-specifying expensive non-recyclable multi-material foils, inflating polymer resin spending and carbon liabilities). Packaging engineers lack an integrated platform calculating permissible OTR and WVTR from first principles.",
    solution:
      "Engineered a full-stack platform pairing a FastAPI scientific backend with a responsive React frontend. Built thermodynamic transport equations for ASTM D3985 (OTR) and ASTM F1249 (WVTR), coupled Arrhenius degradation kinetics (microbial, lipid oxidation, moisture staling), an Equilibrium MAP gas solver, and a 4-tier Pareto optimization engine resolving trade-offs across shelf life, unit cost, and quantitative LCA circularity.",
    keyFeatures: [
      {
        title: "ASTM Permeation & Barrier Thresholds",
        description:
          "Computes allowable oxygen transmission (OTR via ASTM D3985) and water vapor transmission (WVTR via ASTM F1249) from product water activity, fat content, and storage isotherms."
      },
      {
        title: "Coupled Arrhenius Kinetics Engine",
        description:
          "Evaluates competing degradation pathways (microbial growth via Ratkowsky models, lipid auto-oxidation, moisture sorption) to determine the true rate-limiting spoilage horizon."
      },
      {
        title: "Multi-Objective Constrained Pareto Optimizer",
        description:
          "Generates 4 distinct material trade-offs: Maximum Shelf Life, Lowest Total Cost, Higher Sustainability, and Balanced Solution with explicit 'Why this material?' decision intelligence."
      },
      {
        title: "3-Tier Hierarchical RBAC & Audit Trails",
        description:
          "Enforces enterprise security across Super Admin, System Manager, and Standard User roles with JWT authentication, privilege matrices, and real-time security audit logging."
      }
    ],
    architecture: [
      {
        phase: "Biochemical & Environmental Ingestion",
        detail:
          "Captures food moisture, fat composition, water activity, package dimensions, storage temperature, and ambient RH."
      },
      {
        phase: "Thermodynamic & Permeation Physics",
        detail:
          "FastAPI backend calculates critical Δ[O2] and ΔM thresholds, scaling permeation via Arrhenius Q10 kinetics and Tetens vapor equations."
      },
      {
        phase: "Machine Learning & Pareto Optimization",
        detail:
          "MultiOutput Random Forest regressor scores certified substrates against the multi-material frontier to identify non-dominated Pareto alternatives."
      },
      {
        phase: "Interactive SaaS & Verification Delivery",
        detail:
          "React frontend delivers a 5-step guided wizard, 'What-If' scenario simulator, live telemetry stream, and downloadable PDF technical specifications."
      }
    ],
    contributionDetails: [
      "Architected the dual-engine architecture: Python FastAPI scientific backend + React 18 / Vite frontend.",
      "Implemented mathematical formulations for ASTM D3985 OTR, ASTM F1249 WVTR, and GAB sorption isotherms.",
      "Constructed the coupled Arrhenius shelf-life predictor factoring microbial, oxidation, and moisture degradation.",
      "Designed the 4-choice Pareto trade-off optimization solver balancing barrier performance, packaging cost, and LCA circularity.",
      "Integrated Supabase PostgreSQL database, JWT authentication, and 3-tier Role-Based Access Control.",
      "Created the dark-mode packaging SaaS UI with interactive parameter sliders, real-time kinetic visualizers, and PDF export."
    ],
    challenges: [
      {
        challenge: "Coupling Multiphase Degradation Kinetics",
        solution:
          "Implemented a unified minimum-envelope solver evaluating microbial, lipid auto-oxidation, and moisture gain simultaneously to identify the exact rate-limiting failure mode."
      },
      {
        challenge: "Offline & High-Latency Network Resilience",
        solution:
          "Engineered a local thermodynamic fallback engine running in-browser Fickian diffusion models with an 8-second request ceiling and React ErrorBoundary shields."
      }
    ],
    nextProject: {
      slug: "hillora",
      title: "Hillora — Alpine Tourism & Mobility Platform"
    }
  },
  {
    id: "hillora",
    slug: "hillora",
    number: "02",
    title: "Hillora — Alpine Tourism & Mobility Platform",
    category: "AI • Alpine Tourism • RBAC Ecosystem",
    shortDescription:
      "An AI-powered alpine tourism and mobility ecosystem for Himachal Pradesh featuring smart itinerary synthesis, mountain elevation calculators, hyper-local partner portals, and transparent mobility networks.",
    fullDescription:
      "A hyper-local alpine tourism and mobility ecosystem designed for the mountain geography of Himachal Pradesh. Hillora solves the challenges of mountain over-tourism and economic leakage by integrating an AI itinerary synthesizer, realistic hill-station transit calculators, four dedicated role portals (Traveler, Local Partner, Mobility Partner, SuperAdmin), and an atmospheric Alpine Glassmorphism UI.",
    role: "Full-stack development, Alpine Glassmorphism UI/UX, RBAC architecture & AI itinerary synthesizer",
    roleType: "Lead Full-Stack Developer & UI/UX Designer",
    status: "Live in Production",
    featured: true,
    github: "https://github.com/Yug030806/Hillora",
    live: "https://hillora.vercel.app",
    tech: [
      "React 18",
      "Vite 7",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "React Router DOM",
      "Context API (RBAC)",
      "Alpine Glassmorphism"
    ],
    overview:
      "Mountain tourist destinations like Manali suffer from severe economic leakage, uncalibrated travel itineraries that ignore winding hairpin roads, and fragmented local transport. Hillora creates a unified ecosystem connecting travelers directly with authentic local merchants, verified 4x4 mountain drivers, and transparent mountain transit while maximizing local economic retention (targeting 90%+ local spend).",
    problem:
      "Standard travel aggregators fail in high-altitude mountain environments: they assume linear highway speeds ignoring steep elevation gradients, extract hefty commissions that drain revenue away from native Himachali businesses, and leave travelers vulnerable to seasonal transport price gouging and sudden weather landslides.",
    solution:
      "Developed Hillora as a role-isolated alpine platform featuring an AI trip synthesizer with mountain gradient and hairpin-turn timing adjustments, a Local Economic Retention tracker, a Fair Fare engine for high-altitude passes (Rohtang, Solang, Atal Tunnel), and 4 specialized role portals with 1-click RBAC switching.",
    keyFeatures: [
      {
        title: "AI Itinerary Synthesizer",
        description:
          "Generates realistic mountain itineraries factoring available hours, budget, interests, walking gradients, and high-altitude hairpin turns."
      },
      {
        title: "Hyper-Local Partner & Café Portal",
        description:
          "Dedicated business management interface for heritage cafés (e.g., Café 1947 in Old Manali), homestays, and Himachali Dham kitchens with live booking feeds."
      },
      {
        title: "Mobility Partner Network & Fair Fares",
        description:
          "Fleet management for registered 4x4 Gypsy cabs and valley shuttles with transparent flat-rate pricing for Rohtang Pass, Solang Valley, and Atal Tunnel."
      },
      {
        title: "Alpine Glassmorphism Design System",
        description:
          "Atmospheric visual design featuring live Himalayan parallax photography, multi-tier CSS mountain mist drifts, and ultra-frosted 24px backdrop blur panels."
      }
    ],
    architecture: [
      {
        phase: "Authentication & Role Gate",
        detail:
          "React Context API with RBAC router guards isolates Traveler, Local Partner, Mobility Partner, and SuperAdmin clearance levels."
      },
      {
        phase: "AI Synthesis & Terrain Calculation",
        detail:
          "Evaluates destination coordinates against altitude differentials and road geometry to compute feasible mountain travel timelines."
      },
      {
        phase: "Local Economic Retention Modeling",
        detail:
          "Tracks traveler expenditures across native merchants to ensure 90%+ of capital stays within native Himachali mountain communities."
      },
      {
        phase: "SuperAdmin Audit & Emergency Broadcast",
        detail:
          "Master dashboard tracking platform GMV, license verification queues, and regional weather/landslide advisory broadcasts."
      }
    ],
    contributionDetails: [
      "Architected and built the entire frontend application using React 18, Vite 7, and Tailwind CSS.",
      "Crafted the custom Alpine Glassmorphism design system featuring CSS mountain mist animations and frosted glass cards.",
      "Implemented 4-tier Role-Based Access Control (RBAC) with ProtectedRoute guards and a 1-click administrative role switcher.",
      "Engineered the AI trip planner module with altitude-aware transit estimators and local economic retention calculations.",
      "Integrated the Manali pilot geo-registry featuring real heritage cafés, 4x4 mountain transit routes, and scenic spots.",
      "Deployed the production build on Vercel with zero-config edge performance."
    ],
    challenges: [
      {
        challenge: "Accurate Transit Modeling in High-Altitude Terrain",
        solution:
          "Replaced flat 2D distance calculations with mountain gradient friction multipliers to account for steep ascents and hairpin switchbacks."
      },
      {
        challenge: "Layered Glassmorphism Performance",
        solution:
          "Optimized backdrop filters and GPU-accelerated CSS transforms to ensure smooth 60fps parallax scrolling across mobile and desktop displays."
      }
    ],
    nextProject: {
      slug: "smart-warehouse",
      title: "Smart Warehouse Automation System"
    }
  },
  {
    id: "smart-warehouse",
    slug: "smart-warehouse",
    number: "03",
    title: "Smart Warehouse Automation System",
    category: "AI • Automation • Algorithms",
    shortDescription:
      "A smart warehouse logistics platform featuring autonomous-cart simulation, multi-floor routing, QR verification, analytics and audit logging.",
    fullDescription:
      "A comprehensive warehouse automation platform designed to simulate and optimize internal logistics operations. It addresses multi-level inventory routing challenges by combining A* pathfinding with physical constraints like elevator transitions, real-time autonomous cart tracking, barcode/QR verification, and live analytics dashboards.",
    role: "Development, algorithm implementation & system integration",
    roleType: "Full-Stack Developer & Algorithm Implementation",
    status: "Completed Prototype",
    featured: true,
    github: "https://github.com/Yug030806/Smart-Warehouse-Automation-System",
    live: "https://smart-warehouse-automation-system.vercel.app",
    tech: [
      "Next.js",
      "TypeScript",
      "A* Pathfinding",
      "Supabase",
      "PostgreSQL",
      "React",
      "Tailwind CSS"
    ],
    overview:
      "Modern warehouses face operational bottlenecks when coordinating picking routes across multiple levels and organizing autonomous vehicle fleets. This project models an end-to-end intelligent dispatch and routing platform that coordinates simulated Autonomous Mobile Robots (AMRs), manages inventory transactions, and logs every movement with audit-ready accuracy.",
    problem:
      "Traditional manual warehousing often incurs path inefficiencies, cross-floor transit delays, and misplacement errors during order picking. In complex multi-tier facilities, standard 2D pathfinding fails because movement requires coordinating vertical lifts (elevators) with floor-level navigation, while maintaining real-time verification of item custody.",
    solution:
      "Implemented a graph-based multi-tier A* routing engine that partitions navigation grids across multiple floors with designated elevator interchange nodes. Paired with a reactive simulation loop, the platform visualizes autonomous vehicle transit, verifies package pickups via QR scanning tokens, and persists audit trails in Supabase.",
    keyFeatures: [
      {
        title: "Multi-Floor A* Pathfinding",
        description:
          "Custom graph heuristic algorithm that computes optimal paths across distinct floor levels, accounting for elevator wait cycles and aisle obstacles."
      },
      {
        title: "Autonomous Cart Simulation",
        description:
          "Interactive simulation environment displaying AMR state transitions: Idle, En Route, Loading, Lift In Transit, and Completed."
      },
      {
        title: "QR Code Verification",
        description:
          "Cryptographic/tokenized verification checkpoint requiring scan confirmation at pickup racks and drop-off stations to prevent inventory discrepancy."
      },
      {
        title: "Real-time Metrics & Audit Trail",
        description:
          "Interactive dashboard tracking active mission metrics, path efficiency ratings, fleet battery levels, and tamper-resistant transaction logging."
      }
    ],
    architecture: [
      {
        phase: "Input & Order Queuing",
        detail:
          "Inventory requests originate from operator dispatches and are queued into prioritized dispatch jobs."
      },
      {
        phase: "Graph Construction & A* Computation",
        detail:
          "Warehouse topology is represented as a weighted 3D coordinate grid with elevators modeled as vertical transitional vertices."
      },
      {
        phase: "Simulation & Dispatch Execution",
        detail:
          "AMRs execute step-by-step route traversals with live coordinate updates reflected in the visual frontend."
      },
      {
        phase: "Verification & Supabase Persistence",
        detail:
          "Checkpoint scans validate item handling, committing transaction logs to PostgreSQL database tables via Supabase."
      }
    ],
    contributionDetails: [
      "Engineered the multi-floor routing algorithm connecting floor nodes with vertical elevator transitions.",
      "Implemented the interactive simulation canvas and route visualization in Next.js and TypeScript.",
      "Integrated Supabase backend for real-time order states, inventory records, and audit logging.",
      "Built responsive telemetry panels and analytics dashboards for operational monitoring."
    ],
    challenges: [
      {
        challenge: "Elevator Transition Synchronization",
        solution:
          "Modeled elevator shafts as conditional transfer nodes with simulated wait delays to mirror realistic warehouse hardware throughput."
      },
      {
        challenge: "Real-time State Management",
        solution:
          "Utilized reactive state hooks and throttled simulation ticks to maintain 60 FPS rendering without lag during multi-cart dispatch."
      }
    ],
    nextProject: {
      slug: "ai-news-summarizer",
      title: "AI News Summarizer"
    }
  },
  {
    id: "ai-news-summarizer",
    slug: "ai-news-summarizer",
    number: "04",
    title: "AI News Summarizer",
    category: "NLP • Machine Learning • Research",
    shortDescription:
      "An AI-powered news analysis platform that summarizes articles and extracts sentiment, named entities, keywords, categories and credibility indicators.",
    fullDescription:
      "An end-to-end natural language processing platform developed to combat information overload in modern media. The platform ingests news text, produces concise extractive and abstractive summaries, identifies key entities and topics, and evaluates sentiment and editorial bias indicators.",
    role: "Researcher & Speaker — conducted NLP research, explored AI/ML concepts, and presented technical insights",
    roleType: "Technical Researcher & Presentation Speaker",
    status: "Completed Research & Demo",
    featured: false,
    github: "https://github.com/mayank018-tech/AI-News-summarizer",
    live: "https://ai-news-summarizer-sigma.vercel.app",
    tech: [
      "Python",
      "Flask",
      "NLP",
      "spaCy",
      "NLTK",
      "Scikit-learn",
      "Machine Learning"
    ],
    overview:
      "Readers encounter thousands of conflicting and wordy news publications daily. This project demonstrates how computational linguistics and classical NLP pipelines can distill lengthy articles into digestible bullet points while surfacing latent metadata like emotional tone, named entities, and potential bias.",
    problem:
      "Manual content curation cannot scale with 24/7 global news cycles. Raw articles frequently contain redundant commentary, clickbait phrasing, and subtle emotional slants that obscure factual reporting. Readers need an objective, rapid synthesis tool that preserves context while extracting essential intelligence.",
    solution:
      "Developed an NLP pipeline utilizing spaCy for tokenization and Named Entity Recognition (NER), NLTK and TF-IDF frequency algorithms for keyword extraction and extractive summarization, and Scikit-learn models for sentiment and topic classification, served via a lightweight Flask backend.",
    keyFeatures: [
      {
        title: "Intelligent Text Summarization",
        description:
          "Synthesizes full-length articles into concise summaries retaining core semantic propositions and key arguments."
      },
      {
        title: "Named Entity Recognition (NER)",
        description:
          "Identifies and categorizes key actors, organizations, locations, and political entities with spaCy entity tagging."
      },
      {
        title: "Sentiment & Tone Scoring",
        description:
          "Quantifies emotional polarity and subjectivity to help readers understand editorial slant and neutrality."
      },
      {
        title: "Keyword & Category Tagging",
        description:
          "Automatically assigns categorical labels (Technology, Politics, Business) using TF-IDF and supervised classification."
      }
    ],
    architecture: [
      {
        phase: "Document Ingestion & Preprocessing",
        detail:
          "Raw news text is normalized, stripped of markup, tokenized, and filtered for stop-words using NLTK and spaCy."
      },
      {
        phase: "Feature Extraction & Scoring",
        detail:
          "Sentence graph weights and TF-IDF vectors evaluate sentence salience for summarization extraction."
      },
      {
        phase: "Entity & Sentiment Pipeline",
        detail:
          "Pre-trained linguistic models evaluate named entity boundaries and compute polarity scores."
      },
      {
        phase: "API Delivery",
        detail:
          "A Flask REST API packages the extracted intelligence into structured JSON consumed by the frontend interface."
      }
    ],
    contributionDetails: [
      "Conducted foundational research into NLP algorithms, evaluating text summarization techniques and sentiment scoring models.",
      "Explored underlying AI/ML principles including tokenization, TF-IDF weighting, and named entity classification.",
      "Contributed to the team's technical architecture understanding and algorithmic evaluation benchmarks.",
      "Served as the primary Speaker, presenting the project's technical methodology, AI capabilities, and research findings to evaluators."
    ],
    challenges: [
      {
        challenge: "Balancing Summary Brevity vs. Context Retention",
        solution:
          "Researched sentence salience scoring thresholds to prevent critical names and context from being clipped during condensation."
      },
      {
        challenge: "Explaining AI Pipeline Mechanics to Audiences",
        solution:
          "Designed intuitive visual presentation slides that demystified token embeddings, TF-IDF weights, and classification confidence scores."
      }
    ],
    nextProject: {
      slug: "beingstrong-fitness",
      title: "The BeingStrong Fitness"
    }
  },
  {
    id: "beingstrong-fitness",
    slug: "beingstrong-fitness",
    number: "05",
    title: "The BeingStrong Fitness",
    category: "Web Development • UI/UX",
    shortDescription:
      "A modern fitness-focused web application with a responsive interface, reusable components and polished motion-driven interactions.",
    fullDescription:
      "A high-energy, modern digital platform crafted for a fitness brand. Designed with dark athletic aesthetics, performance-focused layout grids, fluid motion choreographies, and responsive UI components that deliver an engaging brand experience across devices.",
    role: "Frontend development, UI/UX implementation, responsive design & deployment",
    roleType: "Frontend Developer & UI/UX Designer",
    status: "Live in Production",
    featured: false,
    github: "https://github.com/Yug030806/The-BeingStrong-Fitness",
    live: "https://the-being-strong-fitness.vercel.app/",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    overview:
      "Fitness platforms need to inspire energy and confidence while remaining effortless to navigate. BeingStrong Fitness was created as a showcase of modern frontend craft—blending high-contrast typography, athletic color accents, responsive layout geometry, and fluid micro-interactions.",
    problem:
      "Many fitness brand websites suffer from cluttered information hierarchies, sluggish page loads, uninspired generic templates, and poor mobile rendering that discourages prospective members from exploring programs or schedules.",
    solution:
      "Engineered a modular Next.js web application utilizing Tailwind CSS for atomic styling, Framer Motion for scroll-triggered visual momentum, and an accessible component hierarchy deployed on Vercel with near-instant loading times.",
    keyFeatures: [
      {
        title: "Dynamic Motion Experience",
        description:
          "Physics-informed scroll reveals, staggered card entrances, and smooth hover micro-animations built with Framer Motion."
      },
      {
        title: "Responsive Athletic Layout",
        description:
          "Engineered for touchscreens, tablets, and high-resolution monitors with fluid clamp typography and flexible grid systems."
      },
      {
        title: "Reusable UI Architecture",
        description:
          "Clean component abstraction for workout categories, trainers, membership tiers, and testimonials."
      },
      {
        title: "Vercel Zero-Config Deployment",
        description:
          "Optimized static asset delivery, caching headers, and automatic branch previews delivering high Lighthouse performance."
      }
    ],
    architecture: [
      {
        phase: "Design System & Tokens",
        detail:
          "Defined custom color palettes, font scaling variables, and elevation shadows matching modern athletic aesthetics."
      },
      {
        phase: "Modular Component Tree",
        detail:
          "Assembled composable components: HeroBanner, ProgramGrid, TrainerRoster, PricingTable, and ContactCTA."
      },
      {
        phase: "Interaction Layer",
        detail:
          "Applied Framer Motion viewport triggers to orchestrate staggered entrances as the user scrolls down the page."
      },
      {
        phase: "Edge Deployment",
        detail:
          "Configured continuous integration with GitHub and Vercel for instantaneous edge deployment on push."
      }
    ],
    contributionDetails: [
      "Architected the entire frontend interface from conceptual design to production deployment.",
      "Implemented responsive layouts and dark-mode styling utilizing modern Tailwind CSS patterns.",
      "Built custom animation choreographies with Framer Motion for engaging interactive states.",
      "Deployed and verified performance, cross-browser compatibility, and mobile viewport responsiveness on Vercel."
    ],
    challenges: [
      {
        challenge: "Maintaining Fluid 60fps Animation on Low-End Mobile Devices",
        solution:
          "Optimized CSS transforms and hardware-accelerated Framer Motion properties to prevent layout reflows during scroll."
      },
      {
        challenge: "Responsive Typography Hierarchy",
        solution:
          "Used CSS clamp functions to ensure bold athletic headlines scale gracefully from 360px phones to ultrawide displays."
      }
    ],
    nextProject: {
      slug: "packsmart-ai",
      title: "PackSmart AI — Food Packaging & Barrier Physics Platform"
    }
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
