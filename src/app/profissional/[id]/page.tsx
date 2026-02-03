"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapComponent } from "@/components/maps/map"
import { 
  Star, 
  MapPin, 
  Briefcase, 
  MessageCircle, 
  Calendar, 
  CheckCircle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react"
import Link from "next/link"

// Mock data - will be replaced with real data from API
const mockProfessional = {
  id: "1",
  name: "João Silva",
  avatar: "",
  rating: 4.9,
  reviewCount: 127,
  completedJobs: 156,
  bio: "Especialista em instalações elétricas residenciais e comerciais com mais de 10 anos de experiência. Formado em Engenharia Elétrica pela UNICAMP e certificado CREA. Atendo em toda a região de Campinas com garantia de qualidade em todos os serviços.",
  services: ["Eletricista", "Hidráulica", "Reparos Gerais", "Manutenção Preventiva"],
  skills: ["Instalações elétricas", "Reparos", "Manutenção", "Projetos", "Automação"],
  location: {
    city: "Campinas",
    state: "SP",
    neighborhood: "Centro",
    distance: "2km",
    coordinates: [-22.9099, -47.0626] as [number, number],
  },
  experienceYears: 10,
  portfolio: [
    { id: "1", url: "/portfolio1.jpg", description: "Instalação elétrica completa residencial" },
    { id: "2", url: "/portfolio2.jpg", description: "Reparo de quadro elétrico comercial" },
    { id: "3", url: "/portfolio3.jpg", description: "Instalação de luminárias LED" },
    { id: "4", url: "/portfolio4.jpg", description: "Manutenção preventiva" },
    { id: "5", url: "/portfolio5.jpg", description: "Projeto elétrico sob medida" },
    { id: "6", url: "/portfolio6.jpg", description: "Reparo emergencial" },
  ],
  availability: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  reviews: [
    {
      id: "1",
      clientName: "Maria Oliveira",
      rating: 5,
      date: "2025-01-15",
      service: "Instalação Elétrica",
      text: "Excelente profissional! Chegou no horário, fez um trabalho impecável e deixou tudo organizado. Super recomendo!",
    },
    {
      id: "2",
      clientName: "Carlos Santos",
      rating: 5,
      date: "2025-01-10",
      service: "Reparo de Chuveiro",
      text: "Resolveu meu problema em menos de 1 hora. Preço justo e muito educado. Já salvei o contato para futuras necessidades.",
    },
    {
      id: "3",
      clientName: "Ana Paula",
      rating: 4,
      date: "2025-01-05",
      service: "Instalação de Tomadas",
      text: "Bom profissional, atencioso e caprichoso. Só demorou um pouco mais que o previsto, mas o resultado ficou ótimo.",
    },
  ],
}

export default function ProfissionalPage() {
  const params = useParams()
  const [professional] = useState(mockProfessional)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === professional.portfolio.length - 1 ? 0 : prev + 1
    )
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? professional.portfolio.length - 1 : prev - 1
    )
  }

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
      
      <div className="pt-20">
        {/* Back Button & Actions */}
        <div className="bg-[#1A1A1A] py-4">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between">
              <Link href="/buscar">
                <Button variant="ghost" className="text-white hover:text-[#FFD700]">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar para busca
                </Button>
              </Link>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 border-[3px] flex items-center justify-center transition-all ${
                  isFavorite 
                    ? "bg-[#FF6B00] border-[#FF6B00] text-white" 
                    : "bg-white border-[#1A1A1A] text-[#1A1A1A] hover:border-[#FF6B00]"
                }`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? "fill-white" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-white border-b-[3px] border-[#1A1A1A]">
          <div className="container mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Avatar 
                src={professional.avatar} 
                fallback={professional.name.charAt(0)} 
                size="xl" 
                className="border-[4px]"
              />
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2">
                  {professional.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                    <span className="text-2xl font-black">{professional.rating}</span>
                    <span className="text-[#666666] font-medium">
                      ({professional.reviewCount} avaliações)
                    </span>
                  </div>
                  <span className="w-1 h-1 bg-[#666666] rounded-full" />
                  <div className="flex items-center gap-1 text-[#666666]">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-bold">{professional.completedJobs} serviços</span>
                  </div>
                  <span className="w-1 h-1 bg-[#666666] rounded-full" />
                  <div className="flex items-center gap-1 text-[#666666]">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                    <span className="font-bold">{professional.location.neighborhood}, {professional.location.city}</span>
                    <span className="text-sm">({professional.location.distance})</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {professional.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-sm">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" className="text-base">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Chat
                </Button>
                <Button size="lg" className="text-base">
                  Contratar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#1A1A1A] font-medium text-lg leading-relaxed">
                    {professional.bio}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#F5F0E8] border-[3px] border-[#1A1A1A] p-4 text-center">
                      <div className="text-3xl font-black text-[#FF6B00]">{professional.experienceYears}+</div>
                      <div className="text-sm font-bold uppercase">Anos Exp.</div>
                    </div>
                    <div className="bg-[#F5F0E8] border-[3px] border-[#1A1A1A] p-4 text-center">
                      <div className="text-3xl font-black text-[#FF6B00]">{professional.completedJobs}</div>
                      <div className="text-sm font-bold uppercase">Serviços</div>
                    </div>
                    <div className="bg-[#F5F0E8] border-[3px] border-[#1A1A1A] p-4 text-center">
                      <div className="text-3xl font-black text-[#FF6B00]">{professional.rating}</div>
                      <div className="text-sm font-bold uppercase">Avaliação</div>
                    </div>
                    <div className="bg-[#F5F0E8] border-[3px] border-[#1A1A1A] p-4 text-center">
                      <div className="text-3xl font-black text-[#FF6B00]">{professional.reviewCount}</div>
                      <div className="text-sm font-bold uppercase">Reviews</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {professional.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-2 bg-white border-[3px] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] text-sm font-bold"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-[#00C853]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card>
                <CardHeader>
                  <CardTitle>Portfólio</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Photo Gallery */}
                  <div className="relative mb-6">
                    <div className="aspect-video bg-[#E8E4DC] border-[3px] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] flex items-center justify-center overflow-hidden">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-[#1A1A1A]/10 rounded-full flex items-center justify-center">
                          <span className="text-4xl font-black text-[#1A1A1A]/30">
                            {currentPhotoIndex + 1}
                          </span>
                        </div>
                        <p className="text-[#666666] font-medium max-w-md mx-auto px-8">
                          {professional.portfolio[currentPhotoIndex].description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Navigation */}
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-[3px] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] flex items-center justify-center hover:shadow-[4px_4px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-[calc(50%+1px)] transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-[3px] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] flex items-center justify-center hover:shadow-[4px_4px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-[calc(50%+1px)] transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {professional.portfolio.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPhotoIndex(idx)}
                          className={`w-3 h-3 border-[2px] border-[#1A1A1A] transition-colors ${
                            idx === currentPhotoIndex ? "bg-[#FF6B00]" : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#666666] text-center font-medium">
                    Foto {currentPhotoIndex + 1} de {professional.portfolio.length}
                  </p>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Avaliações</CardTitle>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                      <span className="font-black text-xl">{professional.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {professional.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b-[2px] border-[#1A1A1A]/10 last:border-0 pb-6 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-black">{review.clientName}</h4>
                            <p className="text-sm text-[#666666] font-medium">
                              {review.service}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-[#1A1A1A] font-medium mb-2">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <p className="text-xs text-[#666666] font-medium">
                          {new Date(review.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                  <Button size="lg" variant="secondary" className="w-full">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Disponibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {professional.availability.map((day) => (
                      <span
                        key={day}
                        className="px-3 py-1 bg-[#00C853]/10 border-[2px] border-[#00C853] text-[#00C853] text-sm font-bold uppercase"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#666666] font-medium">
                    Horários flexíveis, inclusive fins de semana
                  </p>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 mb-4">
                    <MapComponent className="h-full" />
                  </div>
                  <p className="text-sm font-medium">
                    <strong>{professional.location.neighborhood}</strong><br />
                    {professional.location.city}, {professional.location.state}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
