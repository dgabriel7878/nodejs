FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json first for better caching
COPY package.json ./
RUN npm install --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nodejs && \
    chown -R nodejs:nodejs /usr/src/app

USER nodejs

EXPOSE 3000

CMD ["node", "app.js"]