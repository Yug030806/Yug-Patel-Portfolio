import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://yugpatel.dev"),
  title: "Yug Patel — Software Developer | AI & Intelligent Systems",
  description:
    "Portfolio of Yug Patel, a Computer Engineering student focused on software development, AI, intelligent systems and full-stack web development.",
  keywords: [
    "Yug Patel",
    "Software Developer",
    "AI",
    "Intelligent Systems",
    "NLP",
    "Full-Stack Developer",
    "Computer Engineering",
    "Next.js",
    "A* Pathfinding",
    "Smart Warehouse Automation",
    "SVIT Vasad"
  ],
  authors: [{ name: "Yug Patel", url: "https://github.com/Yug030806" }],
  creator: "Yug Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yugpatel.dev",
    title: "Yug Patel — Software Developer | AI & Intelligent Systems",
    description:
      "Portfolio of Yug Patel, a Computer Engineering student focused on software development, AI, intelligent systems and full-stack web development.",
    siteName: "Yug Patel Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yug Patel — Software Developer | AI & Intelligent Systems",
    description:
      "Portfolio of Yug Patel, a Computer Engineering student focused on software development, AI, intelligent systems and full-stack web development."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport = {
  themeColor: "#07080a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}