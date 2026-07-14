import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Avatar = forwardRef(function Avatar({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
})

const AvatarImage = forwardRef(function AvatarImage({ className, ...props }, ref) {
  return (
    <img
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
})

const AvatarFallback = forwardRef(function AvatarFallback({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted-surface text-sm font-medium text-muted",
        className
      )}
      {...props}
    />
  )
})

export { Avatar, AvatarImage, AvatarFallback }
