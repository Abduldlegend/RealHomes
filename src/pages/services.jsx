import { motion } from "framer-motion"
import {
  Building2, HardHat, ClipboardCheck, TrendingUp, PieChart, Lightbulb,
  ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom"
import { Section, SectionHeader } from "../components/shared/section"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { SEO } from "../components/shared/seo"
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations"
import { services } from "../data/projects"

const iconMap = {
  Building2, HardHat, ClipboardCheck, TrendingUp, PieChart, Lightbulb,
}

const processSteps = [
  { step: "01", title: "Discovery", description: "We begin by understanding your vision, goals, and requirements through in-depth consultation." },
  { step: "02", title: "Planning", description: "Our team develops comprehensive strategies, feasibility studies, and detailed project plans." },
  { step: "03", title: "Design", description: "World-class architects and engineers create innovative designs that exceed expectations." },
  { step: "04", title: "Execution", description: "We deliver with precision, managing every aspect of construction and project delivery." },
  { step: "05", title: "Handover", description: "Seamless transition with ongoing support, asset management, and aftercare services." },
]

export default function Services() {
  return (
    <>
      <SEO title="Our Services" path="/services" />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Our
              <span className="block text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Comprehensive real estate and development services delivered with world-class standards and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <Section>
        <SectionHeader
          title="What We Offer"
          description="End-to-end solutions covering every aspect of real estate development and investment."
        />
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={service.title} {...staggerItem}>
                <Card className="p-8 h-full hover:shadow-md group">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-3">{service.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Process */}
      <Section dark>
        <SectionHeader
          title="Our Process"
          description="A proven methodology that ensures successful project delivery every time."
        />
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:block flex-1">
                  <div className={`${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <span className="text-5xl font-bold text-primary/20">{step.step}</span>
                    <h3 className="text-xl font-semibold text-heading mt-2">{step.title}</h3>
                    <p className="text-sm text-body mt-2">{step.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                </div>
                <div className="flex-1 lg:hidden">
                  <span className="text-sm font-semibold text-primary">{step.step}</span>
                  <h3 className="text-lg font-semibold text-heading mt-1">{step.title}</h3>
                  <p className="text-sm text-body mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          {...fadeInUp}
          className="rounded-2xl bg-primary p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
            Let our team of experts help you bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
