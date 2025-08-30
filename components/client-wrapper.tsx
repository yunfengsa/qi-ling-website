"use client"

import { useState } from "react"
import { LazyWelcomeAnimation } from "./lazy-welcome-animation"
import { HeroSection } from "./hero-section"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    setShowContent(true)
  }

  return (
    <>
      {showWelcome && <LazyWelcomeAnimation onComplete={handleWelcomeComplete} />}
      <HeroSection showContent={showContent} />
      {children}
    </>
  )
}
