export const projects = [
  {
    id: "smart-warehouse",
    slug: "smart-warehouse",
    number: "01",
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
    number: "02",
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
    number: "03",
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
      slug: "smart-warehouse",
      title: "Smart Warehouse Automation System"
    }
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
