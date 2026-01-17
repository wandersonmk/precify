import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, CreditCard } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroDashboard from "@/assets/dashboard.png";

const Hero = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Gestão financeira com IA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 px-2"
          >
            Calcule custos e tire dúvidas com
            <span className="text-gradient block mt-2">inteligência artificial</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Gerencie entradas e saídas do seu negócio. Calcule o preço ideal dos seus produtos com nosso mentor IA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 bg-cta hover:bg-cta/90 text-cta-foreground" style={{boxShadow: 'var(--shadow-cta)'}}>
              <a href="http://painel.precifyapp.com">
                Testar grátis por 7 dias
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
              <a href="http://painel.precifyapp.com">
                Acessar painel
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Setup em 2 minutos</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 max-w-3xl mx-auto px-4"
        >
          <div 
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card glass p-1 sm:p-2 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsImageOpen(true)}
          >
            <div className="rounded-lg sm:rounded-xl overflow-hidden">
              <img 
                src={heroDashboard} 
                alt="PrecifyApp Dashboard - Mentor IA para precificação" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>PrecifyApp Dashboard</DialogTitle>
            <DialogDescription>
              Visão geral do sistema - Clique fora da imagem para fechar
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 overflow-auto max-h-[75vh]">
            <img 
              src={heroDashboard} 
              alt="PrecifyApp Dashboard - Mentor IA para precificação"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
