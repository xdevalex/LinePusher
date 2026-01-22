# LP-CB-02 - Menu Entry Points

## Summary

The LINE bottom menu provides stable entry points for all primary user interactions with LinePusher.

---

## Menu Actions

The following menu actions MUST be available:

- Get Notification Link
- Notification Info
- Usage Guide
- Push History

---

## Expected Behavior

- Each menu action triggers a single, well-defined system behavior.
- Menu actions do not require free-text input from the user.
- Menu actions are accessible at all times.

---

## Invariants

- The menu structure remains stable over time.
- The meaning of each menu action does not change based on user state.

---

## Non-Goals

- Defining menu layout, grid size, or icon styles.
- Supporting dynamic, personalized, or conditional menus.

---

## Implementation Notes (LINE Messaging API)

- The service is implemented with TypeScript + Fastify.
- Two primary behaviors:
  1. Provide a webhook link to receive user-triggered notification commands and push a notification to the LINE friend via the LINE Message API.
  2. Provide a webhook link to receive LINE friend query commands and reply with query information via the LINE Message API.

## Messaging API Development Guidelines (Must Follow)

### Prohibited

- Do not send mass requests to the LINE Platform or exceed rate limits.
- Do not load test through the LINE Platform.
- Do not send mass messages to the same user.
- Do not send requests to invalid user IDs.
- Do not attempt to identify user attributes.
- Do not restrict access by IP address (use signature validation instead).

### Recommended

- Verify webhook signature on receipt.
- Handle unsend events appropriately.
- Design for non-breaking additions to webhook/API payloads.
- Save logs for both Messaging API requests and received webhooks.
