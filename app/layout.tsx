import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AI Toolbox",
    template: "%s | AI Toolbox",
  },
  description:
    "AI Toolbox — a collection of intelligent AI-powered tools built for productivity and creativity.",
  keywords: ["AI Toolbox", "AI tools", "productivity tools", "Next.js AI"],
  authors: [
    { name: "Ananiya Fekede", url: "https://edekefayinana.vercel.app" },
  ],
  creator: "Ananiya",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AI Toolbox",
    description: "Discover a smart collection of AI-powered tools.",
    url: "https://toolboxai.vercel.app/",
    siteName: "AI Toolbox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Toolbox",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolbox",
    description: "Discover a smart collection of AI-powered tools.",
    creator: "@yourTwitterHandle",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://toolboxai.vercel.app/"),
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <script
          src="https://cdn.jsdelivr.net/gh/fayinana/awesome-badge@1.0.4/ananiya-badge.js"
          type="module"
          async
        />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
