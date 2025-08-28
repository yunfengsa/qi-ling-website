import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Zap, Shield, Users } from "lucide-react"

const worldElements = [
  {
    icon: Building2,
    title: "新东京2087",
    description:
      "高耸入云的摩天大楼，霓虹灯照亮的街道，这座未来都市隐藏着无数秘密。科技与传统在这里交融，创造出独特的赛博朋克氛围。",
  },
  {
    icon: Zap,
    title: "超能力觉醒",
    description: "在这个世界里，少数人类开始觉醒超自然能力。政府试图控制这些'觉醒者'，而地下组织则在暗中活动。",
  },
  {
    icon: Shield,
    title: "科技与魔法",
    description:
      "先进的科技与神秘的能量相互碰撞，创造出前所未有的可能性。纳米技术、人工智能与超能力共存于这个复杂的世界。",
  },
  {
    icon: Users,
    title: "派系斗争",
    description:
      "政府机构、企业财团、地下组织和觉醒者团体之间的复杂关系，构成了这个世界的政治格局。每个派系都有自己的议程。",
  },
]

export function WorldSection() {
  return (
    <section id="world" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">世界观设定</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            探索炁灵所生活的赛博朋克未来世界
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {worldElements.map((element, index) => {
            const Icon = element.icon
            return (
              <Card
                key={element.title}
                className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {element.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{element.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
