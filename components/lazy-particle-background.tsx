"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load the ParticleBackground component
const ParticleBackground = dynamic(() => import("./particle-background").then(mod => ({ default: mod.ParticleBackground })), {
  ssr: false,
  loading: () => null, // No loading indicator as this is purely decorative
})

export function LazyParticleBackground() {
  return (
    <Suspense fallback={null}>
      <ParticleBackground />
    </Suspense>
  )
}
