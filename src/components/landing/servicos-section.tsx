"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Droplets, Paintbrush, Trees, Sofa, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const servicos = [
  {
    icon: Zap,
    title: "Eletricista",
    description: "Instalações, reparos e manutenção elétrica",
    color: "#E07856",
  },
  {
    icon: Droplets,
    title: "Hidráulica",
    description: "Consertos, instalações e desentupimento",
    color: "#6B8E23",
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Pintura interna, externa e texturização",
    color: "#4A3728",
  },
  {
    icon: Trees,
    title: "Jardinagem",
    description: "Corte de grama, poda e manutenção de jardins",
    color: "#6B8E23",
  },
  {
    icon: Sofa,
    title: "Marcenaria",
    description: "Montagem de móveis e pequenos reparos",
    color: "#8B7355",
  },
  {
    icon: Sparkles,
    title: "Limpeza",
    description: "Limpeza profunda e organização de espaços",
    color: "#E07856",
  },
]

export function ServicosSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Organic Shape Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#E07856]/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#6B8E23]/10 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A3728] mb-4">
            Nossos Serviços
          </h2>
          <div className="h-1 w-24 bg-[#E07856] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#4A3728]/70 max-w-2xl mx-auto">
            Encontre profissionais qualificados para qualquer tipo de serviço doméstico
          </p>
        </div>

        {/* Services Grid with Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Services Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico) => (
              <Card
                key={servico.title}
                className="group cursor-pointer hover:shadow-lg transition-shadow border-2 border-[#4A3728]/10 rounded-3xl"
              >
                <CardHeader className="pb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: servico.color }}
                  >
                    <servico.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#4A3728]">{servico.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A3728]/70 font-medium mb-4">
                    {servico.description}
                  </p>
                  <div className="flex items-center text-[#E07856] font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    Ver profissionais <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Illustration */}
          <div className="hidden lg:block">
            <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-8 border-2 border-[#4A3728]/10 shadow-xl">
              <div className="relative w-full aspect-square">
                <Image
                  src="/illustrations/services_illustration_1770162679226.png"
                  alt="Serviços disponíveis"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="secondary">
            Ver Todos os Serviços
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
