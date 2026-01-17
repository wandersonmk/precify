import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Mensal",
    icon: Zap,
    description: "Ideal para começar",
    price: "29,90",
    period: "1 mês",
    tokens: "100 mil tokens/mês",
    popular: false,
    featured: false,
    link: "https://pay.kiwify.com.br/1L40DjT",
  },
  {
    name: "Semestral",
    icon: Star,
    description: "Melhor custo-benefício",
    price: "119,90",
    period: "6 meses",
    tokens: "250 mil tokens/mês",
    popular: true,
    featured: true,
    link: "https://pay.kiwify.com.br/Bc0Zcf0",
  },
  {
    name: "Anual",
    icon: Crown,
    description: "Máxima economia",
    price: "199,90",
    period: "12 meses",
    tokens: "500 mil tokens/mês",
    popular: false,
    featured: false,
    link: "https://pay.kiwify.com.br/29MCENF",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Planos</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 px-4">
            Escolha seu
            <span className="text-gradient"> Plano Ideal</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            7 dias grátis. Escolha o melhor plano para você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-6 lg:p-8 transition-all duration-300",
                plan.featured
                  ? "bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 backdrop-blur-sm border-2 border-primary shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(192,132,252,0.4),inset_0_0_30px_rgba(168,85,247,0.1)] scale-100 md:scale-105 z-10"
                  : "bg-card/50 backdrop-blur-sm border-2 border-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.3),0_0_40px_rgba(192,132,252,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(192,132,252,0.3)] hover:border-primary/60"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center",
                    plan.featured ? "bg-primary-foreground/20" : "bg-primary/10"
                  )}
                >
                  <plan.icon
                    className={cn(
                      "w-6 h-6",
                      plan.featured ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "text-xl font-bold mb-1",
                    plan.featured ? "text-primary-foreground" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    R$
                  </span>
                  <span
                    className={cn(
                      "text-4xl lg:text-5xl font-bold",
                      plan.featured ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-sm",
                    plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      plan.featured ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      plan.featured ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {plan.tokens}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      plan.featured ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}
                  >
                    Acesso ilimitado ao Mentor IA
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      plan.featured ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}
                  >
                    Tokens acumulativos
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full",
                  plan.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : index === 0
                      ? "bg-cta text-cta-foreground hover:bg-cta/90"
                      : "bg-cta text-cta-foreground hover:bg-cta/90"
                )}
                style={!plan.featured ? {boxShadow: 'var(--shadow-cta)'} : {}}
              >
                <a href={plan.link}>Assinar</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
