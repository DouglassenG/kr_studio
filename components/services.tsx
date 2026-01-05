"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Box, Home, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria de Design",
    description:
      "Orientação especializada para escolher cores, móveis, iluminação e acabamentos que transformam sua visão em realidade",
    features: ["Análise de espaço", "Paleta de cores", "Seleção de materiais", "Planejamento de layout"],
    image: "/design_interior.jpg",
  },
  {
    icon: Box,
    title: "Renderizações 3D",
    description:
      "Visualize seu projeto antes da execução com imagens fotorrealistas em alta definição de todos os ambientes",
    features: ["Imagens fotorrealistas", "Múltiplos ângulos", "Iluminação realista", "Detalhamento preciso"],
    image: "/render_3d.jpg",
  },
  {
    icon: Home,
    title: "Projeto Residencial",
    description:
      "Projetos completos e personalizados para sua casa, do conceito à execução, com acompanhamento em todas as etapas",
    features: ["Projeto completo", "Memorial descritivo", "Especificações técnicas", "Acompanhamento de obra"],
    image: "/residencial.jpg",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções completas em design de interiores para transformar seus ambientes com excelência e sofisticação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-2 bg-card overflow-hidden ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
