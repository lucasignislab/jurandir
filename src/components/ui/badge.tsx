import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "destructive"
  size?: "sm" | "md" | "lg"
}

function Badge({ className, variant = "default", size = "md", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#1A1A1A] text-white border-[#1A1A1A]",
    secondary: "bg-[#F5F0E8] text-[#1A1A1A] border-[#1A1A1A]",
    outline: "bg-transparent text-[#1A1A1A] border-[#1A1A1A]",
    accent: "bg-[#FF6B00] text-white border-[#1A1A1A]",
    destructive: "bg-red-600 text-white border-[#1A1A1A]",
  }

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-bold uppercase tracking-wide",
        "border-[2px]",
        "shadow-[2px_2px_0_#1A1A1A]",
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
