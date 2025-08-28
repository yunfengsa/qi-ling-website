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

          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl glow">
              <video autoPlay muted loop playsInline className="w-full h-auto" poster="/images/qi-ling-hero.png">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%81%E7%81%B5%E5%87%BA%E5%9C%BA-uXrG0E8V1w9v28QItZnz2pMFuBwmGj.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">炁灵向你问好</p>
          </div>

          {/* Protagonist image - moved below video as fallback */}
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
