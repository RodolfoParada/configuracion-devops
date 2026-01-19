FROM node:18-alpine

WORKDIR /app

# Aprovechamos el sistema de capas de Docker para velocidad
COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

# Monitoreo básico integrado
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["npm", "start"]