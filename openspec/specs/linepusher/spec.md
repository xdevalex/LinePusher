# linepusher Specification

## Purpose
This specification defines the core behaviors of LinePusher, a notification service that delivers system events to users via LINE.
## Requirements
### Requirement: Follow welcome message
When a user adds LinePusher as a LINE friend, the system SHALL send a welcome message that explains the service purpose and guides the user to the next action without consuming notification quota.

The welcome message SHALL contain the following content:
- A greeting that includes the user's nickname: "👋 {Nickname} 您好，歡迎使用 LinePusher"
- An explanation that LinePusher is a push service that delivers system events to LINE in real-time: "這是一個可以把「系統事件」即時送到 LINE 的推播服務。"
- Instructions on how to obtain a dedicated notification link: "只要取得一個專用連結，當你的系統或服務有狀況時，您就會收到通知。"
- Direction to use the bottom menu to get started: "👉 請從下方選單點選 「取得通知連結」 開始使用。"

#### Scenario: New user follows LinePusher
- **WHEN** a LINE follow event is received from a user
- **THEN** the system associates the LINE user with an internal user identity
- **AND** the system sends exactly one welcome message to the user
- **AND** the welcome message contains a greeting with the user's nickname in the format "👋 {Nickname} 您好，歡迎使用 LinePusher"
- **AND** the welcome message explains that LinePusher delivers system events to LINE in real-time
- **AND** the welcome message indicates that a dedicated notification link is available and explains how to obtain it
- **AND** the welcome message directs the user to use the bottom menu item "取得通知連結" to start using the service
- **AND** sending the welcome message does not consume notification quota

### Requirement: Fastify + TypeScript development baseline
The development environment SHALL support local development with TypeScript + Fastify, providing a development server that can be started, TypeScript compilation that succeeds, and a health endpoint that responds correctly.

The development baseline SHALL include:
- Project structure with `src/` directory containing `server.ts`, `app.ts`, and `routes/health.ts`
- TypeScript configuration (`tsconfig.json`) with target ES2020, CommonJS modules, strict mode enabled
- Package dependencies: `fastify` for runtime, `typescript`, `ts-node-dev`, `@types/node` for development
- Development script (`npm run dev`) that starts the server with hot-reload using `ts-node-dev`
- Build script (`npm run build`) that compiles TypeScript to JavaScript for production deployment
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
- **WHEN** a developer runs `npm run build` in the project root
- **THEN** TypeScript compiles all source files from `src/` directory
- **AND** compiled JavaScript files are output to `dist/` directory with the following structure:
  - `dist/app.js` (compiled from `src/app.ts`)
  - `dist/server.js` (compiled from `src/server.ts`)
  - `dist/routes/` directory containing compiled route files (e.g., `dist/routes/health.js` from `src/routes/health.ts`)
- **AND** compilation succeeds without errors when using strict mode
- **AND** the compiled `dist/server.js` can be executed with `npm start`
- **AND** the build produces production-ready JavaScript artifacts suitable for deployment

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

### Requirement: Fastify + TypeScript Docker deployment baseline
The deployment environment SHALL support production deployment of the Fastify + TypeScript application using Docker, providing a containerized runtime that can be built, started, and operated in production.

The Docker deployment baseline SHALL include:
- Dockerfile based on `node:20-alpine` for production deployment
- Multi-stage build process that installs production dependencies and copies compiled artifacts
- Environment configuration: `NODE_ENV=production`, port `3000` exposed
- Fastify configured to trust proxy when running behind a reverse proxy: `Fastify({ trustProxy: true })`
- Container entry point that executes `node dist/server.js`
- `compose.yaml` file for simplified container management and orchestration

The Docker image SHALL be buildable with `docker build -t fastify-ts-app .` and runnable with `docker run -d -p 3000:3000 fastify-ts-app`.

The Docker image SHALL be tagged with a version label. When no explicit tag is specified, the image SHALL use the `latest` tag (e.g., `fastify-ts-app:latest`). For production deployments, explicit version tags SHALL be used (e.g., `fastify-ts-app:v1.0.0` or semantic versioning format).

The deployment SHALL provide a `compose.yaml` file that allows operators to manage the application using Docker Compose commands, simplifying build, start, stop, and restart operations.

#### Scenario: Docker image build
- **WHEN** a developer runs `docker build -t fastify-ts-app .` in the project root
- **THEN** Docker builds the image successfully using the Dockerfile
- **AND** the image is based on `node:20-alpine`
- **AND** production dependencies are installed from `package.json`
- **AND** compiled artifacts from `dist/` directory are copied into the image
- **AND** the image is tagged as `fastify-ts-app:latest` (default tag when no explicit version is specified)

#### Scenario: Docker image build with version tag
- **WHEN** a developer runs `docker build -t fastify-ts-app:v1.0.0 .` (or any semantic version format) in the project root
- **THEN** Docker builds the image successfully using the Dockerfile
- **AND** the image is tagged with the specified version (e.g., `fastify-ts-app:v1.0.0`)
- **AND** the version tag follows semantic versioning or a consistent versioning scheme
- **AND** the tagged image can be used for production deployments with explicit version tracking

#### Scenario: Docker container startup
- **WHEN** a developer runs `docker run -d -p 3000:3000 fastify-ts-app`
- **THEN** the container starts successfully
- **AND** the application runs inside the container
- **AND** the container exposes port 3000
- **AND** the application listens on port 3000 within the container
- **AND** the application is accessible from the host via the mapped port

#### Scenario: Production runtime configuration
- **WHEN** the application runs in a Docker container
- **THEN** `NODE_ENV` is set to `production`
- **AND** Fastify is configured with `trustProxy: true` to handle reverse proxy scenarios
- **AND** the application executes `node dist/server.js` as the entry point
- **AND** the application functions correctly in the containerized environment

#### Scenario: Health endpoint in container
- **WHEN** a client sends a GET request to `/health` on the containerized application
- **THEN** the server responds with status code 200
- **AND** the response body is `{ status: "ok" }`
- **AND** the response is returned successfully

#### Scenario: Docker Compose management
- **WHEN** an operator runs `docker compose up -d` in the project root
- **THEN** Docker Compose reads the `compose.yaml` file
- **AND** the application container is built and started
- **AND** the container is accessible on the configured port
- **AND** the operator can manage the application using standard Docker Compose commands (`up`, `down`, `restart`, `logs`, etc.)
- **AND** the compose.yaml configuration simplifies deployment management compared to manual docker commands

