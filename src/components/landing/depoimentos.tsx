"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const depoimentos = [
  {
    name: "Maria Silva",
    role: "Cliente",
    avatar: "M",
    service: "Pintura Residencial",
    rating: 5,
    text: "O João fez um trabalho incrível na minha casa. Pintou 3 cômodos em um dia e o acabamento ficou perfeito. Super recomendo!",
  },
  {
    name: "Carlos Oliveira",
    role: "Cliente",
    avatar: "C",
    service: "Hidráulica",
    rating: 5,
    text: "Resolveu meu problema de vazamento em 30 minutos. Profissional pontual, educado e cobrou preço justo. Já salvei nos favoritos.",
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    avatar: "A",
    service: "Jardinagem",
    rating: 5,
    text: "Transformou meu quintal! Além do corte de grama, deu dicas de como cuidar das plantas. Serviço completo e atencioso.",
  },
]

export function Depoimentos() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Organic Shape */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E07856]/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A3728] mb-2">
            O que dizem
            <span className="block text-[#E07856]">nossos clientes</span>
          </h2>
          <div className="h-1 w-24 bg-[#E07856] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#4A3728]/70 max-w-md mx-auto">
            Histórias reais de quem já usou o portal
          </p>
        </div>

        {/* Testimonials Grid with Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
            {depoimentos.map((depoimento) => (
              <Card
                key={depoimento.name}
                className="border-2 border-[#4A3728]/10 rounded-3xl hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar fallback={depoimento.avatar} size="md" />
                      <div>
                        <div className="font-bold text-lg text-[#4A3728]">
                          {depoimento.name}
                        </div>
                        <div className="text-sm font-medium text-[#4A3728]/60">
                          {depoimento.role}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-[#E07856]/30" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#E07856] text-[#E07856]"
                      />
                    ))}
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block bg-[#6B8E23]/10 text-[#6B8E23] px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                    {depoimento.service}
                  </div>

                  {/* Text */}
                  <p className="text-[#4A3728]/80 font-medium leading-relaxed">
                    &ldquo;{depoimento.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Illustration */}
          <div className="hidden lg:block">
            <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-8 border-2 border-[#4A3728]/10 shadow-xl">
              <div className="relative w-full aspect-square">
                <Image
                  src="/illustrations/community_illustration_1770162695368.png"
                  alt="Comunidade satisfeita"
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
