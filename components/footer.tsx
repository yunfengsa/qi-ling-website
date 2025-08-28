import { Zap, Rss } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-primary glow" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                炁灵
              </span>
            </div>
            <p className="text-muted-foreground text-pretty mb-6 max-w-md">
              在霓虹闪烁的未来都市中，跟随炁灵探索超能力觉醒的科幻世界。每周更新，精彩不断。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#chapters" className="text-muted-foreground hover:text-primary transition-colors">
                  章节列表
                </a>
              </li>
              <li>
                <a href="#characters" className="text-muted-foreground hover:text-primary transition-colors">
                  角色介绍
                </a>
              </li>
              <li>
                <a href="#world" className="text-muted-foreground hover:text-primary transition-colors">
                  世界观
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">订阅更新</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">通过RSS订阅获取最新章节更新</p>
              <a
                href="/api/rss"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-primary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Rss className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-sm font-medium">RSS订阅</span>
              </a>
              <p className="text-xs text-muted-foreground">复制链接到你的RSS阅读器中</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 炁灵连载小说. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
