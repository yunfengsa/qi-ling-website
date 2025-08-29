"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ChaptersSection } from "@/components/chapters-section"
import { CharacterSection } from "@/components/character-section"
import { WorldSection } from "@/components/world-section"
import { Footer } from "@/components/footer"
import { WelcomeAnimation } from "@/components/welcome-animation"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    setShowContent(true)
  }

  return (
    <main className="min-h-screen">
      {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}

      <Navigation />
      <HeroSection showContent={showContent} />
      <ChaptersSection />
      <CharacterSection />
      <WorldSection />
      <Footer />
    </main>
  )
}
