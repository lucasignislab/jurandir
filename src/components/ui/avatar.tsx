import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  border?: boolean
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", border = true, ...props }, ref) => {
    const [error, setError] = React.useState(false)

    const sizes = {
      sm: "w-10 h-10 text-xs",
      md: "w-14 h-14 text-base",
      lg: "w-20 h-20 text-xl",
      xl: "w-28 h-28 text-2xl",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-sm overflow-hidden bg-[#F5F0E8]",
          sizes[size],
          border && "border-[3px] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A]",
          "transition-all duration-200",
          className
        )}
        {...props}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <span className="font-black text-[#1A1A1A] uppercase">
            {fallback?.charAt(0) || "U"}
          </span>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
