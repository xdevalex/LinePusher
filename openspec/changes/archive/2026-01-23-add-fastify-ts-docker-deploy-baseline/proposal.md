# Change: Add Fastify + TypeScript Docker deployment baseline requirement

## Why
The Docker deployment baseline for production is currently described in a narrative document (`openspec/specs/linepusher/LP-CB-10-fastify-ts-docker-deploy.md`) but is not expressed as a machine-parseable OpenSpec requirement.

We need a formal requirement so that the Docker deployment process can be validated, reasoned about, and evolved using the OpenSpec workflow. This complements the existing development baseline requirement by specifying production deployment capabilities.

## What Changes
- Add a new `linepusher` capability requirement for the Fastify + TypeScript Docker deployment baseline.
- Capture the Dockerfile structure, build process, and runtime configuration as a structured requirement with scenarios.
- Specify the observable behaviors: Docker image can be built, container can be run, and application works correctly in production environment.
- Include proxy trust configuration for reverse proxy deployments.
- Require `compose.yaml` file for simplified container management and orchestration.

## Impact
- Affected specs: `linepusher` (new requirement)
- Affected code: Docker configuration, deployment tooling, and production runtime configuration.
