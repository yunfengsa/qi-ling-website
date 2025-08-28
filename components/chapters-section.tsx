import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Calendar } from "lucide-react"
import Link from "next/link"

const chapters = [
  {
    id: 1,
    title: "觉醒",
    description: "在霓虹闪烁的都市夜晚，炁灵第一次感受到体内涌动的神秘力量...",
    publishDate: "2024-01-15",
    readTime: "25分钟",
    views: 12500,
    isNew: true,
  },
  {
    id: 2,
    title: "初次交锋",
    description: "面对突然出现的敌人，炁灵必须学会控制自己的能力才能生存...",
    publishDate: "2024-01-22",
    readTime: "28分钟",
    views: 10800,
    isNew: true,
  },
  {
    id: 3,
    title: "隐藏的真相",
    description: "关于自己身世的秘密逐渐浮出水面，但真相比想象中更加复杂...",
    publishDate: "2024-01-29",
    readTime: "30分钟",
    views: 9200,
    isNew: false,
  },
  {
    id: 4,
    title: "联盟与背叛",
    description: "新的盟友出现，但在这个充满欺骗的世界里，谁才是真正可以信任的？",
    publishDate: "2024-02-05",
    readTime: "32分钟",
    views: 8600,
    isNew: false,
  },
]

export function ChaptersSection() {
  return (
    <section id="chapters" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">章节列表</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            跟随炁灵的冒险旅程，每周更新最新章节
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {chapters.map((chapter) => (
            <Card
              key={chapter.id}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={chapter.isNew ? "default" : "secondary"}
                    className={chapter.isNew ? "bg-secondary text-secondary-foreground" : ""}
                  >
                    {chapter.isNew ? "最新" : `第${chapter.id}章`}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="w-4 h-4 mr-1" />
                    {chapter.views.toLocaleString()}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  第{chapter.id}章：{chapter.title}
                </CardTitle>
                <CardDescription className="text-pretty">{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {chapter.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {chapter.readTime}
                  </div>
                </div>
                <Link href={`/chapter/${chapter.id}`}>
                  <Button className="w-full group-hover:glow">开始阅读</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            查看所有章节
          </Button>
        </div>
      </div>
    </section>
  )
}
