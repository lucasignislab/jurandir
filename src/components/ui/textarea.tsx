import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border-[3px] border-[#1A1A1A] bg-white",
          "px-4 py-3 text-base font-medium text-[#1A1A1A]",
          "placeholder:text-[#666666]",
          "shadow-[4px_4px_0_#1A1A1A]",
          "focus:outline-none focus:shadow-[6px_6px_0_#FF6B00] focus:border-[#FF6B00]",
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
Textarea.displayName = "Textarea"

export { Textarea }
