import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Wallet, Heart, Clock, BookOpen, Calendar, Shield, Dumbbell, Plane,
  MapPin, Briefcase, Clock as ClockIcon, Upload, Send
} from "lucide-react"
import { Section, SectionHeader } from "../components/shared/section"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations"
import { applicationFormSchema } from "../lib/validations"
import { jobs, benefits, team } from "../data/projects"

const iconMap = { Wallet, Heart, Clock, BookOpen, Calendar, Shield, Dumbbell, Plane }

const departments = ["All", "Projects", "Finance", "Design", "Marketing", "Sustainability"]
const locations = ["All", "Abuja", "Lagos", "Dubai"]
const jobTypes = ["All", "Full-time", "Contract"]

export default function Careers() {
  const [deptFilter, setDeptFilter] = useState("All")
  const [locFilter, setLocFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")

  const filteredJobs = jobs.filter((job) => {
    return (deptFilter === "All" || job.department === deptFilter) &&
      (locFilter === "All" || job.location === locFilter) &&
      (typeFilter === "All" || job.type === typeFilter)
  })

  return (
    <>
      <SEO title="Careers" path="/careers" />
      <JsonLd type="Organization" />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Team collaboration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Join Our<span className="block text-primary">Team</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Build a rewarding career with Africa&apos;s leading real estate developer. We&apos;re looking for talented individuals who share our passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <Section>
        <SectionHeader title="Life at Real Homes" description="We foster a culture of excellence, innovation, and collaboration." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-border">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <p className="text-sm text-body italic">&ldquo;Real Homes has given me the opportunity to work on projects that truly shape communities.&rdquo;</p>
              <p className="text-sm font-semibold text-heading mt-3">{member.name}</p>
              <p className="text-xs text-muted">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section dark>
        <SectionHeader title="Why Join Us?" description="We offer competitive benefits and a work environment that brings out the best in you." />
        <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon]
            return (
              <motion.div key={benefit.title} {...staggerItem}>
                <Card className="p-5 text-center h-full hover:shadow-md">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="text-sm font-semibold text-heading">{benefit.title}</h3>
                  <p className="text-xs text-muted mt-1">{benefit.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Job Listings */}
      <Section>
        <SectionHeader title="Open Positions" description="Explore current opportunities across our departments." />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map((d) => (
            <button key={d} onClick={() => setDeptFilter(d)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                deptFilter === d ? "bg-primary text-white" : "bg-muted-surface text-body hover:text-heading"
              }`}>{d}</button>
          ))}
          <span className="w-px h-6 bg-border self-center mx-1 hidden sm:block" />
          {locations.map((l) => (
            <button key={l} onClick={() => setLocFilter(l)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                locFilter === l ? "bg-primary text-white" : "bg-muted-surface text-body hover:text-heading"
              }`}>{l}</button>
          ))}
          <span className="w-px h-6 bg-border self-center mx-1 hidden sm:block" />
          {jobTypes.map((t) => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                typeFilter === t ? "bg-primary text-white" : "bg-muted-surface text-body hover:text-heading"
              }`}>{t}</button>
          ))}
        </div>

        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="p-6 hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-heading">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-sm text-muted"><Briefcase size={14} />{job.department}</span>
                        <span className="flex items-center gap-1 text-sm text-muted"><MapPin size={14} />{job.location}</span>
                        <span className="flex items-center gap-1 text-sm text-muted"><ClockIcon size={14} />{job.type}</span>
                      </div>
                      <p className="mt-2 text-sm text-body">{job.description}</p>
                    </div>
                    <Button className="shrink-0" size="sm">Apply Now</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted">No positions match your filters.</p>
            <Button variant="secondary" className="mt-4" onClick={() => { setDeptFilter("All"); setLocFilter("All"); setTypeFilter("All") }}>
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Application Form */}
      <Section dark>
        <SectionHeader title="Apply Now" description="Ready to join us? Submit your application and we'll be in touch." />
        <ApplicationForm />
      </Section>
    </>
  )
}

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(applicationFormSchema),
  })

  const onSubmit = async (_data) => {
    await new Promise((r) => setTimeout(r, 1500))
    toast.success("Application submitted successfully! We'll be in touch.")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} placeholder="John" />
          {errors.firstName && <p className="text-sm text-danger mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} placeholder="Doe" />
          {errors.lastName && <p className="text-sm text-danger mt-1">{errors.lastName.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
          {errors.email && <p className="text-sm text-danger mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} placeholder="+234 800 000 0000" />
          {errors.phone && <p className="text-sm text-danger mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="position">Position</Label>
          <select id="position" {...register("position")} className="flex h-12 w-full rounded-md border border-border bg-background px-4 py-2 text-sm text-heading">
            <option value="">Select a position</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
          {errors.position && <p className="text-sm text-danger mt-1">{errors.position.message}</p>}
        </div>
        <div>
          <Label htmlFor="linkedIn">LinkedIn URL (optional)</Label>
          <Input id="linkedIn" {...register("linkedIn")} placeholder="https://linkedin.com/in/..." />
          {errors.linkedIn && <p className="text-sm text-danger mt-1">{errors.linkedIn.message}</p>}
        </div>
      </div>
      <div className="mt-6">
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea id="coverLetter" {...register("coverLetter")} placeholder="Tell us why you'd be a great fit at Real Homes..." />
        {errors.coverLetter && <p className="text-sm text-danger mt-1">{errors.coverLetter.message}</p>}
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <input type="file" id="resume" className="text-sm text-body file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
          <Upload size={16} className="text-muted" />
        </div>
        <p className="text-xs text-muted mt-1">Accepted formats: PDF, DOCX (Max 10MB)</p>
      </div>
      <div className="mt-6 flex items-start gap-3">
        <input type="checkbox" id="agreeToTerms" {...register("agreeToTerms")} className="mt-1 h-4 w-4 rounded border-border text-primary" />
        <Label htmlFor="agreeToTerms" className="text-sm text-body">I agree to the terms and privacy policy</Label>
      </div>
      {errors.agreeToTerms && <p className="text-sm text-danger mt-1">{errors.agreeToTerms.message}</p>}
      <Button type="submit" size="lg" className="mt-8 w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Submitting...</>
        ) : (
          <>
            Submit Application
            <Send size={16} />
          </>
        )}
      </Button>
    </form>
  )
}
