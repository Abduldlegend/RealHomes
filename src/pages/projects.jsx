import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin } from "lucide-react"
import { Section } from "../components/shared/section"
import { Badge } from "../components/ui/badge"
import { Card } from "../components/ui/card"
import { SEO } from "../components/shared/seo"
import { JsonLd } from "../components/shared/jsonld"
import { fadeInUp } from "../lib/animations"
import { PROJECT_CATEGORIES } from "../lib/constants"
import { projects } from "../data/projects"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <SEO title="Our Projects" path="/projects" />
      <JsonLd type="ItemList" data={{ items: projects, itemType: "RealEstateProject" }} />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb1b0e84d?w=1920&q=80"
            alt="Construction site"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight">
              Our
              <span className="block text-primary">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Explore our diverse portfolio of residential, commercial, infrastructure, and mixed-use developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <Section>
        <div className="flex flex-wrap gap-2 mb-12">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-muted-surface text-body hover:text-heading"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-md group"
                  onClick={() => setSelectedProject(project)}
                >
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
                    <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <p className="mt-3 text-sm text-body line-clamp-2">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border shadow-lg"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-body hover:text-heading transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{selectedProject.category}</Badge>
                  <Badge variant={selectedProject.status === "Completed" ? "success" : "warning"}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-heading">{selectedProject.title}</h2>
                <div className="flex items-center gap-1.5 mt-2 text-sm text-muted">
                  <MapPin size={14} />
                  {selectedProject.location}
                </div>
                <p className="mt-6 text-body leading-relaxed">{selectedProject.description}</p>
                <div className="mt-8 grid grid-cols-3 gap-6 p-6 rounded-xl bg-secondary-background">
                  {Object.entries(selectedProject.specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-semibold text-heading">{value}</p>
                      <p className="text-sm text-muted capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
