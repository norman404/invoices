# -------- Etapa 1: Build Expo Web --------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --workspaces=false

COPY . .

# Genera la versión web
RUN npx expo export --platform web --output-dir=web-build

# -------- Etapa 2: Servidor Estático --------
FROM node:18-alpine AS runner

WORKDIR /app

# Instala `serve` para servir archivos estáticos
RUN npm install -g serve

COPY --from=builder /app/web-build /app/web

EXPOSE 4173
CMD ["serve", "-s", "web", "-l", "4173"]