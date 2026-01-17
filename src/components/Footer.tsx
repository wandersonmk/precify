import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Precify<span className="text-primary">App</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </a>
            <a href="#tokens" className="text-muted-foreground hover:text-foreground transition-colors">
              Como funciona
            </a>
            <a href="http://painel.precifyapp.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Acessar Painel
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrecifyApp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
