# Change: Add Fastify + TypeScript development baseline requirement

## Why
The development baseline for local development with TypeScript + Fastify is currently described in a narrative document (`openspec/specs/linepusher/LP-CB-08-fastify-ts-dev-baseline.md`) but is not expressed as a machine-parseable OpenSpec requirement.

We need a formal requirement so that the development environment setup can be validated, reasoned about, and evolved using the OpenSpec workflow.

## What Changes
- Add a new `linepusher` capability requirement for the Fastify + TypeScript development baseline.
- Capture the project structure, TypeScript configuration, and development server setup as a structured requirement with scenarios.
- Specify the observable behaviors: development server can start, TypeScript compiles successfully, health endpoint responds correctly.
- Require that build artifacts (`dist/` and `node_modules/`) are excluded from version control.
- Establish a baseline spec that future changes can extend or modify via the OpenSpec change process.

## Impact
- Affected specs: `linepusher`
- Affected code: Development environment setup, project structure, and development tooling configuration.
