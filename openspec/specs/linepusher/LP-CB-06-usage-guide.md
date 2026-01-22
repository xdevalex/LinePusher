# LP-CB-06 - Usage Guide

## Summary

The system provides a simple, non-technical usage guide to help users understand how to use LinePusher.

---

## Trigger

- The user selects the "Usage Guide" menu action.

---

## Expected Behavior

- The system responds with a short, step-by-step guide that:
  1. Instructs the user to obtain a notification link.
  2. Explains that systems can access the link when events occur.
  3. Confirms that notifications will be delivered on LINE.
- The guide avoids technical terminology.

---

## Invariants

- The usage guide is always accessible.
- The guide content is deterministic and does not vary by user state.

---

## Non-Goals

- Teaching technical concepts such as webhooks.
- Providing advanced configuration or troubleshooting steps.

---

## Implementation Notes

- The service is implemented with TypeScript + Fastify.
