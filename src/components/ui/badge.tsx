import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "destructive"
  size?: "sm" | "md" | "lg"
}

function Badge({ className, variant = "default", size = "md", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#E07856] text-white",
    secondary: "bg-[#F5E6D3] text-[#4A3728]",
    outline: "bg-transparent text-[#4A3728] border-2",
    accent: "bg-[#6B8E23] text-white",
    destructive: "bg-red-600 text-white",
  }

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        "shadow-sm",
        "transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}

export { Badge, type BadgeProps }
