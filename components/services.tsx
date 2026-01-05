"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Box, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria de Design",
    description:
      "Orientação especializada para escolher cores, móveis, iluminação e acabamentos que transformam sua visão em realidade",
    features: [
      "Análise de espaço",
      "Paleta de cores",
      "Seleção de materiais",
      "Planejamento de layout",
    ],
    image: "/design_interior.jpg",
  },
  {
    icon: Box,
    title: "Renderizações 3D",
    description:
      "Visualize seu projeto antes da execução com imagens fotorrealistas em alta definição de todos os ambientes",
    features: [
      "Imagens fotorrealistas",
      "Múltiplos ângulos",
      "Iluminação realista",
      "Detalhamento preciso",
    ],
    image: "/render_3d.jpg",
  },
  {
    icon: Home,
    title: "Projeto Residencial",
    description:
      "Projetos completos e personalizados para sua casa, do conceito à execução, com acompanhamento em todas as etapas",
    features: [
      "Projeto completo",
      "Memorial descritivo",
      "Especificações técnicas",
      "Acompanhamento de obra",
    ],
    image: "/residencial.jpg",
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções completas em design de interiores para transformar seus
            ambientes com excelência e sofisticação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 bg-card border-border/50 overflow-hidden ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />

                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <CardHeader className="relative -mt-12 pt-0 z-10">
                  <CardTitle className="text-xl md:text-2xl font-serif text-card-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    className="w-full justify-between cursor-pointer text-primary hover:text-primary hover:bg-primary/5 group/btn"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
