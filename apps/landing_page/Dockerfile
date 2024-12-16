# Etapa 1: Instalar dependências e build
FROM node:18 AS builder

# Definir o diretório de trabalho no repositório
WORKDIR /repo

# Copiar arquivos essenciais para o contexto de build
COPY package.json pnpm-lock.yaml ./
COPY apps/landing_page/package.json ./apps/landing_page/
COPY packages/ui/package.json ./packages/ui/
COPY . ./

# Instalar dependências
RUN npm install -g pnpm \
  && pnpm install --frozen-lockfile

# Construir a landing page
WORKDIR /repo/apps/landing_page
RUN pnpm build  # Roda o build no diretório da landing page

# Etapa 2: Runtime
FROM node:18-alpine AS runtime

# Definir o diretório de trabalho
WORKDIR /app

# Instalar dependências
RUN npm install -g pnpm

# Copiar os arquivos necessários do build
COPY --from=builder /repo/apps/landing_page/.next ./.next
COPY --from=builder /repo/apps/landing_page/public ./public
COPY --from=builder /repo/apps/landing_page/package.json ./package.json
COPY --from=builder /repo/node_modules ./node_modules

# Variáveis de ambiente
ENV BASE_URL=https://670efcd93e71518616564444.mockapi.io/api

# Expor a porta padrão para o Next.js
EXPOSE 3000

# Rodar a aplicação Next.js no ambiente de runtime
CMD ["pnpm", "dev"]
