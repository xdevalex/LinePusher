# Change: Add Fastify + TypeScript build baseline requirement

## Why
The build baseline for producing production JavaScript artifacts is currently described in a narrative document (`openspec/specs/linepusher/LP-CB-09-fastify-ts-build.md`) but is not fully captured in the existing OpenSpec requirement.

The existing "Fastify + TypeScript development baseline" requirement covers the build process but lacks specific details about the production build output structure. We need to enhance the requirement to specify the exact structure of compiled artifacts for production deployment.

## What Changes
- Modify the existing `linepusher` capability requirement for Fastify + TypeScript to include production build baseline details.
- Enhance the TypeScript compilation scenario to specify the exact output structure: `dist/` directory containing `app.js`, `server.js`, and `routes/` subdirectory.
- Clarify that the build process produces production-ready JavaScript artifacts suitable for deployment.

## Impact
- Affected specs: `linepusher` (modification of existing requirement)
- Affected code: Build process and deployment tooling that relies on the specific output structure.
