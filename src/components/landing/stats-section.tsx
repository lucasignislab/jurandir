"use client"

import { Users, Wrench, Star, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Profissionais Cadastrados",
    color: "#FF6B00",
  },
  {
    icon: Wrench,
    number: "2000+",
    label: "Serviços Realizados",
    color: "#FFD700",
  },
  {
    icon: Star,
    number: "4.8",
    label: "Avaliação Média",
    color: "#1A1A1A",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Taxa de Satisfação",
    color: "#00C853",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-[#FF6B00] relative overflow-hidden">
      {/* Angled Background */}
      <div className="absolute inset-0 bg-[#1A1A1A]" style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)" }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white border-[4px] border-[#1A1A1A] p-6 shadow-[8px_8px_0_#1A1A1A] hover:shadow-[12px_12px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border-[3px] border-[#1A1A1A]"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon
                  className={`w-7 h-7 ${stat.color === "#1A1A1A" ? "text-white" : "text-[#1A1A1A]"}`}
                  strokeWidth={2.5}
                />
              </div>
              <div className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-[#666666] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
