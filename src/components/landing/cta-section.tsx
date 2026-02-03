"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #FFD700,
            #FFD700 2px,
            transparent 2px,
            transparent 20px
          )`
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-2 border-[3px] border-white shadow-[4px_4px_0_rgba(255,255,255,0.2)] mb-8">
            <Hammer className="w-5 h-5" />
            <span className="font-black text-sm uppercase tracking-wider">
              Pronto para começar?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-none mb-6">
            Encontre o profissional
            <span className="block text-[#FF6B00]">ideal agora</span>
          </h2>
          
          <p className="text-xl font-medium text-gray-400 max-w-2xl mx-auto mb-10">
            Seja para resolver um problema emergencial ou realizar aquele projeto planejado, 
            temos o profissional certo para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10">
              Buscar Profissionais
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-10">
              Quero ser Profissional
            </Button>
          </div>
          
          {/* Trust indicators */}
 <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C853]" />
              <span className="font-bold text-sm uppercase">Cadastro Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C853]" />
              <span className="font-bold text-sm uppercase">Profissionais Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C853]" />
              <span className="font-bold text-sm uppercase">Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
