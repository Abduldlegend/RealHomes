import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const variants = {
  default:
    "bg-primary text-white hover:bg-primary-hover shadow-sm",
  secondary:
    "bg-white text-heading border border-border hover:bg-muted-surface",
  ghost:
    "text-body hover:text-heading hover:bg-muted-surface",
  danger:
    "bg-danger text-white hover:bg-danger/90",
  link:
    "text-primary underline-offset-4 hover:underline",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
  icon: "h-10 w-10",
}

const Button = forwardRef(function Button(
  { className, variant = "default", size = "md", asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

export { Button }
