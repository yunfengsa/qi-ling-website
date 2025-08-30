import { chapters } from "@/lib/chapters"
import { NextResponse } from "next/server"

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qi-ling-novel.vercel.app"

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>炁灵 - 科幻连载小说</title>
    <description>在现代化都市中展开的科幻故事，跟随主人公炁灵探索神秘力量与城市秘密</description>
    <link>${siteUrl}</link>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/images/qi-ling-hero.png</url>
      <title>炁灵</title>
      <link>${siteUrl}</link>
    </image>
    ${chapters
      .map(
        (chapter) => `
    <item>
      <title>第${chapter.id}章：${chapter.title}</title>
      <description><![CDATA[${chapter.description}]]></description>
      <link>${siteUrl}/chapter/${chapter.id}</link>
      <guid>${siteUrl}/chapter/${chapter.id}</guid>
      <pubDate>${new Date(chapter.publishDate).toUTCString()}</pubDate>
      <category>科幻小说</category>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
