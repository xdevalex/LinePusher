# LP-CB-08 - Fastify + TypeScript Development Baseline

## Summary

Practical baseline for local development with TypeScript + Fastify.

---

## 1. Project Initialization

```bash
mkdir fastify-ts-app
cd fastify-ts-app
npm init -y
```

Install core dependencies:

```bash
npm install fastify
npm install -D typescript ts-node-dev @types/node
```

---

## 2. TypeScript Configuration

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

## 3. Suggested Project Structure

```text
fastify-ts-app/
├─ src/
│  ├─ server.ts
│  ├─ app.ts
│  └─ routes/
│     └─ health.ts
├─ dist/
├─ package.json
├─ tsconfig.json
```

---

## 4. Fastify Code

`src/app.ts`

```ts
import Fastify from "fastify";
import health from "./routes/health";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(health, { prefix: "/health" });

  return app;
}
```

`src/routes/health.ts`

```ts
import { FastifyInstance } from "fastify";

export default async function (app: FastifyInstance) {
  app.get("/", async () => {
    return { status: "ok" };
  });
}
```

`src/server.ts`

```ts
import { buildApp } from "./app";

const app = buildApp();

const port = Number(process.env.PORT) || 3000;

app.listen({ port, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
```

---

## 5. Development Script

`package.json`

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

```bash
npm run dev
```
