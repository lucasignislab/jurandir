"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { SearchBar } from "@/components/busca/search-bar"
import { FilterSidebar } from "@/components/busca/filter-sidebar"
import { ProfessionalCard } from "@/components/profissional/profile-card"
import { MapComponent } from "@/components/maps/map"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Map, List, Grid3X3 } from "lucide-react"

// Mock data - will be replaced with real data from API
const mockProfessionals = [
  {
    id: "1",
    name: "João Silva",
    rating: 4.9,
    reviewCount: 127,
    services: ["Eletricista", "Hidráulica", "Reparos"],
    location: "Centro, Campinas",
    distance: "2km",
    bio: "Especialista em instalações elétricas residenciais e comerciais. Mais de 10 anos de experiência.",
    completedJobs: 156,
  },
  {
    id: "2",
    name: "Maria Santos",
    rating: 5.0,
    reviewCount: 89,
    services: ["Pintura", "Decoracao", "Texturização"],
    location: "Jardim das Oliveiras, Campinas",
    distance: "5km",
    bio: "Pintora profissional com especialização em técnicas decorativas e texturizadas.",
    completedJobs: 98,
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    rating: 4.8,
    reviewCount: 203,
    services: ["Hidráulica", "Encanamento", "Reparos"],
    location: "Barão Geraldo, Campinas",
    distance: "8km",
    bio: "Hidráulico experiente. Atendo emergências e faço manutenção preventiva.",
    completedJobs: 234,
  },
  {
    id: "4",
    name: "Ana Paula",
    rating: 4.9,
    reviewCount: 76,
    services: ["Jardinagem", "Paisagismo", "Limpeza"],
    location: "Taquaral, Campinas",
    distance: "3km",
    bio: "Jardineira apaixonada por plantas. Transformo espaços verdes.",
    completedJobs: 87,
  },
  {
    id: "5",
    name: "Roberto Lima",
    rating: 4.7,
    reviewCount: 145,
    services: ["Marcenaria", "Montagem", "Reparos"],
    location: "Norte, Campinas",
    distance: "6km",
    bio: "Marceneiro especializado em móveis sob medida e restauração.",
    completedJobs: 178,
  },
  {
    id: "6",
    name: "Fernanda Costa",
    rating: 5.0,
    reviewCount: 52,
    services: ["Limpeza", "Organização", "Limpeza Pós-Obra"],
    location: "Cambuí, Campinas",
    distance: "4km",
    bio: "Diarista de confiança. Limpeza profunda e organização de ambientes.",
    completedJobs: 64,
  },
]

type ViewMode = "grid" | "list" | "map"

export default function BuscarPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [professionals] = useState(mockProfessionals)

  const handleSearch = (query: string, location: string) => {
    console.log("Searching:", { query, location })
    // Implement search logic
  }

  const handleFilterChange = (filters: unknown) => {
    console.log("Filters changed:", filters)
    // Implement filter logic
  }

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
      
      <div className="pt-20">
        {/* Search Header */}
        <div className="bg-[#1A1A1A] py-8">
          <div className="container mx-auto px-6 lg:px-12">
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
              Buscar Profissionais
            </h1>
            <SearchBar 
              onSearch={handleSearch} 
              onToggleFilters={() => setIsFilterOpen(true)}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-12 py-8">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <p className="text-[#666666] font-medium">
                <span className="font-black text-[#1A1A1A]">{professionals.length}</span> profissionais encontrados
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white border-[3px] border-[#1A1A1A] p-1 shadow-[4px_4px_0_#1A1A1A]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#1A1A1A] text-white"
                    : "hover:bg-[#F5F0E8]"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-[#1A1A1A] text-white"
                    : "hover:bg-[#F5F0E8]"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 transition-colors ${
                  viewMode === "map"
                    ? "bg-[#1A1A1A] text-white"
                    : "hover:bg-[#F5F0E8]"
                }`}
              >
                <Map className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              onFilterChange={handleFilterChange}
            />

            {/* Results */}
            <div className="flex-1">
              {viewMode === "map" ? (
                // Map View
                <div className="h-[600px]">
                  <MapComponent className="h-full" />
                </div>
              ) : viewMode === "list" ? (
                // List View
                <div className="space-y-4">
                  {professionals.map((professional) => (
                    <ProfessionalCard key={professional.id} professional={professional} />
                  ))}
                </div>
              ) : (
                // Grid View
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {professionals.map((professional, index) => (
                    <div
                      key={professional.id}
                      className={index % 3 === 1 ? "md:mt-8" : index % 3 === 2 ? "md:mt-4" : ""}
                    >
                      <ProfessionalCard professional={professional} />
                    </div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {viewMode !== "map" && (
                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg">
                    Carregar Mais
                  </Button>
                </div>
              )}
            </div>

            {/* Map Sidebar (Desktop only in grid/list view) */}
            {viewMode !== "map" && (
              <div className="hidden xl:block w-96 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#FF6B00]" />
                    Mapa
                  </h3>
                  <MapComponent className="h-[500px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
