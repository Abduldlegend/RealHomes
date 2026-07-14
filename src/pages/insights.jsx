import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Clock, User, ArrowRight, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Section } from "../components/shared/section"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp } from "../lib/animations"
import { formatDate } from "../lib/utils"
import { insights } from "../data/projects"

const categories = ["All", "Market Trends", "Sustainability", "Leadership", "Projects"]

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(4)

  const featured = insights[0]

  const filtered = insights.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const visibleArticles = filtered.slice(0, visibleCount)

  return (
    <>
      <SEO title="Insights" path="/insights" />
      <JsonLd type="ItemList" data={{ items: insights, itemType: "Article" }} />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80" alt="Library" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Insights &<span className="block text-primary">Thought Leadership</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Expert perspectives on real estate development, market trends, sustainability, and industry innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <Section className="pb-0">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11"
          />
        </div>
      </Section>

      {/* Featured */}
      <Section>
        <motion.div {...fadeInUp}>
          <Card className="overflow-hidden hover:shadow-md">
            <Link to="#" className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">{featured.category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-heading leading-tight">{featured.title}</h2>
                <p className="mt-4 text-body leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime}</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <div className="mt-6">
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read Article <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </Link>
          </Card>
        </motion.div>
      </Section>

      {/* Articles */}
      <Section dark>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setVisibleCount(4) }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted-surface text-body hover:text-heading"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleArticles.map((article, index) => (
                <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Card className="overflow-hidden hover:shadow-md group h-full">
                    <Link to="#" className="block h-full">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{article.category}</Badge>
                          <span className="text-xs text-muted">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">{article.title}</h3>
                        <p className="mt-2 text-sm text-body line-clamp-2">{article.excerpt}</p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                          <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="mt-12 text-center">
                <Button variant="secondary" onClick={() => setVisibleCount(visibleCount + 4)}>
                  Load More Articles
                  <ChevronRight size={18} />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted">No articles found matching your criteria.</p>
            <Button variant="secondary" className="mt-4" onClick={() => { setActiveCategory("All"); setSearchQuery(""); setVisibleCount(4) }}>
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Newsletter */}
      <Section>
        <motion.div {...fadeInUp} className="rounded-2xl bg-primary p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Informed</h2>
          <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest insights, market reports, and company news.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90 shrink-0">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </Section>
    </>
  )
}
