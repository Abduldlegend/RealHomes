import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Separator = forwardRef(function Separator({ className, orientation = "horizontal", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
})

export { Separator }
