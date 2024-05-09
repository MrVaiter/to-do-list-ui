# Використовуємо офіційний образ Node.js для стадії збірки
FROM node:18 as build

# Встановлюємо робочий каталог в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо вихідний код в контейнер
COPY . .



# Збираємо додаток для продакшну
RUN npm run build

# Використовуємо офіційний образ Node.js для стадії запуску
FROM node:18-alpine

# Встановлюємо робочий каталог в контейнері
WORKDIR /app

# Встановлюємо глобальний пакет serve
RUN npm install -g serve

# Копіюємо збірку з стадії збірки
COPY --from=build /app/build ./build

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску додатку
CMD ["serve", "-s", "build", "-l", "3000"]