"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { MapPin, Loader2 } from "lucide-react"

interface MapComponentProps {
  markers?: Array<{
    id: string
    position: [number, number]
    title: string
    rating?: number
  }>
  onMarkerClick?: (id: string) => void
  className?: string
}

// Simplified map component without actual Leaflet for now
// In production, you would import and use react-leaflet
export function MapComponent({
  markers = [],
  onMarkerClick,
  className,
}: MapComponentProps) {
  const [isLoading, setIsLoading] = useState(true)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F5F0E8]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#FF6B00] mx-auto mb-2" />
            <p className="font-bold text-sm uppercase">Carregando mapa...</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-[#E8E4DC]" ref={mapRef}>
          {/* Map Background Placeholder */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, #E8E4DC 25%, transparent 25%),
              linear-gradient(-45deg, #E8E4DC 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #E8E4DC 75%),
              linear-gradient(-45deg, transparent 75%, #E8E4DC 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            backgroundColor: '#D4CFC4'
          }}>
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(to right, #1A1A1A 1px, transparent 1px),
                linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Center marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-[#FF6B00] border-[3px] border-[#1A1A1A] rounded-full" />
              <div className="absolute -inset-2 bg-[#FF6B00] opacity-30 animate-ping rounded-full" />
            </div>
          </div>

          {/* Sample markers */}
          {markers.length === 0 && (
            // Default sample markers for visualization
            <>
              <div 
                className="absolute cursor-pointer hover:scale-110 transition-transform"
                style={{ top: '30%', left: '40%' }}
                onClick={() => onMarkerClick?.('1')}
              >
                <div className="bg-[#1A1A1A] text-white px-2 py-1 text-xs font-black uppercase border-[2px] border-white shadow-[2px_2px_0_#1A1A1A] whitespace-nowrap">
                  João - Eletricista ⭐ 4.9
                </div>
                <MapPin className="w-6 h-6 text-[#1A1A1A] -mt-1 ml-2" />
              </div>

              <div 
                className="absolute cursor-pointer hover:scale-110 transition-transform"
                style={{ top: '60%', left: '70%' }}
                onClick={() => onMarkerClick?.('2')}
              >
                <div className="bg-[#FFD700] text-[#1A1A1A] px-2 py-1 text-xs font-black uppercase border-[2px] border-[#1A1A1A] shadow-[2px_2px_0_#1A1A1A] whitespace-nowrap">
                  Maria - Pintora ⭐ 5.0
                </div>
                <MapPin className="w-6 h-6 text-[#FFD700] -mt-1 ml-2" fill="#FFD700" />
              </div>

              <div 
                className="absolute cursor-pointer hover:scale-110 transition-transform"
                style={{ top: '45%', left: '25%' }}
                onClick={() => onMarkerClick?.('3')}
              >
                <div className="bg-[#FF6B00] text-white px-2 py-1 text-xs font-black uppercase border-[2px] border-[#1A1A1A] shadow-[2px_2px_0_#1A1A1A] whitespace-nowrap">
                  Carlos - Hidráulico ⭐ 4.8
                </div>
                <MapPin className="w-6 h-6 text-[#FF6B00] -mt-1 ml-2" fill="#FF6B00" />
              </div>
            </>
          )}

          {/* Actual markers */}
          {markers.map((marker, index) => (
            <div
              key={marker.id}
              className="absolute cursor-pointer hover:scale-110 transition-transform"
              style={{
                top: `${20 + (index * 15)}%`,
                left: `${20 + (index * 20)}%`,
              }}
              onClick={() => onMarkerClick?.(marker.id)}
            >
              <div className="bg-white text-[#1A1A1A] px-2 py-1 text-xs font-black uppercase border-[2px] border-[#1A1A1A] shadow-[2px_2px_0_#1A1A1A] whitespace-nowrap">
                {marker.title} {marker.rating && `⭐ ${marker.rating}`}
              </div>
              <MapPin className="w-6 h-6 text-[#1A1A1A] -mt-1 ml-2" />
            </div>
          ))}

          {/* Map controls placeholder */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white border-[3px] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] flex items-center justify-center font-black text-lg hover:shadow-[4px_4px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              +
            </button>
            <button className="w-10 h-10 bg-white border-[3px] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] flex items-center justify-center font-black text-lg hover:shadow-[4px_4px_0_#1A1A1A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              −
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white border-[3px] border-[#1A1A1A] p-3 shadow-[4px_4px_0_#1A1A1A]">
            <p className="text-xs font-black uppercase mb-2">Profissionais</p>
            <div className="space-y-1 text-xs font-medium">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
                <span>Disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full" />
                <span>Destaque</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF6B00] rounded-full" />
                <span>Em serviço</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
