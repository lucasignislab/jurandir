import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-black uppercase tracking-wide transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1A1A1A] text-white border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#FF6B00] hover:border-[#FF6B00] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1",
        secondary:
          "bg-[#FF6B00] text-white border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#FFD700] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1",
        outline:
          "bg-white text-[#1A1A1A] border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1",
        accent:
          "bg-[#FFD700] text-[#1A1A1A] border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:shadow-[8px_8px_0_#FF6B00] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1",
        ghost: "hover:bg-[#F5F0E8] text-[#1A1A1A]",
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
