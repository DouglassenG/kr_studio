"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Interior Design Background" 
          className="w-full h-full object-cover contrast-[1.1] saturate-[1.1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight drop-shadow-xl">
            Transformamos Espaços em <span className="text-primary">Experiências Únicas</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-8 md:mb-12 text-pretty max-w-2xl mx-auto drop-shadow-lg">
            Design de interiores de alta qualidade que une funcionalidade, estética e personalidade para criar ambientes
            que inspiram
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 w-full sm:w-auto cursor-pointer"
            >
              Comece Seu Projeto
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 w-full sm:w-auto border-primary text-primary hover:bg-primary/10 cursor-pointer"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
