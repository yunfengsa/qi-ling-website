import { NextResponse } from "next/server"

// 章节数据 - 实际项目中应该从数据库获取
const chapters = [
  {
    id: 1,
    title: "觉醒",
    description: "在霓虹闪烁的都市夜晚，一个普通女孩发现了自己体内隐藏的神秘力量...",
    publishDate: "2024-01-15",
    content: "在2087年的新上海，霓虹灯如血管般蔓延在摩天大楼的表面...",
  },
  {
    id: 2,
    title: "初试锋芒",
    description: "炁灵开始学会控制自己的能力，但城市中出现了更多拥有超能力的人...",
    publishDate: "2024-01-22",
    content: "一周过去了，炁灵已经能够基本控制体内的能量流动...",
  },
  {
    id: 3,
    title: "暗流涌动",
    description: "神秘组织开始关注炁灵，而她也发现了这座城市隐藏的秘密...",
    publishDate: "2024-01-29",
    content: "深夜的实验室里，几个身穿白大褂的研究员正在讨论着什么...",
  },
  {
    id: 4,
    title: "真相浮现",
    description: "炁灵终于明白了自己力量的来源，以及她在这个世界中的使命...",
    publishDate: "2024-02-05",
    content: "当炁灵站在城市的最高点俯瞰这座钢铁森林时...",
  },
]

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
