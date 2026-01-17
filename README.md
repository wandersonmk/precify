# PrecifyApp - Landing Page

Landing page oficial do PrecifyApp, sistema de gestão com mentor IA para precificação inteligente.

**URL**: https://github.com/wandersonmk/precify

## Sobre o Projeto

PrecifyApp é uma plataforma SaaS completa para gestão de negócios com foco em precificação inteligente usando IA. Esta landing page apresenta as funcionalidades do sistema e os planos disponíveis.

## Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui

## Como Executar

### Requisitos

- Node.js 18+ & npm

### Instalação

```sh
# Clone o repositório
git clone https://github.com/wandersonmk/precify.git

# Navegue até o diretório
cd precify

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
precify/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes base shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Páginas da aplicação
│   └── lib/            # Utilitários
└── public/             # Arquivos públicos
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## Deploy

O projeto pode ser deployado em qualquer plataforma que suporte sites estáticos:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Licença

© 2026 PrecifyApp - Todos os direitos reservados
