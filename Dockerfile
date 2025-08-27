# Base image
FROM node:18

# Set working dir
WORKDIR /app

# Copy package.json trước để cache layer
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["npm", "start"]