"use client";

import { Instagram, Facebook, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setTimeout(() => {
      toast({
        title: "Inscrição realizada!",
        description: "Obrigado por se inscrever em nossa newsletter.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">KR Studio</h3>
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
              Transformando espaços em experiências únicas através do design de
              interiores
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors">
                  Consultoria de Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors">
                  Renderizações 3D
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm md:text-base transition-colors">
                  Projeto Residencial
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Receba nossas novidades e inspirações.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Seu email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="icon" variant="secondary" className="shrink-0 cursor-pointer">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <h4 className="text-lg font-semibold mb-4">Contate-nos</h4>
            <div className="flex flex-col gap-2 mb-6 text-primary-foreground/80 text-sm md:text-base">
              <p>kerlenmsrodrigues@hotmail.com</p>
              <p>(51) 99625-3829</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© {currentYear} KR Studio. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
