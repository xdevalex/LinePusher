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
