import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-glow">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Precify<span className="text-primary">App</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a href="#tokens" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como funciona os tokens
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex text-muted-foreground hover:text-foreground"
          >
            <a href="http://painel.precifyapp.com">Entrar</a>
          </Button>
          <Button size="sm" asChild className="bg-cta hover:bg-cta/90 text-cta-foreground" style={{boxShadow: 'var(--shadow-cta)'}}>
            <a href="http://painel.precifyapp.com">
              Testar grátis
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
