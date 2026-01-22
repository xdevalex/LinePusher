# Project Context

## Purpose

LinePusher is a lightweight notification service that delivers important system events directly to LINE.

The project is designed for non-engineers, solo operators, and small teams who want to receive timely notifications without building or maintaining their own notification infrastructure.

The core promise of LinePusher is:

> If something important happens, you will know immediately — on LINE.

### Goals

**Primary Goals**
- Provide a simple and reliable way to deliver system events to LINE
- Minimize user setup, configuration, and cognitive overhead
- Ensure predictable, bounded behavior with clear delivery limits

**Secondary Goals**
- Enable sustainable, low-maintenance operation
- Support long-term evolution without breaking user expectations
- Serve as a stable, cash-flow-oriented product rather than a growth-at-all-costs platform

---

## Tech Stack

This project intentionally avoids committing to specific implementation technologies at the specification level.

Technology choices are considered an implementation detail and may evolve independently as long as externally observable behavior remains compliant with the specifications.

---

## Project Conventions

### Code Style

Not defined at the specification level.

Code style, formatting, and language-specific conventions are left to implementation repositories and do not affect product behavior.

---

### Architecture Patterns

The project follows these high-level design principles:

- Behavior-first design: externally observable behavior is defined before implementation
- Single responsibility: each user action triggers one well-defined system behavior
- Deterministic outcomes: the same action under the same conditions produces the same result
- Stability over extensibility: features are added conservatively

No specific architectural pattern (monolith, microservices, event-driven, etc.) is mandated by this project.

---

### Testing Strategy

Testing strategy is derived directly from specifications.

- Each specification defines behavior that must be verifiable through tests
- Tests validate observable outcomes, not internal implementation details
- A behavior not covered by a specification is considered unsupported

Test frameworks, coverage targets, and tooling are implementation concerns and are not specified here.

---

### Git Workflow

This project uses specifications as the primary governance mechanism.

- Specifications define supported behavior
- Implementation changes must conform to approved specifications
- Breaking behavior changes require explicit specification changes

Branching strategy, commit conventions, and CI requirements are implementation-specific and out of scope for this document.

---

## Domain Context

LinePusher operates in the domain of human-facing notifications.

Key characteristics of this domain include:

- Notifications are low-frequency but high-importance
- Users expect immediate visibility and minimal delay
- Reliability and predictability are valued over throughput
- Over-notification degrades trust and user experience

LinePusher is not a messaging platform, event stream processor, or automation framework.

---

## Important Constraints

### Product Constraints
- Notifications are quota-limited and bounded
- Each triggering event results in at most one delivered notification
- Behavior must be explainable to non-technical users

### Cost Constraints
- Each delivered notification incurs real cost
- Unbounded or high-frequency delivery is intentionally unsupported
- Cost control is a first-class product concern

### Scope Constraints
- No client applications or SDKs are provided
- No guarantees of exactly-once or real-time delivery are implied
- Advanced routing, fan-out, or customization is out of scope

---

## External Dependencies

At the specification level, LinePusher depends on the following external concepts:

- LINE Official Account as the delivery channel
- HTTP-accessible endpoints as notification triggers

Specific APIs, SDKs, vendors, or infrastructure services are not referenced in specifications and may change over time.

---

## Specification Philosophy

This repository uses OpenSpec to define and govern product behavior.

Specifications in this project:

- Describe observable behavior, not implementation
- Avoid referencing concrete technologies
- Serve as the single source of truth for supported functionality

Anything not explicitly defined in a specification is considered unsupported by default.

---

## Baseline Status

The current specifications represent the initial behavioral baseline.

At this stage:
- Specifications may be edited directly
- The focus is clarity and shared understanding
- No backward compatibility guarantees are implied

Once the baseline stabilizes, all behavior changes should be introduced through a formal OpenSpec change process.

---

## Governance and Accountability

All specifications and changes must be reviewed and approved by a human maintainer.

AI assistance may be used for drafting and exploration, but does not replace human judgment or accountability.

The human maintainer remains fully accountable for all decisions and approved artifacts.

---

## Non-Goals

LinePusher does not aim to be:

- A general-purpose automation platform
- A real-time messaging or chat system
- A developer-first infrastructure service
- A free or unlimited notification provider

Any proposal that moves the project toward these directions must be explicitly justified and governed.

---

## Long-Term Intent

LinePusher is intended to be a stable, small-scale, sustainable product.

Success is measured by:
- Predictable behavior
- Low operational complexity
- Long-term user trust
- Sustainable maintenance cost

Growth that compromises these qualities is explicitly deprioritized.

---

## Final Note

If a behavior feels ambiguous, surprising, or difficult to explain to a non-technical user, it likely does not belong in the product.

Clarity is the feature.
