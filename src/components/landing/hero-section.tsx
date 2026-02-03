"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Wrench, Paintbrush, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F0E8] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            #1A1A1A,
            #1A1A1A 1px,
            transparent 1px,
            transparent 40px
          )`
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">

          {/* Left Content - 70% width equivalent */}
          <div className="lg:col-span-8 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-4 py-2 border-[3px] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A]">
              <Hammer className="w-4 h-4" />
              <span className="font-bold text-sm uppercase tracking-wider">
                Serviços em Campinas & SP
              </span>
            </div>

            {/* Main Heading - Massive Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] uppercase leading-[0.85] tracking-tight">
                Encontre os
                <span className="block text-[#FF6B00]">melhores</span>
                <span className="block">profissionais</span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] max-w-2xl">
                Para sua casa. Reparos, pintura, jardinagem e muito mais.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="bg-white border-[3px] border-[#1A1A1A] px-6 py-4 shadow-[6px_6px_0_#1A1A1A]">
                <div className="text-3xl font-black text-[#FF6B00]">500+</div>
                <div className="text-sm font-bold text-[#1A1A1A] uppercase">Profissionais</div>
              </div>
              <div className="bg-white border-[3px] border-[#1A1A1A] px-6 py-4 shadow-[6px_6px_0_#1A1A1A]">
                <div className="text-3xl font-black text-[#FF6B00]">2000+</div>
                <div className="text-sm font-bold text-[#1A1A1A] uppercase">Serviços</div>
              </div>
              <div className="bg-white border-[3px] border-[#1A1A1A] px-6 py-4 shadow-[6px_6px_0_#1A1A1A]">
                <div className="text-3xl font-black text-[#FF6B00]">4.8</div>
                <div className="text-sm font-bold text-[#1A1A1A] uppercase">Avaliação</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="text-base">
                Buscar Profissionais
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Ser um Profissional
              </Button>
            </div>
          </div>

          {/* Right Content - 30% with visual elements */}
          <div className="lg:col-span-4 relative">
            {/* Icon Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFD700] border-[3px] border-[#1A1A1A] p-6 shadow-[8px_8px_0_#1A1A1A] hover:shadow-[12px_12px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                <Wrench className="w-12 h-12 text-[#1A1A1A]" strokeWidth={2.5} />
                <div className="mt-3 font-black text-[#1A1A1A] uppercase text-sm">Hidráulica</div>
              </div>
              <div className="bg-[#FF6B00] border-[3px] border-[#1A1A1A] p-6 shadow-[8px_8px_0_#1A1A1A] hover:shadow-[12px_12px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                <Hammer className="w-12 h-12 text-white" strokeWidth={2.5} />
                <div className="mt-3 font-black text-white uppercase text-sm">Marcenaria</div>
              </div>
              <div className="bg-[#1A1A1A] border-[3px] border-[#1A1A1A] p-6 shadow-[8px_8px_0_#FF6B00] hover:shadow-[12px_12px_0_#FF6B00] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                <Paintbrush className="w-12 h-12 text-[#FFD700]" strokeWidth={2.5} />
                <div className="mt-3 font-black text-[#FFD700] uppercase text-sm">Pintura</div>
              </div>
              <div className="bg-white border-[3px] border-[#1A1A1A] p-6 shadow-[8px_8px_0_#1A1A1A] hover:shadow-[12px_12px_0_#1A1A1A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                <Leaf className="w-12 h-12 text-[#1A1A1A]" strokeWidth={2.5} />
                <div className="mt-3 font-black text-[#1A1A1A] uppercase text-sm">Jardinagem</div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white border-[3px] border-[#1A1A1A] p-4 shadow-[6px_6px_0_#1A1A1A] rotate-3">
              <div className="text-2xl font-black text-[#FF6B00]">R$ 50</div>
              <div className="text-xs font-bold text-[#1A1A1A] uppercase">Preço médio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#1A1A1A]" />
      <div className="absolute bottom-4 left-0 right-0 h-2 bg-[#FF6B00]" />
    </section>
  )
}
