# Sử dụng Node.js 18
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json trước để cache dependencies
COPY package*.json ./

# Cài dependencies
RUN npm install

# Cài Babel CLI nếu cần build
RUN npm install -g @babel/core @babel/cli

# Copy toàn bộ code
COPY . .

# Build code bằng Babel
RUN npm run build-src


# Lệnh khởi chạy server
CMD ["npm","run", "build"]
