# 1. Temel imaj (Node.js ortamı)
FROM node:18

# 2. Proje dosyalarını çalışma dizinine kopyala
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 3. Uygulamanın dışa açılacak portu
EXPOSE 3000

# 4. Uygulamayı başlat
CMD ["node", "index.js"]