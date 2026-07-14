import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"
import { Section, SectionHeader } from "../components/shared/section"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations"
import { contactFormSchema } from "../lib/validations"
import { OFFICES } from "../lib/constants"
import { faqs } from "../data/projects"

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (_data) => {
    await new Promise((r) => setTimeout(r, 1500))
    toast.success("Message sent successfully! We'll get back to you shortly.")
    reset()
  }

  return (
    <>
      <SEO title="Contact Us" path="/contact" />
      <JsonLd type="Organization" />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Modern building" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Get in<span className="block text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Have a question, project idea, or investment inquiry? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Offices */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold text-heading mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...register("name")} placeholder="John Doe" />
                  {errors.name && <p className="text-sm text-danger mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
                  {errors.email && <p className="text-sm text-danger mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" {...register("phone")} placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" {...register("company")} placeholder="Your company" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" {...register("subject")} placeholder="How can we help?" />
                {errors.subject && <p className="text-sm text-danger mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register("message")} placeholder="Tell us more about your inquiry..." />
                {errors.message && <p className="text-sm text-danger mt-1">{errors.message.message}</p>}
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-heading">Our Offices</h2>
            <motion.div {...staggerContainer} className="space-y-4">
              {OFFICES.map((office) => (
                <motion.div key={office.city} {...staggerItem}>
                  <Card className="p-6 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-heading mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm text-body">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary shrink-0" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={14} className="text-primary shrink-0" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail size={14} className="text-primary shrink-0" />
                        {office.email}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-heading mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-body">
                <p className="flex items-center gap-2"><Clock size={14} className="text-primary shrink-0" /> Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="flex items-center gap-2"><Clock size={14} className="text-primary shrink-0" /> Saturday: 9:00 AM - 2:00 PM</p>
                <p className="flex items-center gap-2"><Clock size={14} className="text-primary shrink-0" /> Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section dark>
        <div className="rounded-2xl overflow-hidden border border-border h-[400px] bg-muted-surface flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-primary/50 mb-4" />
            <p className="text-lg text-muted">Interactive map loading...</p>
            <p className="text-sm text-muted mt-1">Visit our offices in Abuja, Lagos, and Dubai</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title="Frequently Asked Questions" description="Quick answers to common questions about our company and services." />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  )
}
