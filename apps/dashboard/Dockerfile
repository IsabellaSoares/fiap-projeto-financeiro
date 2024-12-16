# Etapa 1: Instalar dependências e build
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /repo

# Copiar arquivos necessários para o contexto do build
COPY . ./

# Instalar dependências com pnpm
RUN npm install -g pnpm \
  && pnpm install
RUN pnpm ls

# Build do aplicativo (usando Turborepo)
WORKDIR /repo/apps/dashboard
RUN pnpm build

# Etapa 2: Servir o aplicativo em produção
FROM node:18-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários para o runtime
COPY --from=builder /repo/apps/dashboard/.next ./.next
COPY --from=builder /repo/apps/dashboard/public ./public
COPY --from=builder /repo/node_modules ./node_modules
COPY --from=builder /repo/apps/dashboard/package.json ./package.json

# Variáveis de ambiente
ENV NODE_ENV=production

# Expor a porta e iniciar o aplicativo
EXPOSE 3000
CMD ["npm", "run", "dev"]
