import { motion } from "framer-motion";
import { Coins, RefreshCw, MessageCircle, HelpCircle } from "lucide-react";

const TokenExplainer = () => {
  return (
    <section id="tokens" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Entenda</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Como funcionam os
            <span className="text-gradient"> tokens?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Equivalence Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 lg:p-8 bg-gradient-card shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Equivalência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada <span className="text-foreground font-semibold">10.000 tokens</span> equivalem 
                  a aproximadamente <span className="text-foreground font-semibold">7.500 palavras</span> processadas 
                  pelo Mentor IA.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accumulation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 lg:p-8 bg-gradient-card shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Acumulação</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Tokens não expiram.</span> Tokens 
                  não utilizados acumulam e permanecem disponíveis para uso futuro, somando-se 
                  aos novos tokens recebidos a cada renovação.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl p-6 lg:p-8 glass text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coins className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Exemplo Prático</span>
            </div>
            <p className="text-muted-foreground">
              Com o plano <span className="text-primary font-semibold">Semestral</span> você recebe 
              <span className="text-foreground font-semibold"> 250 mil tokens/mês</span>, o suficiente 
              para processar cerca de <span className="text-foreground font-semibold">187.500 palavras</span> — 
              equivalente a um livro inteiro de conversas com seu Mentor IA!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenExplainer;
