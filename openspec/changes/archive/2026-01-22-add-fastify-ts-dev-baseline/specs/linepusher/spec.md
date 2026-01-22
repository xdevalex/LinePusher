## ADDED Requirements

### Requirement: Fastify + TypeScript development baseline
The development environment SHALL support local development with TypeScript + Fastify, providing a development server that can be started, TypeScript compilation that succeeds, and a health endpoint that responds correctly.

The development baseline SHALL include:
- Project structure with `src/` directory containing `server.ts`, `app.ts`, and `routes/health.ts`
- TypeScript configuration (`tsconfig.json`) with target ES2020, CommonJS modules, strict mode enabled
- Package dependencies: `fastify` for runtime, `typescript`, `ts-node-dev`, `@types/node` for development
- Development script (`npm run dev`) that starts the server with hot-reload using `ts-node-dev`
- Build script (`npm run build`) that compiles TypeScript to JavaScript
- Start script (`npm start`) that runs the compiled JavaScript from `dist/`
- Version control configuration that excludes build artifacts: `dist/` and `node_modules/` directories SHALL be ignored by version control (e.g., via `.gitignore`)

The application SHALL expose a health endpoint at `/health` that returns `{ status: "ok" }` when accessed.

#### Scenario: Development server startup
- **WHEN** a developer runs `npm run dev` in the project root
- **THEN** the TypeScript development server starts successfully
- **AND** the server listens on the port specified by `PORT` environment variable (default: 3000)
- **AND** the server binds to `0.0.0.0` to accept connections from any interface
- **AND** the server logs startup information via Fastify's logger

#### Scenario: TypeScript compilation
- **WHEN** a developer runs `npm run build`
- **THEN** TypeScript compiles all source files from `src/` directory
- **AND** compiled JavaScript files are output to `dist/` directory
- **AND** compilation succeeds without errors when using strict mode
- **AND** the compiled `dist/server.js` can be executed with `npm start`

#### Scenario: Health endpoint response
- **WHEN** a client sends a GET request to `/health`
- **THEN** the server responds with status code 200
- **AND** the response body is `{ status: "ok" }`
- **AND** the response is returned successfully

#### Scenario: Version control excludes build artifacts
- **WHEN** the project is under version control
- **THEN** the `dist/` directory is excluded from version control
- **AND** the `node_modules/` directory is excluded from version control
- **AND** only source code, configuration files, and package metadata are tracked
