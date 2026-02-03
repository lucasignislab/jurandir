import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "accent"
  shadow?: "sm" | "default" | "lg" | "none"
  border?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", shadow = "default", border = true, ...props }, ref) => {
    const variants = {
      default: "bg-white",
      secondary: "bg-[#F5F0E8]",
      accent: "bg-[#FF6B00] text-white",
    }

    const shadows = {
      sm: "shadow-[4px_4px_0_#1A1A1A]",
      default: "shadow-[8px_8px_0_#1A1A1A]",
      lg: "shadow-[12px_12px_0_#1A1A1A]",
      none: "",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-sm",
          variants[variant],
          shadows[shadow],
          border && "border-[3px] border-[#1A1A1A]",
          "transition-all duration-200",
          "hover:shadow-[12px_12px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-black leading-none tracking-tight uppercase",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-[#666666] font-medium", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
