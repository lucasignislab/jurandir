import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "./card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
    label: string
    value: string | number
    icon: LucideIcon
    description?: string
    trend?: {
        value: number
        positive: boolean
    }
    variant?: "default" | "secondary" | "accent"
    className?: string
}

export function StatsCard({
    label,
    value,
    icon: Icon,
    description,
    trend,
    variant = "default",
    className
}: StatsCardProps) {
    return (
        <Card variant={variant} className={cn("overflow-hidden group", className)}>
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <p className={cn(
                            "text-xs font-black uppercase tracking-wider mb-1",
                            variant === "accent" ? "text-white/80" : "text-gray-500"
                        )}>
                            {label}
                        </p>
                        <h3 className={cn(
                            "text-3xl font-black mb-1",
                            variant === "accent" ? "text-white" : "text-[#1A1A1A]"
                        )}>
                            {value}
                        </h3>

                        {description && (
                            <p className={cn(
                                "text-xs font-bold",
                                variant === "accent" ? "text-white/70" : "text-gray-400"
                            )}>
                                {description}
                            </p>
                        )}

                        {trend && (
                            <div className={cn(
                                "flex items-center gap-1 mt-2 text-xs font-black uppercase",
                                trend.positive
                                    ? (variant === "accent" ? "text-white" : "text-green-600")
                                    : (variant === "accent" ? "text-white/80" : "text-red-600")
                            )}>
                                <span>{trend.positive ? "▲" : "▼"}</span>
                                <span>{trend.value}%</span>
                                <span className="opacity-60 font-bold lowercase">em relação ao mê anterior</span>
                            </div>
                        )}
                    </div>

                    <div className={cn(
                        "p-3 border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1",
                        variant === "accent" ? "bg-white text-[#1A1A1A]" : "bg-[#FFD700] text-[#1A1A1A]"
                    )}>
                        <Icon className="w-6 h-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
