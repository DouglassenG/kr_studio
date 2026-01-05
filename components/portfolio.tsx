"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Residência Moderna",
    category: "Projeto Completo",
    image: "/portfolio-1.jpg",
  },
  {
    title: "Apartamento Cobertura",
    category: "Decoração",
    image: "/portfolio-2.jpg",
  },
  {
    title: "Escritório Corporativo",
    category: "Comercial",
    image: "/portfolio-3.jpg",
  },
  {
    title: "Casa de Campo",
    category: "Residencial",
    image: "/portfolio-4.jpg",
  },
]

export function Portfolio() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4 text-balance">
            Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça alguns dos projetos que transformamos em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-md transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary-foreground/80 font-medium mb-2 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
