"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const achievements = [
  "Mais de 200 projetos entregues",
  "Equipe multidisciplinar experiente",
  "Atendimento personalizado",
  "Materiais de primeira qualidade",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
      imageObserver.disconnect()
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/kr_studio.jpg" alt="KR Studio Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Excelência em Design de Interiores
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              O KR Studio nasceu da paixão por criar ambientes que contam histórias e refletem a essência de quem os
              habita. Com anos de experiência no mercado, nossa equipe especializada transforma sonhos em projetos
              reais.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Acreditamos que cada espaço é único e merece um projeto exclusivo. Nossa abordagem combina criatividade,
              funcionalidade e atenção aos detalhes para entregar resultados que superam expectativas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{
                    transitionDelay: `${(index + 4) * 100}ms`,
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
