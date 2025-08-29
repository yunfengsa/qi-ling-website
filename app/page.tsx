import { Navigation } from "@/components/navigation"
import { ChaptersSection } from "@/components/chapters-section"
import { CharacterSection } from "@/components/character-section"
import { WorldSection } from "@/components/world-section"
import { Footer } from "@/components/footer"
import { ClientWrapper } from "@/components/client-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ClientWrapper>
        <ChaptersSection />
        <CharacterSection />
        <WorldSection />
        <Footer />
      </ClientWrapper>
    </main>
  )
}
