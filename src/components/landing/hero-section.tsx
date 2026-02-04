"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Sprout, Wrench, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F5E6D3] overflow-hidden">
      {/* Organic Shape Backgrounds */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#E07856]/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#6B8E23]/20 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-200px)]">

          {/* Left Content - 60% */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#6B8E23] text-white px-5 py-2 rounded-full shadow-md">
              <Home className="w-4 h-4" />
              <span className="font-semibold text-sm">
                Serviços em Campinas & SP
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#4A3728] leading-tight">
                Encontre os{" "}
                <span className="text-[#E07856]">melhores</span>
                <br />
                profissionais
              </h1>

              <p className="text-xl text-[#4A3728]/80 max-w-xl leading-relaxed">
                Para sua casa. Reparos, pintura, jardinagem e muito mais.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="text-base">
                Buscar Profissionais
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Ser um Profissional
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl px-6 py-4 border-2 border-[#4A3728]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#E07856]">500+</div>
                <div className="text-sm font-medium text-[#4A3728]/70 mt-1">Profissionais</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl px-6 py-4 border-2 border-[#4A3728]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#E07856]">2000+</div>
                <div className="text-sm font-medium text-[#4A3728]/70 mt-1">Serviços</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl px-6 py-4 border-2 border-[#4A3728]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#E07856]">4.8</div>
                <div className="text-sm font-medium text-[#4A3728]/70 mt-1">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Content - 40% with Illustration */}
          <div className="lg:col-span-5 relative">
            {/* Main Illustration */}
            <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-8 border-2 border-[#4A3728]/10 shadow-xl">
              <div className="relative w-full aspect-square">
                <Image
                  src="/illustrations/hero_illustration_1770162661020.png"
                  alt="Profissional e cliente"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Service Icons Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: Home, title: "Limpeza", color: "#E07856" },
                { icon: Sprout, title: "Jardinagem", color: "#6B8E23" },
                { icon: Wrench, title: "Reparos", color: "#4A3728" },
                { icon: Heart, title: "Cuidados", color: "#E07856" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/80 rounded-3xl p-5 border-2 border-[#4A3728]/10 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="font-semibold text-[#4A3728] text-sm">{service.title}</div>
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-5 border-2 border-[#4A3728]/10 shadow-xl rotate-3">
              <div className="text-2xl font-bold text-[#E07856]">R$ 50</div>
              <div className="text-xs font-medium text-[#4A3728]/70 uppercase">Preço médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
