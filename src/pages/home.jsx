import { motion } from "framer-motion"
import { ArrowRight, Building2, Shield, Globe, Users, HardHat, TrendingUp, Award, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Section, SectionHeader } from "../components/shared/section"
import { Counter } from "../components/shared/counter"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations"
import { STATS } from "../lib/constants"
import { projects, team } from "../data/projects"

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Built on a foundation of transparency, ethical practices, and unwavering commitment to our stakeholders.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every project reflects our dedication to the highest standards of quality, design, and craftsmanship.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Bringing world-class expertise and international best practices to every market we serve.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Creating spaces that enrich lives, foster connections, and build lasting communities.",
  },
]

export default function Home() {
  return (
    <>
      <SEO />
      <JsonLd type="Organization" />
      <JsonLd type="WebSite" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt="City skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 py-32">
          <motion.div {...fadeInUp} className="max-w-3xl text-center mx-auto">
            <Badge variant="secondary" className="mb-6 mx-auto">Est. 2000</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-[1.1] tracking-tight">
              Building Tomorrow&apos;s
              <span className="block text-primary">Communities</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-body leading-relaxed max-w-xl mx-auto">
              A world-class real estate development company creating exceptional spaces that redefine urban living across Africa and the Middle East.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/projects">
                  Explore Our Projects
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section dark>
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
        >
          {STATS.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Section>

      {/* Value Propositions */}
      <Section>
        <SectionHeader
          title="Why Real Homes"
          description="We bring together decades of expertise, financial strength, and a relentless commitment to quality."
        />
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} {...staggerItem}>
                <Card className="p-8 h-full hover:shadow-md group">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{value.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section dark>
        <SectionHeader
          title="Featured Projects"
          description="Discover our portfolio of landmark developments that define skylines and transform communities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to="/projects" className="group block">
                <Card className="overflow-hidden hover:shadow-md">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant={project.status === "Completed" ? "success" : "warning"}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-body">{project.location}</p>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{project.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ChevronRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* Services Preview */}
      <Section>
        <SectionHeader
          title="Our Expertise"
          description="Comprehensive real estate and development services delivered with world-class standards."
        />
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: HardHat, title: "Development", desc: "End-to-end property development from concept to delivery." },
            { icon: TrendingUp, title: "Investment", desc: "Strategic real estate investment solutions for maximum returns." },
            { icon: Building2, title: "Construction", desc: "World-class construction management for projects of any scale." },
          ].map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} {...staggerItem}>
                <Card className="p-8 h-full hover:shadow-md group">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{service.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{service.desc}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ChevronRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* Leadership Preview */}
      <Section dark>
        <SectionHeader
          title="Leadership"
          description="Our executive team brings decades of combined experience in real estate, finance, and construction."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-border">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-heading">{member.name}</h3>
              <p className="text-sm text-primary mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/about">
              Meet Our Team
              <ChevronRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          {...fadeInUp}
          className="rounded-2xl bg-primary p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let&apos;s Build Something Extraordinary Together
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
            Partner with us for your next development project. From concept to completion, we deliver excellence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/investors">Investor Relations</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
