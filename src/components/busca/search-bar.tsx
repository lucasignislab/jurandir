"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, SlidersHorizontal } from "lucide-react"

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void
  onToggleFilters?: () => void
}

export function SearchBar({ onSearch, onToggleFilters }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query, location)
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
          <Input
            type="text"
            placeholder="Buscar por serviço, nome ou habilidade..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Location Input */}
        <div className="md:w-64 relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
          <Input
            type="text"
            placeholder="Localização"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Search Button */}
        <Button type="submit" size="lg" className="md:w-auto">
          <Search className="w-5 h-5 mr-2" />
          Buscar
        </Button>

        {/* Filter Toggle (Mobile) */}
        {onToggleFilters && (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onToggleFilters}
            className="md:hidden"
          >
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filtros
          </Button>
        )}
      </div>
    </form>
  )
}
