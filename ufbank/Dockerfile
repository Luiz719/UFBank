# Estágio 1: Builder - Constrói a aplicação Next.js
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos de manifesto e instala dependências primeiro
COPY package*.json ./
RUN npm ci

# Copia o restante do código-fonte (incluindo .ts, .tsx, tsconfig.json)
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Estágio 2: Runner - Cria a imagem final de produção
FROM node:20-alpine
WORKDIR /app

# Define um usuário não-root 
USER node

# Copia apenas os artefatos necessários do estágio 'builder'
# Isso inclui a pasta .next otimizada e o node_modules de produção
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
