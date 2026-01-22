# LP-CB-04 - Notification Triggered Push

## Summary

When a user's notification link is accessed,  
the system delivers a push notification to the corresponding LINE user.

---

## Trigger

- A request is received at the user's notification link.

---

## Expected Behavior

- The system resolves the request to a specific user.
- The system sends exactly one push notification to that user.
- The notification confirms that an event has been delivered.

---

## Invariants

- One request results in at most one push notification.
- Only successfully delivered notifications count toward usage quota.

---

## Non-Goals

- Supporting batch delivery or fan-out behavior.
- Supporting message customization or rich payloads.
- Providing delivery guarantees beyond best-effort notification.

---

## Implementation Notes (LINE Messaging API)

- The service is implemented with TypeScript + Fastify.
- The webhook endpoint receives user-triggered notification commands.
- For each valid request, the system sends one push notification to the LINE friend via the LINE Message API.
- A separate webhook endpoint receives LINE friend query commands and replies with query results via the LINE Message API.

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
