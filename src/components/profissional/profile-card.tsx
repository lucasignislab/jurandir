"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Professional {
  id: string
  name: string
  avatar?: string
  rating: number
  reviewCount: number
  services: string[]
  location: string
  distance?: string
  bio: string
  completedJobs: number
}

interface ProfessionalCardProps {
  professional: Professional
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Avatar 
            src={professional.avatar} 
            fallback={professional.name.charAt(0)} 
            size="lg" 
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-black uppercase truncate">
              {professional.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                <span className="font-bold text-sm">{professional.rating}</span>
              </div>
              <span className="text-[#666666] text-sm">
                ({professional.reviewCount} avaliações)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {professional.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="inline-flex items-center px-2 py-1 bg-[#F5F0E8] border-[2px] border-[#1A1A1A] text-xs font-bold uppercase"
            >
              {service}
            </span>
          ))}
          {professional.services.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 bg-[#FFD700] border-[2px] border-[#1A1A1A] text-xs font-black uppercase">
              +{professional.services.length - 3}
            </span>
          )}
        </div>

        {/* Bio */}
        <p className="text-[#666666] font-medium text-sm mb-4 line-clamp-2">
          {professional.bio}
        </p>

        {/* Location & Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-sm text-[#666666]">
            <MapPin className="w-4 h-4 text-[#FF6B00]" />
            <span className="font-medium">{professional.location}</span>
            {professional.distance && (
              <span className="text-xs">({professional.distance})</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Briefcase className="w-4 h-4 text-[#1A1A1A]" />
            <span className="font-bold">{professional.completedJobs}</span>
            <span className="text-[#666666]">serviços</span>
          </div>
        </div>

        {/* CTA */}
        <Link href={`/profissional/${professional.id}`}>
          <Button className="w-full group-hover:bg-[#FF6B00] transition-colors">
            Ver Perfil
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
