"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-24 bg-[#E07856] relative overflow-hidden">
      {/* Organic Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4A3728]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-[#E07856] px-5 py-2.5 rounded-full shadow-lg mb-8">
              <Hammer className="w-5 h-5" />
              <span className="font-bold text-sm">
                Pronto para começar?
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Encontre o profissional
              <span className="block text-[#4A3728]">ideal agora</span>
            </h2>

            <p className="text-lg text-white/90 max-w-xl mx-auto lg:mx-0 mb-10">
              Seja para resolver um problema emergencial ou realizar aquele projeto planejado,
              temos o profissional certo para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-base bg-[#6B8E23] hover:bg-[#5A7A1E]">
                Buscar Profissionais
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base bg-white hover:bg-white/90 text-[#E07856] border-white">
                Quero ser Profissional
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6B8E23] rounded-full" />
                <span className="font-semibold text-sm">Cadastro Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6B8E23] rounded-full" />
                <span className="font-semibold text-sm">Profissionais Verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6B8E23] rounded-full" />
                <span className="font-semibold text-sm">Pagamento Seguro</span>
              </div>
            </div>
          </div>

          {/* CTA Illustration */}
          <div className="hidden lg:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-[40px] p-8 border-2 border-white/30 shadow-2xl">
              <div className="relative w-full aspect-square">
                <Image
                  src="/illustrations/cta_illustration_1770162710581.png"
                  alt="Comece agora"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
