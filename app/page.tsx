import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ChaptersSection } from "@/components/chapters-section"
import { CharacterSection } from "@/components/character-section"
import { WorldSection } from "@/components/world-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChaptersSection />
      <CharacterSection />
      <WorldSection />
      <Footer />
    </main>
  )
}
