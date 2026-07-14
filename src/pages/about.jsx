import { motion } from "framer-motion"
import { Target, Eye, Heart, Award, Users, Globe, Shield } from "lucide-react"
import { Section, SectionHeader } from "../components/shared/section"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations"
import { team, milestones } from "../data/projects"
import { STATS } from "../lib/constants"
import { Counter } from "../components/shared/counter"

const values = [
  { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards in every interaction and decision." },
  { icon: Award, title: "Excellence", description: "We pursue perfection in every project, no matter the scale." },
  { icon: Users, title: "People First", description: "Our employees, partners, and communities are at the heart of everything we do." },
  { icon: Globe, title: "Sustainability", description: "We build responsibly for future generations with green practices." },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" path="/about" />
      <JsonLd type="Organization" />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
            alt="Modern office building"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Our Story of
              <span className="block text-primary">Excellence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              For over two decades, Real Homes has been at the forefront of real estate development, transforming skylines and creating communities that stand the test of time.
            </p>
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

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
              From Vision to Reality
            </h2>
            <div className="mt-6 space-y-4 text-body leading-relaxed">
              <p>
                Founded in 2000, Real Homes began with a simple vision: to transform urban development in Africa by bringing world-class standards to every project.
              </p>
              <p>
                What started as a small residential development company in Abuja has grown into a multinational real estate powerhouse with a portfolio exceeding $12 billion and operations across Nigeria and the United Arab Emirates.
              </p>
              <p>
                Today, we are recognized as one of the leading real estate developers in Africa, known for our commitment to quality, innovation, and sustainable development practices.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
              alt="Modern architecture"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section dark>
        <SectionHeader
          title="What Drives Us"
          description="Our mission, vision, and values guide every decision we make and every project we undertake."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To create exceptional living and working spaces that enrich communities, drive economic growth, and set new standards for quality and sustainability.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "To be Africa's most respected real estate developer, known for transforming cities and improving lives through innovative, sustainable development.",
            },
            {
              icon: Heart,
              title: "Our Purpose",
              description: "Building more than structures — we build communities, create opportunities, and leave a lasting positive impact on every city we touch.",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...staggerItem} className="text-center p-8">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <SectionHeader title="Our Core Values" />
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} {...staggerItem} className="text-center p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-semibold text-heading mb-2">{value.title}</h3>
                <p className="text-sm text-body leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Leadership */}
      <Section>
        <SectionHeader
          title="Leadership Team"
          description="Meet the experienced professionals driving our vision forward."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-muted-surface">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-heading">{member.name}</h3>
              <p className="text-sm text-primary mt-0.5">{member.role}</p>
              <p className="text-sm text-body mt-2 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section dark>
        <SectionHeader
          title="Our Journey"
          description="Key milestones that have shaped our story."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`hidden md:block ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-heading mt-1">{milestone.title}</h3>
                    <p className="text-sm text-body mt-1">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                </div>
                <div className="flex-1 md:hidden">
                  <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-heading mt-1">{milestone.title}</h3>
                  <p className="text-sm text-body mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
