import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const characters = [
  {
    name: "炁灵",
    role: "主人公",
    description: "拥有操控电能的神秘少女，在都市的霓虹灯下觉醒了超凡的力量。她必须在保护自己和拯救世界之间找到平衡。",
    abilities: ["电能操控", "能量护盾", "超感知"],
    image: "/images/qi-ling-hero.png",
  },
  {
    name: "陈博士",
    role: "导师",
    description: "神秘的科学家，似乎对炁灵的能力了如指掌。他的真实身份和动机仍然是个谜。",
    abilities: ["科技专精", "战术分析", "隐秘行动"],
    image: "/mysterious-scientist-in-futuristic-lab-coat.png",
  },
  {
    name: "暗影",
    role: "反派",
    description: "来自地下组织的神秘敌人，拥有操控暗能量的能力。他的目标是获得炁灵的力量。",
    abilities: ["暗能量", "隐身术", "心灵操控"],
    image: "/dark-hooded-figure-with-shadow-powers.png",
  },
]

export function CharacterSection() {
  return (
    <section id="character-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">角色介绍</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">认识这个科幻世界中的关键人物</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <Card
              key={character.name}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4 w-48 h-48 rounded-lg overflow-hidden">
                  <img
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                <Badge variant={index === 0 ? "default" : index === 1 ? "secondary" : "destructive"} className="mb-2">
                  {character.role}
                </Badge>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{character.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty mb-4">{character.description}</CardDescription>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">特殊能力：</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.abilities.map((ability) => (
                      <Badge key={ability} variant="outline" className="text-xs">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
