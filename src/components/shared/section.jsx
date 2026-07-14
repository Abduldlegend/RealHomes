import { cn } from "../../lib/utils"
import { motion } from "framer-motion"
import { fadeInUp } from "../../lib/animations"

export function Section({ children, className, id, dark = false, ...props }) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        dark && "bg-secondary-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ title, description, className, align = "center" }) {
  return (
    <motion.div
      {...fadeInUp}
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-body leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
