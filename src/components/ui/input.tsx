import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border-[3px] border-[#1A1A1A] bg-white px-4 py-3",
          "text-base font-medium text-[#1A1A1A]",
          "placeholder:text-[#666666] placeholder:font-normal",
          "shadow-[4px_4px_0_#1A1A1A]",
          "focus-visible:outline-none focus-visible:shadow-[6px_6px_0_#FF6B00] focus-visible:border-[#FF6B00]",
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
