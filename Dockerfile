# Використовуємо офіційний образ Node.js для стадії збірки
FROM node:22.1-alpine as build

# Встановлюємо робочий каталог в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо вихідний код в контейнер
COPY . .

RUN chmod u+x ./start.sh

# Відкриваємо порт 3000
EXPOSE 3000

CMD ["./start.sh"]
