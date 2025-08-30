"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load the WelcomeAnimation component
const WelcomeAnimation = dynamic(() => import("./welcome-animation").then(mod => ({ default: mod.WelcomeAnimation })), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
          欢迎进入炁灵世界
        </h1>
        <div className="relative max-w-md mx-auto">
          <img
            src="/images/qi-ling-hero.png"
            alt="炁灵 - 故事主人公"
            className="w-full h-auto rounded-lg shadow-2xl glow"
          />
        </div>
      </div>
    </div>
  ),
})

interface LazyWelcomeAnimationProps {
  onComplete: () => void
}

export function LazyWelcomeAnimation({ onComplete }: LazyWelcomeAnimationProps) {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            欢迎进入炁灵世界
          </h1>
          <div className="relative max-w-md mx-auto">
            <img
              src="/images/qi-ling-hero.png"
              alt="炁灵 - 故事主人公"
              className="w-full h-auto rounded-lg shadow-2xl glow"
            />
          </div>
        </div>
      </div>
    }>
      <WelcomeAnimation onComplete={onComplete} />
    </Suspense>
  )
}
