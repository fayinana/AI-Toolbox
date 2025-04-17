"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Supercharge Your Ideas with AI</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-down animation-delay-200">
          Unlock the power of artificial intelligence to enhance your creativity, productivity, and problem-solving
          capabilities.
        </p>
        <div className="animate-fade-in-down animation-delay-400">
          <Link href="/toolbox">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
