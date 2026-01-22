# LP-CB-03 - Generate or Retrieve Notification Link

## Summary

When a user requests a notification link,  
the system provides a dedicated notification endpoint associated with that user.

---

## Trigger

- The user selects the "Get Notification Link" menu action.

---

## Expected Behavior

- If the user does not yet have a notification link:
  - The system creates a new notification link.
- If the user already has a notification link:
  - The system returns the existing link.
- The link is presented to the user in a copyable form.

---

## Invariants

- A user has at most one active notification link.
- Repeated requests do not create additional links.
- Providing the link does not consume notification quota.

---

## Non-Goals

- Defining the link format, token generation, or security mechanism.
- Supporting multiple active links per user.

---

## Implementation Notes (LINE Messaging API)

- The service is implemented with TypeScript + Fastify.
- The notification link is a webhook endpoint used to receive user-triggered notification commands.
- On receipt, the system sends a push notification to the LINE friend via the LINE Message API.

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
