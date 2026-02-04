import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#E07856] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#D66A48] active:scale-95",
        secondary:
          "bg-[#6B8E23] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#5A7A1E] active:scale-95",
        outline:
          "bg-white text-[#4A3728] border-2 border-[#4A3728]/30 rounded-full shadow-sm hover:bg-[#F5E6D3] hover:border-[#4A3728]/50 hover:shadow-md active:scale-95",
        accent:
          "bg-white text-[#E07856] border-2 border-[#E07856]/30 rounded-full shadow-md hover:bg-[#E07856]/10 hover:border-[#E07856] hover:shadow-lg active:scale-95",
        ghost: "rounded-full hover:bg-[#F5E6D3]/50 text-[#4A3728]",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
