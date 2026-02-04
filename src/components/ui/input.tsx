import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border-2 border-[#4A3728]/20 bg-white px-4 py-3",
          "text-base font-medium text-[#4A3728]",
          "placeholder:text-[#4A3728]/40 placeholder:font-normal",
          "shadow-sm",
          "focus-visible:outline-none focus-visible:shadow-md focus-visible:border-[#E07856] focus-visible:ring-2 focus-visible:ring-[#E07856]/20",
          "transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
