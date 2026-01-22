# LP-CB-10 - Fastify + TypeScript Docker Deploy Baseline

## Summary

Production Docker deployment baseline for Fastify + TypeScript.

---

## 1. Dockerfile (Production)

```Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/server.js"]
```

---

## 2. Build & Run

```bash
docker build -t fastify-ts-app .
docker run -d -p 3000:3000 fastify-ts-app
```

---

## 3. Proxy Settings

Fastify should trust the proxy when running behind a reverse proxy:

```ts
Fastify({ trustProxy: true });
```
