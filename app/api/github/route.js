import { NextResponse } from "next/server";

const FALLBACK_PROFILE = {
  login: "Yug030806",
  name: "Yug Patel",
  html_url: "https://github.com/Yug030806",
  avatar_url: "https://avatars.githubusercontent.com/u/205591177?v=4",
  public_repos: 7,
  followers: 0,
  following: 0,
  bio: "Software Developer | AI & Intelligent Systems | Computer Engineering",
  repos: [
    {
      name: "Smart-Warehouse-Automation-System",
      full_name: "Yug030806/Smart-Warehouse-Automation-System",
      html_url: "https://github.com/Yug030806/Smart-Warehouse-Automation-System",
      description: "A smart warehouse logistics platform featuring multi-floor routing, autonomous-cart simulation, QR verification, and analytics.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      homepage: "https://smart-warehouse-automation-system.vercel.app"
    },
    {
      name: "The-BeingStrong-Fitness",
      full_name: "Yug030806/The-BeingStrong-Fitness",
      html_url: "https://github.com/Yug030806/The-BeingStrong-Fitness",
      description: "Stay Fit and Strong — Modern fitness-focused web application with responsive UI and polished motion interactions.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      homepage: "https://the-being-strong-fitness.vercel.app"
    },
    {
      name: "AI-News-summarizer",
      full_name: "mayank018-tech/AI-News-summarizer",
      html_url: "https://github.com/mayank018-tech/AI-News-summarizer",
      description: "An AI-powered news analysis platform that summarizes articles and extracts sentiment, named entities, and keywords.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 1,
      homepage: "https://ai-news-summarizer-sigma.vercel.app"
    }
  ]
};

export async function GET() {
  try {
    const userRes = await fetch("https://api.github.com/users/Yug030806", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Yug-Patel-Portfolio-V2"
      },
      next: { revalidate: 3600 }
    });

    if (!userRes.ok) {
      return NextResponse.json(FALLBACK_PROFILE);
    }

    const userData = await userRes.json();

    const reposRes = await fetch("https://api.github.com/users/Yug030806/repos?sort=updated&per_page=6", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Yug-Patel-Portfolio-V2"
      },
      next: { revalidate: 3600 }
    });

    let repos = FALLBACK_PROFILE.repos;
    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData)) {
        repos = reposData.map((repo) => ({
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          description: repo.description,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          homepage: repo.homepage
        }));
      }
    }

    return NextResponse.json({
      login: userData.login || "Yug030806",
      name: userData.name || "Yug Patel",
      html_url: userData.html_url || "https://github.com/Yug030806",
      avatar_url: userData.avatar_url,
      public_repos: userData.public_repos ?? 7,
      followers: userData.followers ?? 0,
      following: userData.following ?? 0,
      bio: userData.bio || "Software Developer | AI & Intelligent Systems",
      repos
    });
  } catch {
    return NextResponse.json(FALLBACK_PROFILE);
  }
}
