import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

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
      <body className="font-sans dark">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
