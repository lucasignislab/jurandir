import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicosSection } from "@/components/landing/servicos-section"
import { ComoFunciona } from "@/components/landing/como-funciona"
import { Depoimentos } from "@/components/landing/depoimentos"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <div id="servicos">
          <ServicosSection />
        </div>
        <div id="como-funciona">
          <ComoFunciona />
        </div>
        <StatsSection />
        <div id="depoimentos">
          <Depoimentos />
        </div>
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
