# LP-CB-11 - Fastify + TypeScript Ops Baseline

## Summary

Operational baseline practices for production reliability.

---

## Must-Do

- Do not run production with ts-node.
- Enable graceful shutdown.
- Enable logger.
- Provide a health check endpoint.

---

## Fastify Shutdown Handling

```ts
process.on("SIGTERM", async () => {
  await app.close();
  process.exit(0);
});
```
