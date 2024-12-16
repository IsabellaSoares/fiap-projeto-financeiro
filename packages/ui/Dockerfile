# Etapa 1: Build
FROM node:18 AS builder

WORKDIR /repo

# Copiar arquivos essenciais
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY . ./

# Instalar dependências
RUN npm install -g pnpm \
  && pnpm install --frozen-lockfile

# Build do Storybook
WORKDIR /repo/packages/ui
RUN pnpm build-storybook

# Etapa 2: Runtime
FROM node:18-alpine AS runtime

WORKDIR /app

# Copiar o build do Storybook
COPY --from=builder /repo/packages/ui/storybook-static ./storybook-static

# Expor a porta padrão
EXPOSE 6006

# Rodar o Storybook
CMD ["npx", "http-server", "storybook-static", "-p", "6006"]
