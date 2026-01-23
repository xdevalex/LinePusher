## ADDED Requirements

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
