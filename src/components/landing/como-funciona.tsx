"use client"

import { Search, MessageCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Busque",
    description: "Encontre profissionais por serviço, localização ou avaliação",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Conecte",
    description: "Converse diretamente e solicite o serviço que precisa",
  },
  {
    number: "03",
    icon: Star,
    title: "Avalie",
    description: "Após o serviço, avalie o profissional e ajude a comunidade",
  },
]

export function ComoFunciona() {
  return (
    <section className="py-24 bg-[#F5E6D3] relative overflow-hidden">
      {/* Organic Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#E07856]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6B8E23]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A3728] mb-4">
            Como Funciona
          </h2>
          <div className="h-1 w-24 bg-[#E07856] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#4A3728]/70 max-w-2xl mx-auto">
            Em 3 passos simples você resolve seus problemas domésticos
          </p>
        </div>

        {/* Steps - Horizontal Timeline */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-[#E07856]/30" />
              )}

              <div className="text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E07856] rounded-full shadow-lg mb-8">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-2 border-[#4A3728]/10 shadow-sm mb-6">
                  <step.icon className="w-8 h-8 text-[#6B8E23]" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-[#4A3728] mb-4">{step.title}</h3>
                <p className="text-[#4A3728]/70 font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Button size="lg">
            Começar Agora
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
