"use client"

import { Users, Wrench, Star, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Profissionais Cadastrados",
    color: "#E07856",
  },
  {
    icon: Wrench,
    number: "2000+",
    label: "Serviços Realizados",
    color: "#6B8E23",
  },
  {
    icon: Star,
    number: "4.8",
    label: "Avaliação Média",
    color: "#E07856",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Taxa de Satisfação",
    color: "#6B8E23",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-[#6B8E23] relative overflow-hidden">
      {/* Organic Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl shadow-md"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon
                  className="w-7 h-7 text-white"
                  strokeWidth={2}
                />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-[#4A3728] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-[#4A3728]/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
