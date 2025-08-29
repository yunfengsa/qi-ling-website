import { Zap } from "lucide-react"
import { MobileMenuToggle } from "./mobile-menu-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary glow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              炁灵
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              首页
            </a>
            <a href="#chapters" className="text-foreground hover:text-primary transition-colors">
              章节列表
            </a>
            <a href="#characters" className="text-foreground hover:text-primary transition-colors">
              角色介绍
            </a>
            <a href="#world" className="text-foreground hover:text-primary transition-colors">
              世界观
            </a>
          </div>

          <MobileMenuToggle />
        </div>
      </div>
    </nav>
  )
}
