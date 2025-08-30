import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Eye, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { chapters } from "@/lib/chapters"

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = Number.parseInt(params.id)
  const chapter = chapters.find((c) => c.id === chapterId)

  if (!chapter) {
    notFound()
  }

  const prevChapter = chapters.find((c) => c.id === chapterId - 1)
  const nextChapter = chapters.find((c) => c.id === chapterId + 1)

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#chapters">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回章节列表
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              第{chapter.id}章 / 共{chapters.length}章
            </div>
          </div>
        </div>
      </nav>

      {/* 章节内容 */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 章节头部信息 */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant={chapter.isNew ? "default" : "secondary"}>
              {chapter.isNew ? "最新" : `第${chapter.id}章`}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            第{chapter.id}章：{chapter.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">{chapter.description}</p>

          {/* 章节元信息 */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {chapter.publishDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {chapter.readTime}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {chapter.views.toLocaleString()} 阅读
            </div>
          </div>
        </header>

        {/* 章节视频展示区域 */}
        {chapter.videoUrl && (
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden bg-card/30 border border-border/50 p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">章节精彩片段</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  controls
                  poster="/images/qi-ling-hero.png"
                  preload="metadata"
                >
                  <source src={chapter.videoUrl} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                {chapter.id === 1 && "观看炁灵觉醒超能力，初探未来都市的精彩瞬间"}
                {chapter.id === 2 && "观看炁灵初战暗影军团，掌控能量力量的激烈战斗"}
                {chapter.id === 3 && "观看炁灵传承揭秘，了解身世真相与坚定决心的关键时刻"}
                {chapter.id === 4 && "观看炁灵绝境寻友，誓建新队的关键转折时刻"}
                {chapter.id > 4 && "观看本章节的精彩视频内容"}
              </p>
            </div>
          </div>
        )}

        {/* 章节正文 */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-card/30 rounded-lg p-8 border border-border/50">
            {chapter.content.split("\n\n").map(
              (paragraph, index) =>
                paragraph.trim() && (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-pretty">
                    {paragraph.trim()}
                  </p>
                ),
            )}
          </div>
        </div>

        {/* 章节导航 */}
        <nav className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between">
            {prevChapter ? (
              <Link href={`/chapter/${prevChapter.id}`}>
                <Button variant="outline" className="group bg-transparent">
                  <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  上一章：{prevChapter.title}
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextChapter ? (
              <Link href={`/chapter/${nextChapter.id}`}>
                <Button className="group">
                  下一章：{nextChapter.title}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </nav>
      </article>
    </div>
  )
}
