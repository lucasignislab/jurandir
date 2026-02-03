"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

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
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] uppercase leading-none mb-4">
              O que dizem
              <span className="block text-[#FF6B00]">nossos clientes</span>
            </h2>
            <div className="h-2 w-32 bg-[#1A1A1A]" />
          </div>
          <p className="text-xl font-medium text-[#666666] max-w-md">
            Histórias reais de quem já usou o portal
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <Card
              key={depoimento.name}
              className={`${
                index === 1 ? "md:mt-8" : index === 2 ? "md:mt-4" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar fallback={depoimento.avatar} size="md" />
                    <div>
                      <div className="font-black text-lg uppercase">
                        {depoimento.name}
                      </div>
                      <div className="text-sm font-bold text-[#666666]">
                        {depoimento.role}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-[#FFD700]" />
                </div>
              </CardHeader>
              <CardContent>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
                </div>
                
                {/* Service Badge */}
                <div className="inline-block bg-[#FF6B00] text-white px-3 py-1 text-xs font-bold uppercase mb-4 border-[2px] border-[#1A1A1A]">
                  {depoimento.service}
                </div>
                
                {/* Text */}
                <p className="text-[#1A1A1A] font-medium leading-relaxed">
                  &ldquo;{depoimento.text}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
