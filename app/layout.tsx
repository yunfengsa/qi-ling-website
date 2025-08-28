import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "炁灵 - 科幻连载小说",
  description: "探索未来都市中的超能力觉醒故事，跟随炁灵的冒险旅程",
  generator: "v0.app",
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/api/rss", title: "炁灵 - 科幻连载小说 RSS订阅" }],
    },
  },
  openGraph: {
    title: "炁灵 - 科幻连载小说",
    description: "探索未来都市中的超能力觉醒故事，跟随炁灵的冒险旅程",
    type: "website",
    locale: "zh_CN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} dark`}>{children}</body>
    </html>
  )
}
