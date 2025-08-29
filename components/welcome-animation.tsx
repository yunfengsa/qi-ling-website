"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WelcomeAnimationProps {
  onComplete: () => void
}

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    // Start the animation sequence after a brief delay
    const timer = setTimeout(() => {
      setShowWelcome(false)
      // Complete the animation after transition
      setTimeout(onComplete, 1500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Welcome content */}
          <div className="relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.3, y: -200 }}
              transition={{
                duration: 1.5,
                exit: { duration: 1.5, ease: "easeInOut" },
              }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                欢迎进入炁灵世界
              </motion.h1>

              <motion.div
                className="relative max-w-md mx-auto"
                initial={{ scale: 1 }}
                exit={{
                  scale: 0.4,
                  x: 0,
                  y: 100,
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg glow"></div>
                <img
                  src="/images/qi-ling-hero.png"
                  alt="炁灵 - 故事主人公"
                  className="w-full h-auto rounded-lg shadow-2xl glow"
                />
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                准备好开始这段科幻之旅了吗？
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
