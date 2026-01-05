"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
          >
            KR Studio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group py-1"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group py-1"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group py-1"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
