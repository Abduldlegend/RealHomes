import { forwardRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const Accordion = forwardRef(function Accordion({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn("divide-y divide-border", className)} {...props}>
      {children}
    </div>
  )
})

const AccordionItem = forwardRef(function AccordionItem({ value, className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn("py-2", className)} data-value={value} {...props}>
      {children}
    </div>
  )
})

const AccordionTrigger = forwardRef(function AccordionTrigger({ className, children, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-base font-medium text-heading hover:text-primary transition-colors [&[data-open]>svg]:rotate-180",
        className
      )}
      data-open={props["data-open"]}
      onClick={(e) => {
        const content = e.currentTarget.nextElementSibling
        const isOpen = content?.classList.contains("open")
        document.querySelectorAll("[data-value]").forEach((item) => {
          const c = item.querySelector("[data-content]")
          if (c) c.classList.remove("open")
          const t = item.querySelector("[data-open]")
          if (t) t.removeAttribute("data-open")
        })
        if (!isOpen) {
          content?.classList.add("open")
          e.currentTarget.setAttribute("data-open", "")
        }
      }}
      {...props}
    >
      {children}
      <ChevronDown size={18} className="shrink-0 text-muted transition-transform duration-200" />
    </button>
  )
})

const AccordionContent = forwardRef(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-content
      className={cn(
        "overflow-hidden max-h-0 transition-all duration-300 ease-in-out open:max-h-[500px] open:pb-4",
        className
      )}
      {...props}
    >
      <p className="text-sm text-body leading-relaxed">{children}</p>
    </div>
  )
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
