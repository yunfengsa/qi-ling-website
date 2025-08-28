"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with city lights effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full pulse-glow"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full pulse-glow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full pulse-glow"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 text-primary border-primary glow">
            科幻连载小说
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
              炁灵
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            在霓虹闪烁的未来都市中，一个拥有神秘能力的少女将改变世界的命运
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/chapter/1">
              <Button size="lg" className="glow">
                开始阅读
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              onClick={() => {
                const characterSection = document.getElementById("character-section")
                characterSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              角色介绍
            </Button>
          </div>

          {/* Protagonist image */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            <img
              src="/images/qi-ling-hero.png"
              alt="炁灵 - 故事主人公"
              className="w-full h-auto rounded-lg shadow-2xl glow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
