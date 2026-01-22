import Fastify from "fastify";
import health from "./routes/health";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(health, { prefix: "/health" });

  return app;
}
