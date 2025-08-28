import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Eye, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// 章节数据 - 在实际应用中这些数据会来自数据库
const chapters = [
  {
    id: 1,
    title: "觉醒",
    description: "在霓虹闪烁的都市夜晚，炁灵第一次感受到体内涌动的神秘力量...",
    publishDate: "2024-01-15",
    readTime: "15分钟",
    views: 12500,
    isNew: true,
    content: `
      夜幕降临，霓虹灯开始在这座钢铁森林中闪烁。高楼大厦如同巨兽般矗立在城市的每一个角落，而在这些建筑的缝隙中，隐藏着无数不为人知的秘密。

      炁灵站在天台的边缘，俯视着脚下车水马龙的街道。她的长发在夜风中飞舞，红色的发丝在霓虹灯的照射下显得格外醒目。胸前的能量核心正发出微弱的蓝光，这是她体内力量觉醒的征象。

      "这种感觉...是什么？"她轻抚着胸前的能量核心，感受着体内涌动的神秘力量。这股力量既熟悉又陌生，仿佛一直潜伏在她的血脉深处，直到今夜才真正苏醒。

      突然，远处传来一声巨响。炁灵转身望去，只见一栋摩天大楼的顶层正冒着浓烟，橙红色的火光映红了半边天空。她的直觉告诉她，这不是普通的事故。

      "看来，我的新生活要开始了。"炁灵深吸一口气，背后的能量翅膀缓缓展开，发出耀眼的红光。她纵身一跃，如流星般划过夜空，朝着事故现场飞去。

      这是她作为炁灵的第一次行动，也是她踏入这个充满危险和未知世界的第一步。在这个科技与超能力并存的时代，她将面临怎样的挑战？又会遇到怎样的敌人和盟友？

      一切，都从这个夜晚开始...
    `,
  },
  {
    id: 2,
    title: "初次交锋",
    description: "面对突然出现的敌人，炁灵必须学会控制自己的能力才能生存...",
    publishDate: "2024-01-22",
    readTime: "18分钟",
    views: 10800,
    isNew: true,
    content: `
      火光冲天的摩天大楼前，炁灵缓缓降落在空旷的广场上。她的能量翅膀收起，但胸前的核心依然闪烁着蓝光。周围的人群早已疏散，只留下消防车和救护车的警笛声在夜空中回荡。

      "你来得比我预期的要快。"一个低沉的声音从阴影中传来。

      炁灵警觉地转身，只见一个身穿黑色战甲的身影从大楼的阴影中走出。他的面具上闪烁着红色的光芒，手中握着一把散发着暗紫色能量的武器。

      "你是谁？这场火灾是你造成的？"炁灵质问道，体内的力量开始涌动。

      "我是暗影军团的先锋，代号'虚无'。至于这场火灾..."他冷笑一声，"只是为了引你出来的小把戏而已。"

      话音刚落，虚无突然消失在原地，下一秒就出现在炁灵身后，暗紫色的能量刃直刺她的后心。

      炁灵凭借本能侧身闪避，能量刃擦着她的肩膀划过，在地面上留下一道深深的沟壑。她迅速转身，双手凝聚出蓝色的能量球，朝着虚无发射而去。

      "反应不错，但还不够！"虚无轻松闪避，身形如鬼魅般在炁灵周围游走，不断发起攻击。

      炁灵发现自己完全跟不上对方的速度，每次攻击都被轻易化解。她意识到，仅凭本能是无法战胜这个敌人的，她必须学会真正控制自己的力量。

      "集中精神...感受力量的流动..."炁灵闭上眼睛，深呼吸，试图与体内的能量建立更深层的连接。

      就在这时，虚无的攻击再次袭来。但这一次，炁灵没有睁开眼睛，而是凭借着对能量的感知，精准地抓住了虚无的手腕。

      "什么？！"虚无震惊地发现自己无法挣脱。

      炁灵睁开眼睛，此时她的双眼正闪烁着蓝色的光芒。"现在，轮到我了。"

      她的背后再次展开能量翅膀，但这次的光芒更加耀眼，更加稳定。一股强大的能量波从她体内爆发而出，将虚无震飞数十米远。

      虚无艰难地从废墟中爬起，看向炁灵的眼神中多了几分忌惮。"有趣...看来你比我们想象的更有潜力。但这只是开始，炁灵。很快，你就会知道真正的战争是什么样的。"

      说完，他的身影逐渐变得透明，最终消失在夜色中。

      炁灵站在原地，感受着体内平静下来的力量。她知道，这只是一个开始。在这个充满危险的世界里，还有更多的挑战在等待着她。

      但她已经不再是那个对自己力量一无所知的少女了。她是炁灵，她将用自己的力量保护这座城市，保护那些无辜的人们。
    `,
  },
  {
    id: 3,
    title: "隐藏的真相",
    description: "关于自己身世的秘密逐渐浮出水面，但真相比想象中更加复杂...",
    publishDate: "2024-01-29",
    readTime: "20分钟",
    views: 9200,
    isNew: false,
    content: "第三章内容正在创作中，敬请期待...",
  },
  {
    id: 4,
    title: "联盟与背叛",
    description: "新的盟友出现，但在这个充满欺骗的世界里，谁才是真正可以信任的？",
    publishDate: "2024-02-05",
    readTime: "22分钟",
    views: 8600,
    isNew: false,
    content: "第四章内容正在创作中，敬请期待...",
  },
]

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
