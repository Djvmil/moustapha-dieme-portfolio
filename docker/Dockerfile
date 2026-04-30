# Dockerfile pour moustapha-dieme-portfolio (Angular)
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Build de production
RUN npm run build

# Production stage avec nginx
FROM nginx:alpine

# Copie de la configuration nginx personnalisée
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers buildés depuis le stage builder
COPY --from=builder /app/dist/moustapha-dieme-portfolio/browser /usr/share/nginx/html

# Exposition du port
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Démarrage de nginx
CMD ["nginx", "-g", "daemon off;"]