import { motion } from "framer-motion";
import { Package, Wallet, Users, Calculator, BarChart3, Bot } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import calculadoraImg from "@/assets/Calculadora.png";
import mentorIAImg from "@/assets/MentorIA.png";
import relatoriosImg from "@/assets/Relatorios.png";
import estoqueImg from "@/assets/Estoque.png";
import entradasImg from "@/assets/entradas.png";
import saidasImg from "@/assets/saidas.png";

const features = [
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle produtos, entradas e saídas com alertas automáticos.",
    image: estoqueImg,
  },
  {
    icon: Wallet,
    title: "Entradas",
    description: "Registre vendas e receitas do seu negócio.",
    image: entradasImg,
  },
  {
    icon: Users,
    title: "Saídas",
    description: "Controle despesas como aluguel, salários e custos.",
    image: saidasImg,
  },
  {
    icon: Calculator,
    title: "Calculadora de Preços",
    description: "Calcule o preço ideal considerando todos os custos.",
    image: calculadoraImg,
  },
  {
    icon: BarChart3,
    title: "Relatórios",
    description: "Visualize vendas, lucros e tendências do seu negócio.",
    image: relatoriosImg,
  },
  {
    icon: Bot,
    title: "Mentor IA",
    description: "Assistente inteligente para gestão e precificação.",
    image: mentorIAImg,
  },
];

const Features = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 px-4">
            Tudo para gerir
            <span className="text-gradient block">seu negócio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estoque, finanças e precificação inteligente em um só lugar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 sm:p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300"
            >
              {feature.image ? (
                <div 
                  className="mb-4 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage({ src: feature.image!, title: feature.title })}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>
              Clique fora da imagem para fechar
            </DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="mt-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
