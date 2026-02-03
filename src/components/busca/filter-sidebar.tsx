"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { X, Star, MapPin } from "lucide-react"

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  onFilterChange?: (filters: FilterState) => void
}

interface FilterState {
  services: string[]
  minRating: number
  distance: string
  availability: string[]
}

const services = [
  "Eletricista",
  "Hidráulica",
  "Pintura",
  "Jardinagem",
  "Marcenaria",
  "Limpeza",
  "Reparos",
  "Montagem",
]

const distances = [
  { value: "5", label: "Até 5km" },
  { value: "10", label: "Até 10km" },
  { value: "20", label: "Até 20km" },
  { value: "50", label: "Até 50km" },
]

const ratings = [5, 4, 3]

export function FilterSidebar({ isOpen, onClose, onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    services: [],
    minRating: 0,
    distance: "",
    availability: [],
  })

  const handleServiceToggle = (service: string) => {
    const newServices = filters.services.includes(service)
      ? filters.services.filter((s) => s !== service)
      : [...filters.services, service]
    
    const newFilters = { ...filters, services: newServices }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, minRating: filters.minRating === rating ? 0 : rating }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleDistanceChange = (distance: string) => {
    const newFilters = { ...filters, distance: filters.distance === distance ? "" : distance }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const clearFilters = () => {
    const newFilters = { services: [], minRating: 0, distance: "", availability: [] }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  // Mobile drawer
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 md:hidden">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#F5F0E8] border-l-[3px] border-[#1A1A1A] shadow-[-8px_0_0_#1A1A1A] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black uppercase">Filtros</h2>
              <button onClick={onClose} className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center border-[2px] border-[#1A1A1A]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent
              filters={filters}
              onServiceToggle={handleServiceToggle}
              onRatingChange={handleRatingChange}
              onDistanceChange={handleDistanceChange}
            />
          </div>
        </div>
      </div>
    )
  }

  // Desktop sidebar
  return (
    <div className="hidden md:block w-72 flex-shrink-0">
      <div className="sticky top-24">
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Filtros</CardTitle>
              {(filters.services.length > 0 || filters.minRating > 0 || filters.distance) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                  Limpar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <FilterContent
              filters={filters}
              onServiceToggle={handleServiceToggle}
              onRatingChange={handleRatingChange}
              onDistanceChange={handleDistanceChange}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface FilterContentProps {
  filters: FilterState
  onServiceToggle: (service: string) => void
  onRatingChange: (rating: number) => void
  onDistanceChange: (distance: string) => void
}

function FilterContent({
  filters,
  onServiceToggle,
  onRatingChange,
  onDistanceChange,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Services */}
      <div>
        <h3 className="font-black uppercase text-sm mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF6B00]" />
          Serviços
        </h3>
        <div className="space-y-2">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={`service-${service}`}
                checked={filters.services.includes(service)}
                onCheckedChange={() => onServiceToggle(service)}
              />
              <Label htmlFor={`service-${service}`} className="text-sm font-medium normal-case">
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-black uppercase text-sm mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FFD700]" />
          Avaliação Mínima
        </h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <button
              key={rating}
              onClick={() => onRatingChange(rating)}
              className={`flex items-center gap-2 w-full p-2 border-[2px] transition-colors ${
                filters.minRating === rating
                  ? "bg-[#FFD700] border-[#1A1A1A]"
                  : "bg-white border-[#1A1A1A]/20 hover:border-[#1A1A1A]"
              }`}
            >
              <div className="flex">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-sm font-bold">{rating}+ estrelas</span>
            </button>
          ))}
        </div>
      </div>

      {/* Distance */}
      <div>
        <h3 className="font-black uppercase text-sm mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#FF6B00]" />
          Distância
        </h3>
        <div className="space-y-2">
          {distances.map((dist) => (
            <button
              key={dist.value}
              onClick={() => onDistanceChange(dist.value)}
              className={`w-full text-left p-2 border-[2px] text-sm font-bold transition-colors ${
                filters.distance === dist.value
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                  : "bg-white border-[#1A1A1A]/20 hover:border-[#1A1A1A]"
              }`}
            >
              {dist.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
