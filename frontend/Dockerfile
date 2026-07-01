# --- STAGE 1: Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- STAGE 2: Production Stage ---
FROM nginx:alpine
# Copy the compiled static assets from the build stage to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (standard HTTP port for Nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]