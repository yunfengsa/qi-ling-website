"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-border">
          <div className="flex flex-col space-y-4">
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
        </div>
      )}
    </>
  )
}
