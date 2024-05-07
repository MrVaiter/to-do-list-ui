# Використовуємо офіційний образ Node.js
FROM node:18

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

# Встановлюємо глобальний пакет serve
RUN npm install -g serve

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску додатку
CMD ["serve", "-s", "build", "-l", "3000"]