"use client"

import { Search, MessageCircle, Star, ArrowRight } from "lucide-react"

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
    <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#FF6B00] -skew-y-3 origin-top-left" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-16">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none mb-4">
            Como Funciona
          </h2>
          <div className="h-2 w-32 bg-[#FFD700] mx-auto" />
          <p className="mt-6 text-xl font-medium text-gray-400 max-w-2xl mx-auto">
            Em 3 passos simples você resolve seus problemas domésticos
          </p>
        </div>

        {/* Steps - Horizontal Timeline */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-[#FF6B00]" />
              )}
              
              <div className="text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF6B00] border-[4px] border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)] mb-8">
                  <span className="text-3xl font-black">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border-[3px] border-white/30 mb-6">
                  <step.icon className="w-8 h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-black uppercase mb-4">{step.title}</h3>
                <p className="text-gray-400 font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-[#FF6B00] px-8 py-4 border-[3px] border-white shadow-[8px_8px_0_rgba(255,255,255,0.2)]">
            <span className="font-black text-lg uppercase">Começar Agora</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
