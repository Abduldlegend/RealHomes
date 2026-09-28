import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Building2, Users, Download, ArrowRight, Calendar, Shield, Leaf, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Section, SectionHeader } from "../components/shared/section"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp, staggerItem } from "../lib/animations"

const financialHighlights = [
  { icon: DollarSign, value: "$12.5B", label: "Portfolio Value", change: "+15%" },
  { icon: TrendingUp, value: "28%", label: "EBITDA Margin", change: "+3%"},
  { icon: Building2, value: "150+", label: "Projects Delivered", change: "+12" },
  { icon: Users, value: "5,000+", label: "Employees", change: "+20%" },
]

const reports = [
  { title: "Annual Report 2025", type: "Annual", date: "March 2026", size: "8.5 MB" },
  { title: "Q1 2026 Financial Results", type: "Quarterly", date: "April 2026", size: "3.2 MB" },
  { title: "Sustainability Report 2025", type: "ESG", date: "February 2026", size: "12 MB" },
  { title: "Corporate Governance Report", type: "Governance", date: "January 2026", size: "4.7 MB" },
  { title: "Q4 2025 Financial Results", type: "Quarterly", date: "January 2026", size: "3.1 MB" },
  { title: "Annual Report 2024", type: "Annual", date: "March 2025", size: "8.2 MB" },
]

const esgPillars = [
  { icon: Leaf, title: "Environmental", items: ["Carbon neutral operations", "30% renewable energy by 2028", "LEED Platinum certified projects", "Waste reduction program"] },
  { icon: Heart, title: "Social", items: ["5,000+ jobs created", "$2M community investment", "Affordable housing initiatives", "STEM education partnerships"] },
  { icon: Shield, title: "Governance", items: ["Independent board oversight", "ISO 37001 anti-bribery", "Whistleblower protection", "Regular ESG reporting"] },
]

const events = [
  { date: "Jul 28, 2026", title: "Q2 2026 Earnings Call", type: "Earnings" },
  { date: "Sep 15, 2026", title: "Annual General Meeting", type: "Corporate" },
  { date: "Oct 27, 2026", title: "Q3 2026 Earnings Call", type: "Earnings" },
  { date: "Dec 5, 2026", title: "Investor Day 2026", type: "Corporate" },
]

export default function Investors() {
  return (
    <>
      <SEO title="Investor Relations" path="/investors" />
      <JsonLd type="Organization" />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1920&q=80" alt="Financial district" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Investor
              <span className="block text-primary">Relations</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Building long-term value through strategic development, financial discipline, and sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
      <Section>
        <SectionHeader title="Financial Highlights" description="Key metrics demonstrating our financial strength and growth trajectory." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {financialHighlights.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.label} className="p-6 text-center hover:shadow-md">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <p className="text-3xl font-bold text-heading">{item.value}</p>
                <p className="text-sm text-muted mt-1">{item.label}</p>
                <Badge variant="success" className="mt-2">{item.change}</Badge>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Reports */}
      <Section dark>
        <SectionHeader title="Financial Reports" description="Access our latest financial disclosures and corporate reports." />
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted-surface">
                <th className="text-left p-4 text-sm font-semibold text-heading">Report</th>
                <th className="text-left p-4 text-sm font-semibold text-heading hidden md:table-cell">Type</th>
                <th className="text-left p-4 text-sm font-semibold text-heading hidden md:table-cell">Date</th>
                <th className="text-right p-4 text-sm font-semibold text-heading">Download</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.title} className="border-t border-border hover:bg-muted-surface/50 transition-colors">
                  <td className="p-4">
                    <p className="text-sm font-medium text-heading">{report.title}</p>
                    <p className="text-xs text-muted md:hidden mt-1">{report.type} &middot; {report.date}</p>
                  </td>
                  <td className="p-4 text-sm text-body hidden md:table-cell">
                    <Badge variant="secondary">{report.type}</Badge>
                  </td>
                  <td className="p-4 text-sm text-body hidden md:table-cell">{report.date}</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                      <span className="ml-1 hidden sm:inline">{report.size}</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ESG */}
      <Section>
        <SectionHeader title="Environmental, Social & Governance" description="Our commitment to responsible and sustainable business practices." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esgPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div key={pillar.title} {...staggerItem}>
                <Card className="p-8 h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-4">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-body">
                        {/* <CheckCircle size={16} className="mt-0.5 text-success shrink-0" /> */}
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Financial Calendar */}
      <Section dark>
        <SectionHeader title="Financial Calendar" description="Upcoming events and key dates for our investors." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event) => (
            <div key={event.title} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <Badge variant="secondary">{event.type}</Badge>
                <p className="text-sm font-medium text-heading mt-1">{event.title}</p>
                <p className="text-xs text-muted">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact IR */}
      <Section>
        <motion.div {...fadeInUp} className="rounded-2xl bg-primary p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Interested in Investing?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
            Our Investor Relations team is ready to assist with your inquiries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Investor Relations
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}

function CheckCircle(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
