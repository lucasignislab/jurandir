"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Droplets, Paintbrush, Trees, Sofa, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicos = [
  {
    icon: Zap,
    title: "Eletricista",
    description: "Instalações, reparos e manutenção elétrica",
    color: "#FFD700",
  },
  {
    icon: Droplets,
    title: "Hidráulica",
    description: "Consertos, instalações e desentupimento",
    color: "#FF6B00",
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Pintura interna, externa e texturização",
    color: "#1A1A1A",
  },
  {
    icon: Trees,
    title: "Jardinagem",
    description: "Corte de grama, poda e manutenção de jardins",
    color: "#00C853",
  },
  {
    icon: Sofa,
    title: "Marcenaria",
    description: "Montagem de móveis e pequenos reparos",
    color: "#8B4513",
  },
  {
    icon: Sparkles,
    title: "Limpeza",
    description: "Limpeza profunda e organização de espaços",
    color: "#00BCD4",
  },
]

export function ServicosSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F0E8] -skew-x-12 origin-top-right" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase leading-none mb-4">
            Nossos Serviços
          </h2>
          <div className="h-2 w-32 bg-[#FF6B00]" />
          <p className="mt-6 text-xl font-medium text-[#666666] max-w-2xl">
            Encontre profissionais qualificados para qualquer tipo de serviço doméstico
          </p>
        </div>

        {/* Services Grid - Broken Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicos.map((servico, index) => (
            <Card
              key={servico.title}
              className={`group cursor-pointer ${
                index % 3 === 1 ? "lg:mt-12" : ""
              } ${index % 3 === 2 ? "lg:mt-6" : ""}`}
            >
              <CardHeader className="pb-4">
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mb-4 border-[3px] border-[#1A1A1A] transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: servico.color }}
                >
                  <servico.icon
                    className={`w-8 h-8 ${
                      servico.color === "#1A1A1A" || servico.color === "#8B4513"
                        ? "text-white"
                        : "text-[#1A1A1A]"
                    }`}
                    strokeWidth={2.5}
                  />
                </div>
                <CardTitle className="text-2xl">{servico.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666] font-medium mb-4">
                  {servico.description}
                </p>
                <div className="flex items-center text-[#FF6B00] font-bold group-hover:translate-x-2 transition-transform duration-200">
                  Ver profissionais <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" variant="secondary">
            Ver Todos os Serviços
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
