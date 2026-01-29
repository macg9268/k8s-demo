FROM node:18

WORKDIR /app

# Copiar archivos de dependencias y scripts
COPY . .
RUN npm install express

# Exponer el puerto HTTPS
EXPOSE 3000

CMD ["node", "server.js"]